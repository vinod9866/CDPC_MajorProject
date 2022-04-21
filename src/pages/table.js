import classes from "./table.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from "react";
import { getDriveRegisteredStudents, registerDrive } from "../apis";
import AuthContext from '../store/auth-context';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Model } from "./modal";

function Table(props) {
  const [shows, setShows] = useState(false);
  const [showe, setShowe] = useState(false);
  const [msg,setMsg] = useState("");

  const [show, setShow] = useState(false);
  const [adminModal,setAdminModal] = useState(false)
  const [pop,setPop] = useState(false)
  const [popMsg,setPopMsg] = useState("")
  const [registerData,setRegisterData] = useState([])
  const authCtx = useContext(AuthContext); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdminShow = () =>{
    setAdminModal(true)
  }
  useEffect(()=>{
    getDriveRegisteredStudents(data.id)
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      if(result.status===200){
        setRegisterData([...result.data])
      }
    })
  },[])
  const handleAdminClose = () =>setAdminModal(false)
  const applyDrive = () => {
    registerDrive(data.id)
    .then(res=>res.json())
    .then(result=>{
      setShow(false);
      if(result.status===200){
        // setShows(true)
        props.onSuccess()
      }else{
        props.onError(result.error)
      }
    })
    handleClose()
  }
  const downloadData = () =>{
    setPop(true)
    setPopMsg("All registered students downloading")
  }
  const handlePopUp=()=>{
    setPop(false)
  }

  const data = props.data;
  const isActive = props.stat;
  return (
    <div>
    <div className="row">
      <div className="col-0"></div>
      <div className="col-12">
        <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title className="text-start">
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <span className="fs-4 fw-bolder">{data.name}</span>
              <span className="h6" style={{marginLeft:'1rem'}}>{<span className={props.stat ? 'badge bg-success' : 'badge bg-danger'}>
              {props.stat? 'Active' : 'Inactive'}
              </span>}</span>
            </div>
            <div className="ms-auto p-2 bd-highlight">
            {authCtx.Person==="ADMIN"?<><Button variant="outline-primary" className="btn-sm" onClick={handleAdminShow}>Regitertions <span>1</span></Button>&nbsp;&nbsp;</>:null}
            <Modal show={adminModal} onHide={handleAdminClose} backdrop="static">
              <Modal.Body>
              <table className={classes.table}>
                <thead>
                  <tr className={classes.tr}>
                    <th className={classes.th}>Student Id</th>
                    <th className={classes.th}>Student Name</th>
                    <th className={classes.th}>Phone NO</th>
                  </tr>
                </thead>
                <tbody>
                {registerData.map((data,key)=>{
                  return <tr className={classes.tr} key={key}>
                    <td className={classes.th}>{data.userId}</td>
                    <td className={classes.th}>{data.username}</td>
                    <td className={classes.th}>{data.mobile}</td>
                  </tr>
                  
                })}
                </tbody>
              </table>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleAdminClose} className="btn-sm">
                Close
              </Button>
              <Button variant="primary" onClick={downloadData} className="btn-sm">
                Download
              </Button>
              {pop?<Model parentCallback={handlePopUp} style={classes.modalClass} heading="">
        <div>
            {popMsg}
        </div>
    </Model>:""}
              
            </Modal.Footer>
            </Modal>
            <Button variant="outline-primary" className="btn-sm" onClick={handleShow}>View&nbsp;&amp;&nbsp;Apply</Button>
            <Modal show={show} onHide={handleClose} backdrop="static">
        {/* <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <span className="fs-5 fw-bold text-muted text-decoration-underline">Company Details</span>
          <div>
            <span className="fw-bold">Company Name&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.name}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Company Location&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.location}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Website Link&nbsp;:&nbsp;</span>
            <a href={data.websitelink} className="text-decoration-none mt-1" target="_blank">{data.websitelink}</a>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Company Description&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.desc}</span>
          </div>
          <div className="mt-4">
          <span className="mt-3 fs-5 fw-bold text-muted text-decoration-underline">Eligibility Criteria</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">CGPA:</span><br></br>
            <span className="mt-1">X&nbsp;(Percentage)&nbsp;:&nbsp;{data.eligibilityData.primary}</span><br></br>
            <span className="mt-1">XII&nbsp;(Percentage)&nbsp;:&nbsp;{data.eligibilityData.secondary}</span><br></br>
            <span className="mt-1">B.Tech&nbsp;(Percentage)&nbsp;:&nbsp;{data.eligibilityData.degree}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Eigible Branches&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.eligibilityData.branches.join(",")}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Year of Pass&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.eligibilityData.yearOfPass}</span>
          </div>
          <div className="mt-4">
          <span className="fs-5 fw-bold text-muted text-decoration-underline">Job Details</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Joining Location&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.eligibilityData.joiningLocation}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Training&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.eligibilityData.training}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Stipend : </span>
            <span className="mt-1">{data.eligibilityData.stipend}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">PPO(if any) : </span>
            <span className="mt-1">{data.eligibilityData.ppoOffer}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Job Nature : </span>
            <span className="mt-1">{data.eligibilityData.jobNature}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Bond(if any) : </span>
            <span className="mt-1">{data.eligibilityData.bond}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Bond Description : </span>
            <span className="mt-1">{data.eligibilityData.desc}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Last Date To Apply : </span>
            <span className="mt-1">{data.lastOfApply}</span>
          </div>
          <div className="mt-4">
          <span className="fs-5 fw-bold text-muted text-decoration-underline">Selection Process</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Drive Mode : </span>
            <span className="mt-1">{data.mode}</span>
          </div>
          <div className="mt-3">
            <span className="text-danger fw-bold" style={{fontSize:"0.9rem"}}>Note : Your current resume in profile will be attached.</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn-sm">
            Close
          </Button>
          <Button variant="primary" onClick={applyDrive} className="btn-sm">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
          </div>
          </Card.Title>
          <span className="text-start fs-6 fw-bold  text-muted"><p>Eligible Branches:
            &nbsp;<span className="text-uppercase">{data.eligibilityData.branches.join(",")}</span></p></span>
          <span className="text-start text-danger"><p className={classes.last}>Last Date:{data.lastOfApply}</p></span>
        </Card.Body>
      </Card>
      </div>
      <div className="col-0"></div>
    </div>
    </div>
  );
}

export default Table;
