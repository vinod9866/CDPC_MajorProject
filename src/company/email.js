import { Card, FormControl, InputGroup,Button, Form } from "react-bootstrap";
import classes from "./email.module.css";
import {MdEmail} from "react-icons/md"
import {RiOpenArmLine} from "react-icons/ri"
import logos from "./logos.png"
import { useRef, useState } from "react";
import { inviteCompany } from "../apis";
function CompanyRegister() {

  const field = useRef();
  const [err,setErr]=useState(null);
  const [succ,setSucess] = useState(false);
  const [response,setResponse] = useState(false);


  function submitHandler(){
    setErr(null)
    const email = field.current.value.trim();
    if(email==''){
      setErr("Enter email!");
      return 
    }else if(!email.includes('@')){
      setErr('Missing "@" in email')
      return 
    }
    setResponse(true)
    inviteCompany(email)
    .then(res=>res.json())
    .then(out=>{
      setResponse(false);
      if(out.status === 200){
        setSucess(true)
      }
      else{
        setErr("Unable to send mail");
      }
    })
  }

  return (

    <div>
        <Card>
          {/* <Card.Header>
          </Card.Header> */}
          <Card.Body>
          <Card.Img className="position-absolute top-0 start-50 translate-middle mt-5" variant="top" src={logos} style={{ width: '5rem' }} />

          {/* <RiOpenArmLine size={80}/> */}
              <br/><br/><div className="mt-5">
              {!err && <div className={succ ? classes.success : classes.info}>
            <i className= {succ ?"fa fa-check-square-o":"fa fa-info-circle"}></i>
            &nbsp;{succ ? "Mail Sent Successfully." : "Enter Only Company Mail ID."}
          </div>          }
          {err &&
          <div className={classes.error}>
            <i className="fa fa-info-circle"></i>&nbsp;{err}
          </div>}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><MdEmail  size={25}/></InputGroup.Text>
                <Form.Control type="email"
                  placeholder="Enter email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  ref={field}
                />
              </InputGroup>
              <Button className={classes.btn} onClick={submitHandler} varient="primary">{response ? "Sending....." : "Submit"}</Button>
              </div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CompanyRegister;
