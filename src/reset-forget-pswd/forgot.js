

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
import { resetPasswordApi, updatePassword } from "../apis";
import { useNavigate } from "react-router-dom";
function Forgot(props){

    const navigate = useNavigate();
    const [err,setErr] = useState(null);
    const n1 = useRef();
    const n2 = useRef();
    const old = useRef();
    const [isLoading,SetIsLoading] = useState(false);
    function submitHandler(e){
        e.preventDefault()
        SetIsLoading(true)
        setErr(null);
        const N1 = n1.current.value;
        const N2 = n2.current.value;
        const Old = old.current.value;
        if (!(N1 && N2 && Old)){
            setErr("Enter the new password")
        }
        else if( N1===N2){
            if(N1===' '){
                setErr("No spaces allowed")
            }
        }else{
            setErr("Confirm the password correctly")
        }

        if(props.value==="true"){
            updatePassword({"oldPassword":Old,"confPassword":N1})
            .then(res=>res.json())
            .catch(result=>{
                console.log(result)
                if(result==="Password Updated"){
                    console.log("working...")
                    navigate("/home")
                    // setErr(result)
                }
                // setErr(result)
                // navigate("/Aprofile")
            })
            
        }else{
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');
            resetPasswordApi(token,N1)
            .then(res=>res.json())
            .catch(result=>result)
        }
        SetIsLoading(false)
        n1.current.value=""
        n2.current.value=""
        old.current.value=""
    }


    return(
        <Card className={classes.pad}>
        {props.value==="true" ? null : <Card.Img className={classes.logo}  src={userlogo} />}
          <Card.Body>
            <div> 
                <h1 ></h1>
                <h4 className={classes.sty}><FaUserLock size={25} style={{paddingBottom:"7px"}} />  Change Password</h4>
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
                { props.value &&
                       <InputGroup className="mb-3" >
                       <FormControl required type="password" className={err && classes.err}
                       placeholder="enter old password"
                       aria-describedby="basic-addon1"
                       ref={old}
                       />
                   </InputGroup >
                } 
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