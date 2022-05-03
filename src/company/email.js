import { Card, FormControl, InputGroup,Button } from "react-bootstrap";
import classes from "./email.module.css";
import {MdEmail} from "react-icons/md"
import {RiOpenArmLine} from "react-icons/ri"
import logos from "./logos.png"
function CompanyRegister() {
  return (

    <div className={classes.me}>
        <Card >
          <Card.Body>
          <Card.Img variant="top" src={logos} style={{ width: '5rem' }} />
          {/* <RiOpenArmLine size={80}/> */}
          <div className={classes.info}>
            <i className="fa fa-info-circle"></i>&nbsp;Enter Only Company Mail ID
          </div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><MdEmail  size={25}/></InputGroup.Text>
                <FormControl
                  placeholder="User email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button className={classes.btn}  varient="primary">submit</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CompanyRegister;
