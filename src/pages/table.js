import classes from "./table.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext, useEffect, useState } from "react";
import { getDriveRegisteredStudents, registerDrive, updateStudentDriveStutus } from "../apis";
import AuthContext from "../store/auth-context";
import { Model } from "./modal";
import { Form, Spinner } from "react-bootstrap";
import * as XLSX from "xlsx";

function Table(props) {
  const [shows, setShows] = useState(false);
  const [spin, setSpin] = useState(false);
  const [msg, setMsg] = useState("");
  const [selected, setSelected] = useState(false);
  const [students,setStudents] = useState([])
  const [process,setProcess] = useState(false)
  const [load,setLoad] = useState(false)

  const [show, setShow] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [pop, setPop] = useState(false);
  const [popMsg, setPopMsg] = useState("");
  const [registerData, setRegisterData] = useState([]);
  const authCtx = useContext(AuthContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdminShow = () => {
    setAdminModal(true);
  };
  useEffect(() => {
    setSpin(true)
    getDriveRegisteredStudents(data.id)
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          setSpin(false);
          setRegisterData([...result.data]);
        }
      });
  }, [process]);
  const handleAdminClose = () => setAdminModal(false);
  const applyDrive = () => {

//resume update

    registerDrive(data.id)
      .then((res) => res.json())
      .then((result) => {
        setShow(false);
        if (result.status === 200) {
          // setShows(true)
          props.onSuccess();
        } else {
          props.onError(result.error);
        }
      });
    handleClose();
  };
  const downloadData = () => {
    let xlsxdata = []
    console.log(registerData[0]);
    registerData.map((stud)=>{
      let studd = {ID:stud.userId,Name:stud.username,Phone:stud.mobile,Email:stud.useremail,Gendr:stud.gender,Branch:stud.branch,Eng:stud.engCgpa,PUC:stud.pucCgpa,Resume:stud.resumeUrl}
      xlsxdata.push(studd);
    });
    console.log(xlsxdata);
    const worksheet = XLSX.utils.json_to_sheet(xlsxdata);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "RegiterStudentsData.xlsx");
  };
  const handlePopUp = () => {
    setPop(false);
  };

  const selectStudent =(e,userId) => {
    let flag = 1;
    if(students.length!==0){
      students.map((stud)=>{
        if(stud===userId){
          flag = 0;
          const newStudents = students.filter((student) => student !== stud);
          console.log(newStudents);
          setStudents(newStudents);
        }
      })
      if(flag == 1){
        setStudents([...students,userId])
      }
    }
    else{
      console.log("wowkring..")
      setStudents([...students,userId])
    }
    
    // setSelected(e.target.checked);
    // console.log(students);
  }

  const driveStatus=()=>{
    console.log(Object.keys(data.selectionCriteria))
  }
  
  const updateProcess =()=>{
    setLoad(true)
    updateStudentDriveStutus(data.id,students)
    .then((res) => res.json())
      .then((result) => {
        setShow(false);
        if (result.status === 200) {
          // setShows(true)
          handleAdminClose()
          setStudents([])
          setProcess(!process)
          props.onStatusUpdate()
          props.onSuccess();
          setLoad(false)
        } else {
          props.onError(result.error);
          setLoad(false)
        }
      });
  }

  const data = props.data;
  var isActive = props.stat;
  const selection = Object.keys(data.selectionCriteria)
  const setActiveStatus =()=>{
    if(data.status>selection.length){
      return true
    }
    else{
      return false
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-0"></div>
        <div className="col-12">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
            {spin && <div className={classes.spin}><Spinner animation="border" variant="secondary" /></div>}
            {!spin && <><Card.Title className="text-start">
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-fill bd-highlight">
                    <span className="fs-4 fw-bolder">{data.name}</span>
                    <span className="h6" style={{ marginLeft: "1rem" }}>
                      {<span
                        className={props.stat ? "badge bg-success" : "badge bg-primary"}
                      >
                        {props.stat ? "Active" : data.status === 1 ? "Online Test" : data.status === 2 ? "TR Round" : "HR Round"}
                      </span>}
                    </span>
                  </div>
                  <div className="ms-auto p-2 bd-highlight">
                    {authCtx.Person === "ADMIN" ? (
                      <>
                        <Button
                          variant="outline-primary"
                          className="btn-sm"
                          onClick={handleAdminShow}
                        >
                          Registrations :<span className={classes.reg}> {registerData.length}</span>
                        </Button>
                        &nbsp;&nbsp;
                      </>
                    ) : null}
                    <Modal
                      {...props}
                      size="lg"
                      show={adminModal}
                      onHide={handleAdminClose}
                      backdrop="static"
                    >
                      <Modal.Body>
                        <table className={classes.table}>
                          <thead>
                            {data.status>=selection.length &&<tr>
                              <td>Final selected list</td>
                            </tr>}
                            <tr className={classes.tr}>
                              <th className={classes.th}>Student Id</th>
                              <th className={classes.th}>Student Name</th>
                              <th className={classes.th}>Phone NO</th>
                              {!setActiveStatus() && (
                                <th className={classes.th}>Interview Round</th>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {registerData.map((data, key) => {
                              return (
                                <tr className={classes.tr} key={key}>
                                  <td className={classes.th}>{data.userId}</td>
                                  <td className={classes.th}>
                                    {data.username}
                                  </td>
                                  <td className={classes.th}>{data.mobile}</td>
                                  {!setActiveStatus() && (
                                    <td className={classes.th}>
                                      <Form>
                                        <Form.Check
                                          aria-label="option 1"
                                          onChange={(e) => selectStudent(e, data.userId)} />
                                      </Form>{" "}
                                    </td>
                                  )}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleAdminClose}
                          className="btn-sm"
                        >
                          Close
                        </Button>
                        {isActive && <Button
                          variant="primary"
                          onClick={downloadData}
                          className="btn-sm"
                        >
                          Download
                        </Button>}
                        {!isActive && data.status<=selection.length && (
                          <Button
                            variant="primary"
                            onClick={updateProcess}
                            className="btn-sm"
                          >
                          {!load?(data.status===selection.length ? "Final List":"Qulified to "+selection[data.status]+" Round"):<Spinner animation="border" size="sm" variant="warning" />}
                          </Button>
                        )}
                        {pop ? (
                          <Model
                            parentCallback={handlePopUp}
                            style={classes.modalClass}
                            heading=""
                          >
                            <div>{popMsg}</div>
                          </Model>
                        ) : (
                          ""
                        )}
                      </Modal.Footer>
                    </Modal>
                    <Button
                      variant="outline-primary"
                      className="btn-sm"
                      onClick={handleShow}
                    >
                      {authCtx.Person !== "ADMIN" && (parseInt((new Date(data.lastOfApply).getTime() / 1000).toFixed(0))>parseInt((new Date()).getTime() / 1000).toFixed(0))? (
                        isActive?
                        <>View&nbsp;&amp;&nbsp;Apply</> :  <> &nbsp;View &nbsp;</>
                      ) : (
                        <>View</>
                      )}
                    </Button>
                    <Modal show={show} onHide={handleClose} backdrop="static">
                      <Modal.Body>
                        <span className="fs-5 fw-bold text-muted text-decoration-underline">
                          Company Details
                        </span>
                        <div>
                          <span className="fw-bold">
                            Company Name&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1">{data.name}</span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Company Location&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1">{data.location}</span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Website Link&nbsp;:&nbsp;
                          </span>
                          <a
                            href={data.websitelink}
                            className="text-decoration-none mt-1"
                            target="_blank"
                          >
                            {data.websitelink}
                          </a>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Company Description&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1">{data.desc}</span>
                        </div>
                        <div className="mt-4">
                          <span className="mt-3 fs-5 fw-bold text-muted text-decoration-underline">
                            Eligibility Criteria
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">CGPA:</span>
                          <br></br>
                          <span className="mt-1">
                            X&nbsp;(Percentage)&nbsp;:&nbsp;
                            {data.eligibilityData.primary}
                          </span>
                          <br></br>
                          <span className="mt-1">
                            XII&nbsp;(Percentage)&nbsp;:&nbsp;
                            {data.eligibilityData.secondary}
                          </span>
                          <br></br>
                          <span className="mt-1">
                            B.Tech&nbsp;(Percentage)&nbsp;:&nbsp;
                            {data.eligibilityData.degree}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Eigible Branches&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1 text-uppercase">
                            {data.eligibilityData.branches.join(",")}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Year of Pass&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1">
                            {data.eligibilityData.yearOfPass}
                          </span>
                        </div>
                        <div className="mt-4">
                          <span className="fs-5 fw-bold text-muted text-decoration-underline">
                            Job Details
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">
                            Joining Location&nbsp;:&nbsp;
                          </span>
                          <span className="mt-1">
                            {data.eligibilityData.joiningLocation}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Training&nbsp;:&nbsp;</span>
                          <span className="mt-1">
                            {data.eligibilityData.training}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Stipend: </span>
                          <span className="mt-1">
                            {data.eligibilityData.stipend}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">PPO(if any): </span>
                          <span className="mt-1">
                            {data.eligibilityData.ppoOffer}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Job Nature: </span>
                          <span className="mt-1">
                            {data.eligibilityData.jobNature}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Bond(if any): </span>
                          <span className="mt-1">
                            {data.eligibilityData.bond}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Bond Description: </span>
                          <span className="mt-1">
                            {data.eligibilityData.desc}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Last Date To Apply: </span>
                          <span className="mt-1">{data.lastOfApply}</span>
                        </div>
                        <div className="mt-4">
                          <span className="fs-5 fw-bold text-muted text-decoration-underline">
                            Selection Process
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="fw-bold">Drive Mode: </span>
                          <span className="mt-1">{data.mode}</span>
                        </div>
                        <div className="mt-3">
                          <span
                            className="text-danger fw-bold"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Note : Your current resume in profile will be
                            attached.
                          </span>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleClose}
                          className="btn-sm"
                        >
                          Close
                        </Button>
                        {authCtx.Person !== "ADMIN" && (parseInt((new Date(data.lastOfApply).getTime() / 1000).toFixed(0))>parseInt((new Date()).getTime() / 1000).toFixed(0))? (
                          <Button
                            variant="primary"
                            onClick={applyDrive}
                            className="btn-sm"
                          >
                            Apply
                          </Button>
                        ) : null}
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </Card.Title><span className="text-start fs-6 fw-bold  text-muted">
                  <p>
                    Eligible Branches: &nbsp;
                    <span className="text-uppercase">
                      {data.eligibilityData.branches.join(",")}
                    </span>
                  </p>
                </span><span className="text-start text-danger">
                  <p className={classes.last}>{props.stat && "Last Date To Apply : " + data.lastOfApply}</p>
                </span></>}
            </Card.Body>
          </Card>
        </div>
        <div className="col-0"></div>
      </div>
    </div>
  );
}

export default Table;
