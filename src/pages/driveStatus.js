import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Stepper,Step } from 'react-form-stepper';
import classes from "./drivestatus.module.css";

function DriveStatus(props) {

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
            {props.spin && <div className={classes.spin}><Spinner animation="border" variant="secondary" /></div>}
            {!props.spin && <><Card.Title className="text-start">
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-fill bd-highlight">
                    <span className="fs-4 fw-bolder">{props.data.driveName}</span>
                    <span className="h6" style={{ marginLeft: "1rem" }}>
                      {<span
                        className={props.data.driveStatus > 3 ? "badge bg-success" : "badge bg-info"}
                      >
                        {props.data.driveStatus === 1 ? "Online Test" : props.data.driveStatus === 2 ? "TR Round" : props.data.driveStatus === 3 ? "HR Round" : "Completed"}
                      </span>}
                    </span>
                  </div>
                </div>
              </Card.Title><div>
                  <Stepper
                    activeStep={props.data.driveStatus-1}
                    className={classes.stepcss}
                    connectorStateColors={true}
                    connectorStyleConfig={{ completedColor: '#00e673', activeColor: '#00e673', size: 2 }}
                    styleConfig={{ completedBgColor: '#00e673', activeBgColor: '#4d94ff', size: '2em', borderRadius: '75%' }}>
                    <Step label="Written Test" />
                    <Step label="TR Round" />
                    <Step label="HR Round" />
                  </Stepper>
                </div></> }
            </Card.Body>
          </Card>
        </div>
        <div className="col-0"></div>
      </div>
    </div>
  );
}

export default DriveStatus;
