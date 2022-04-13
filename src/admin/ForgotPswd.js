import { Button } from "react-bootstrap";
import { Card, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {FaUserLock} from "react-icons/fa";
import classes from "./ForgotPswd.module.css"
function FPswd(){


    return(
        <Card >
            <Card.Body style={{ padding: '3rem' }}>
                <h1 className={classes.centr}><FaUserLock size={60} /> </h1>
                <h4 className={classes.sty}>Reset Password</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"> <BsFillEnvelopeFill/></InputGroup.Text>
                    <FormControl
                    placeholder="enter ID"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button  className={classes.btn} variant="primary">Submit</Button>
            </Card.Body>
            
        </Card>
    );
}
export default FPswd;