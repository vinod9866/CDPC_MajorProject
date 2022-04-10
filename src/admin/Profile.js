import { Card } from "react-bootstrap";

import classes from "./Profile.module.css";
import { VscBroadcast } from "react-icons/vsc";
import Popup from "reactjs-popup";
import FPswd from "./ForgotPswd";
import MyCard from "../ui/card";
import { Button } from "react-bootstrap";
import userlogo from "./dude.png";
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
                  <Popup trigger={<Button variant="primary"> Forgot password? </Button>}  position="center center"> 
                      <FPswd/>
                  </Popup> 
                 </div> 
          </Card.Body>
      </Card>
      </Card.Body>
      </Card>
    );

}

export default AdminProfile;