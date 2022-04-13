import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Card, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {FaUserLock} from "react-icons/fa";
import { forgotPasswordApi } from "../apis";
import classes from "./ForgotPswd.module.css"
function FPswd(){
    const userId = useRef()
    const forgotPassword = (e)=>{
        forgotPasswordApi(userId.current.value)
        .then(res=>res.json())
        .then(result=>result)
        userId.current.value=""
    }

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
                    ref={userId}
                    />
                </InputGroup>
                <Button  className={classes.btn} onClick={forgotPassword} variant="primary">Submit</Button>
            </Card.Body>
            
        </Card>
    );
}
export default FPswd;