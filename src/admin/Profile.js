import { Card, FormControl, InputGroup } from "react-bootstrap";
import {FaUserLock} from "react-icons/fa";
import {BsFillPersonBadgeFill} from "react-icons/bs"
import classes from "./Profile.module.css";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import userlogo from "./dude.png";
import Forgot from "../reset-forget-pswd/forgot";
import {useState, useRef} from 'react';
function AdminProfile(){

    return(
      <Card >
        <Card.Body className={classes.cc}>
        <Card className={classes.pad}>
          <Card.Img className={classes.logo}  src={userlogo} />
          <Card.Body>
            <Card.Title>VinodKumar</Card.Title>
            <Card.Text>
              Main System Administrator
            </Card.Text>
                <div> 
                  <Popup trigger={<Button variant="primary"> Change password? </Button>}  position="center center"> 
                       
                      <Forgot value="true" />
                  </Popup> 
                 </div> 
          </Card.Body>
      </Card>
      </Card.Body>
      </Card>
    );

}

export default AdminProfile;