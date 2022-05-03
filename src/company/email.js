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


  function submitHandler(){
    setErr(null)
    const email = field.current.value.trim();
    if(email==''){
      setErr("Enter email!");
    }else if(!email.includes('@')){
      setErr('Missing "@" in email')
    }
    inviteCompany(email)
    .then(res=>res.json())
    .then(out=>console.log(out))
  }

  return (

    <div className={classes.me}>
        <Card >
          <Card.Body>
          <Card.Img variant="top" src={logos} style={{ width: '5rem' }} />
          {/* <RiOpenArmLine size={80}/> */}
          {!err && <div className={classes.info}>
            <i className="fa fa-info-circle"></i>&nbsp;Enter Only Company Mail ID
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
              <Button className={classes.btn} onClick={submitHandler} varient="primary">submit</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CompanyRegister;
