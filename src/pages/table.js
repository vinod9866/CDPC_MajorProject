import classes from "./table.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
function Table(props) {
  const [a, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // return(
  //     <div>

  //     </div>
  // );
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
              <span className="fs-4 fw-bolder text-muted">{props.title}</span>
              <span className="h6" style={{marginLeft:'1rem'}}>{<span className={props.stat === "Active" ? 'badge bg-success' : 'badge bg-danger'}>Active</span>}</span>
            </div>
            <div className="ms-auto p-2 bd-highlight">
            <Button variant="primary" className="btn-sm" onClick={handleShow}>View&nbsp;&amp;&nbsp;Apply</Button>
            <Modal show={a} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
          </div>
          </Card.Title>
          <span className="text-start fs-6 fw-bold"><p>Eligible Branches:&nbsp;{props.branches.map((branch)=>{
            return branch+" "
          })}</p></span>
          <span className="text-start text-danger"><p className={classes.last}>Last Date:{props.last_date}</p></span>
        </Card.Body>
      </Card>
      </div>
      <div className="col-0"></div>
    </div>
  );
}

export default Table;
