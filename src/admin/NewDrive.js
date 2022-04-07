import { event } from "jquery";
import { useState,useEffect } from "react";
import Card from "../ui/card";
import classes from "./NewDrive.module.css";

function NEWDRIVE() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    cb1:false,cb2:false,cb3:false,cb4:false,cb5:false,cb6:false,
  });
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <Card>
      <form className={classes.form}>
        <div>
          <h2>Fill The Following Details</h2>
        </div>
        <hr />
        <div>
          <h2>Company Details</h2>
          <div className={classes.control}>
            <label htmlFor="cname">Company Name<span className={classes.imp}>*</span></label>
            <input type="text" required id="cname"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="clocation">Company Location<span className={classes.imp}>*</span></label>
            <input type="text" required id="clocation"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="cdescription">Company Description<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="cdescription"></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="curl">Company URL<span className={classes.imp}>*</span></label>
            <input type="text" required id="curl"></input>
          </div>
        </div>
        <div>
          <h3>Eligibility Details</h3>
          <div className={classes.control}>
            <label htmlFor="cgpa">CGPA<span className={classes.imp}>*</span></label>
            <div className={classes.control2}>
              <div className={classes.control}>
                <label htmlFor="btech">B.Tech</label>
                <input type="text" required id="btech"></input>
              </div>
              <div className={classes.control}>
                <label htmlFor="puc">PUC</label>
                <input type="text" required id="puc"></input>
              </div>
              <div className={classes.control}>
                <label htmlFor="primary">10th</label>
                <input type="text" required id="primary"></input>
              </div>
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="allowed">Allowed Branches<span className={classes.imp}>*</span></label>
            <div>
              <div className={classes.control2}>
                <div className={classes.branch}>
                  <label htmlFor="all">All</label>
                  <input type="checkbox" id="all"  
                   onChange={(event) => selectAll(event.target.checked)}
                   checked={checkedAll} ></input>
                </div>
              </div>
              <div className={classes.control2}>
                <div className={classes.branch}>
                  <label htmlFor="cse">CSE</label>
                  <input type="checkbox" id="cse"   
                  onChange={() => toggleCheck("cb1")}
                  checked={checked["cb1"]} ></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="ece">ECE</label>
                  <input type="checkbox" id="ece" 
                   onChange={() => toggleCheck("cb2")}
                   checked={checked["cb2"]}></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="civil">Civil</label>
                  <input type="checkbox" id="civil" 
                   onChange={() => toggleCheck("cb3")}
                   checked={checked["cb3"]}></input>
                </div>
              </div>
              <div className={classes.control2}>
                <div className={classes.branch}>
                  <label htmlFor="mech">Mech</label>
                  <input type="checkbox" id="mech" 
                   onChange={() => toggleCheck("cb4")}
                   checked={checked["cb4"]}></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="chem">Chem</label>
                  <input type="checkbox" id="chem" 
                   onChange={() => toggleCheck("cb5")}
                   checked={checked["cb5"]}></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="mme">MME</label>
                  <input type="checkbox" id="mme"
                   onChange={() => toggleCheck("cb6")}
                   checked={checked["cb6"]}></input>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="ypass">Year Of Pass<span className={classes.imp}>*</span></label>
            <input type="text" required id="ypass"></input>
          </div>
        </div>
        <div>
          <h3>Job Description</h3>
          <div className={classes.control}>
            <label htmlFor="joiningLocation">Joining Location<span className={classes.imp}>*</span></label>
            <input type="text" required id="joiningLocation"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="training">Training<span className={classes.imp}>*</span></label>
            <input type="text" required id="training"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="stipend">Stipend<span className={classes.imp}>*</span></label>
            <input type="text" required id="stipend"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="ppo">PPO<span className={classes.imp}>*</span></label>
            <input type="text" required id="ppo"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="jobPosition">Job Position<span className={classes.imp}>*</span></label>
            <input type="text" required id="jobPosition"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="jobNature">Job Nature<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="jobNature"></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="bond">Bond<span className={classes.imp}>*</span></label>
            <input type="text" required id="bond"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="desc">Bond Description<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="desc"></textarea>
          </div>
        </div>
        <div className={classes.control}>
            <label htmlFor="lastdate">Last Date To Apply<span className={classes.imp}>*</span></label>
            <input type="date" required id="lastdate"></input>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}
export default NEWDRIVE;
