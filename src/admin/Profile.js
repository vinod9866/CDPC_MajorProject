import { Card, FormControl, InputGroup } from "react-bootstrap";
import {FaUserLock} from "react-icons/fa";
import {BsFillPersonBadgeFill} from "react-icons/bs"
import classes from "./Profile.module.css";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import userlogo from "./dude.png";
import Forgot from "../reset-forget-pswd/forgot";
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
                  <Popup trigger={<Button variant="primary"> Reset password? </Button>}  position="center center"> 
                  <Card >
            <Card.Body style={{ padding: '3rem' }}>
                <h1 className={classes.centr}><FaUserLock size={60} /> </h1>
                <h4 className={classes.sty}>Reset Password</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"> <BsFillPersonBadgeFill/></InputGroup.Text>
                    <FormControl
                    placeholder="enter old password"
                    aria-describedby="basic-addon1"
                    required
                    />
                </InputGroup>
                <Button  className={classes.btn} variant="primary">Submit</Button>
            </Card.Body>
            </Card>          
                      {/* <Forgot value="true" /> */}
                  </Popup> 
                 </div> 
          </Card.Body>
      </Card>
      </Card.Body>
      </Card>
    );

}

export default AdminProfile;