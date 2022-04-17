import { Button } from "react-bootstrap";
import { Card, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {FaUserLock} from "react-icons/fa";
import classes from "./ForgotPswd.module.css"
import {useState,useRef} from "react";
import { Link } from "react-router-dom";
function FPswd(){
    const id = useRef();
    const [err,setErr] = useState(null);
    const [succ,SetSucc] = useState(null);
    function submitHandler(){
        setErr(null);
        var Id = id.current.value;
        if(Id.trim()=="" ){
            setErr("Enter the ID");
            console.log(Id.length);
        }else{
            // api
            //setSucc("Mail has been sent");

            
        }

        
    }

    return(
        <Card >
            <Card.Body style={{ padding: '3rem' }}>
                <h1 className={classes.centr}><FaUserLock size={60} /> </h1>
                <h4 className={classes.sty}>Reset Password</h4>
                { err && <div className={classes.error}>
                    <i className="fa fa-times-circle"></i>&nbsp; {err}
                </div>}
                { succ && <div className={classes.error}>
                    <i className="fa fa-times-circle"></i>&nbsp; {err}
                </div>}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"> <BsFillEnvelopeFill/></InputGroup.Text>
                    <FormControl className={err && classes.err}
                    placeholder="enter ID"
                    aria-describedby="basic-addon1"
                    ref={id}/>
                </InputGroup>
                <Button  className={classes.btn} variant="primary" onClick={submitHandler}>Submit</Button>
                {err && <Link to={""} onClick={()=>{console.log("yp")}}>Login</Link>}
            </Card.Body>
            
        </Card>
    );
}
export default FPswd;