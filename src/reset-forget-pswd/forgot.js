

import classes from "./forgot.module.css";
import { Button } from "react-bootstrap";
import userlogo from "./dude.png";

import { Card, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {FaUserLock} from "react-icons/fa";
import { useRef, useState } from "react";
import { string } from "sockjs-client/lib/utils/random";
import Loading from "../components/loading";
function Forgot(props){
    const [err,setErr] = useState(null);
    const n1 = useRef();
    const n2 = useRef();
    const isLoading = true;
    function submitHandler(){
        setErr(null);
        const N1 = n1.current.value;
        const N2 = n2.current.value;
        if (!(N1 && N2)){
            setErr("Enter the new password")
        }
        else if( N1===N2){
            if(N1===' '){
                setErr("No spaces allowed")
            }
        }else{
            setErr("Confirm the password correctly")
        }

    }


    return(
        <Card className={classes.pad}>
        {props.value==="true" ? null : <Card.Img className={classes.logo}  src={userlogo} />}
          <Card.Body>
            <div> 
                <h1 ></h1>
                <h4 className={classes.sty}><FaUserLock size={25} style={{paddingBottom:"7px"}} />  Reset Password</h4>
                { !err && <div className={classes.info}>
                    <i className="fa fa-info-circle"></i>&nbsp;Password upto 5 characters allowed
                </div>
                }
                {err && (
                <div className={classes.error}>
                    <i className="fa fa-times-circle"></i>&nbsp; {err}
                </div>
                )}
                {/* {err && (
                <div className={classes.error}>
                    <i className="fa fa-times-circle"></i>&nbsp;Network error!
                </div> */}
                
                <InputGroup className="mb-3" >
                    <FormControl required type="password" className={err && classes.err}
                    placeholder="enter new password"
                    aria-describedby="basic-addon1"
                    ref={n1}
                    />
                </InputGroup >
                <InputGroup className="mb-3" >
                <FormControl required type="password" className={err && classes.err}
                    placeholder="confirm new password"
                    aria-describedby="basic-addon1"
                    ref={n2}
                    />
                </InputGroup>
                <Button  className={classes.btn} variant="primary"  onClick={submitHandler}>{isLoading ?<div className={classes.spin}><Loading /></div>  : "Submit"}</Button>
            
            </div> 
          </Card.Body>
      </Card>
    
    );
}

export default Forgot;