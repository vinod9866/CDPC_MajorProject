import classes from "./table.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
function Table(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = props.data;
  const isActive = props.stat;
  return (
    <div className="row">
      <div className="col-0"></div>
      <div className="col-12">
        <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title className="text-start">
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <span className="fs-4 fw-bolder">{data.name}</span>
              <span className="h6" style={{marginLeft:'1rem'}}>{<span className={props.stat === "Active" ? 'badge bg-success' : 'badge bg-danger'}>
              {props.stat === "Active" ? 'Active' : 'Inactive'}
              </span>}</span>
            </div>
            <div className="ms-auto p-2 bd-highlight">
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
            <a href="http://www.achalasol.org" className="text-decoration-none mt-1" target="_blank">{data.websitelink}</a>
          </div>
          <div className="mt-2">
            <span className="fw-bold">Company Description&nbsp;:&nbsp;</span>
            <span className="mt-1">{data.desc}</span>
          </div>
          <span className="fs-5 fw-bold text-muted text-decoration-underline">Eligibility Criteria</span>
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
          <span className="fs-5 fw-bold text-muted text-decoration-underline">Selection Process</span>
          <div className="mt-2">
            <span className="fw-bold">Drive Mode:</span><br></br>
            <span className="mt-1">{data.mode}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn-sm">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="btn-sm">
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
  );
}

export default Table;
