
import { useState,useEffect, useRef } from "react";
import { saveDrive } from "../apis";
import Card from "../ui/card";
import classes from "./NewDrive.module.css";

function NEWDRIVE() {
  const cname = useRef();
  const cloc = useRef();
  const desc = useRef();
  const curl = useRef();
  const btech = useRef();
  const puc = useRef();
  const school = useRef();
  const yop = useRef();
  const JL = useRef();
  const training = useRef();
  const stipend = useRef();
  const ppo = useRef();
  const jposition = useRef();
  const jnature = useRef();
  const jbond = useRef();
  const bdesc = useRef();
  const LDA = useRef();





  const [checkedAll, setCheckedAll] = useState(false);
  const [checkDate,setDate]= useState(false);
  const [checked, setChecked] = useState({
    cb1:false,cb2:false,cb3:false,cb4:false,cb5:false,cb6:false,
  });

  const [oft,setOft] = useState(false);
  const [tr,setTr] = useState(false);
  const [hr,setHr] = useState(false);

  const [drop,setDrop] = useState("");

  function submitHandler(event){
    event.preventDefault();
    setDate(false);

    const Cname = cname.current.value;
    const Cloc = cloc.current.value;
    const Desc = desc.current.value;
    const Curl = curl.current.value;
    const Btech = btech.current.value;
    const Puc = puc.current.value;
    const School = school.current.value;
    const Yop = yop.current.value;
    const jL = JL.current.value;
    const Training = training.current.value;
    const Stipend = stipend.current.value;
    const Ppo = ppo.current.value;
    const Jposition = jposition.current.value;
    const Jnature = jnature.current.value;
    const Jbond = jbond.current.value;
    const Bdesc = bdesc.current.value;
    const lDA = LDA.current.value;

    const tests ={"online-test":oft,"TR":tr,"HR":hr};
  //   console.log(tests)
  //   const dtests = [];
  //   for (var key in tests ){
  //     if(tests[key]){
  //       dtests.push(key);
  //     }
  //   }
  //  console.log(dtests);
  //  console.log("mydrop ",drop);


  
    const check = {"cse":checked.cb1,"ece":checked.cb2,"civil":checked.cb3,"mech":checked.cb4,"chem":checked.cb5,"mme":checked.cb6};
    const ebraches =[];
    for(var key in check){
      if(check[key]){
        ebraches.push(key);
      }
    }
   // console.log(ebraches);

    var CurrentDate = new Date();
    var GivenDate = new Date(lDA);
    if(CurrentDate>=GivenDate){
      console.log("wrong");
      setDate(true);
    }
    var driveData = {
      "name": Cname,
      "location": Cloc,
      "desc": Desc,
      "websitelink": "link",
      "addresses": [
        "string"
      ],
      "eligibilityData": {
        "primary": School,
        "secondary": Puc,
        "degree": Btech,
        "branches": ebraches,
        "yearOfPass": Yop,
        "joiningLocation": jL,
        "training": true,
        "stipend": Stipend,
        "ppoOffer": Ppo,
        "jobPosition": Jposition,
        "jobNature": Jnature,
        "bond": Jbond,
        "desc": Bdesc
      },
      "lastOfApply":lDA,
      "mode":drop,
      "selectionCriteria": tests,
      "regStudents": [
      ]
    }
    // console.log(driveData)
  saveDrive(driveData)
  .then(res=>res.json())
  .then(data=>console.log(data))
  event.target.reset()
  }


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
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>Fill The Following Details</h2>
        </div>
        <hr />
        <div>
          <h2>Company Details</h2>
          {checkDate && <div className={classes.error}>
            <i className="fa fa-times-circle"></i>&nbsp;
                The entered Date is invalid!
          </div>}
          <div className={classes.control}>
            <label htmlFor="cname">Company Name<span className={classes.imp}>*</span></label>
            <input type="text"  id="cname" ref={cname} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="clocation">Company Location<span className={classes.imp}>*</span></label>
            <input type="text"  id="clocation" ref={cloc} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="cdescription">Company Description<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="cdescription" ref={desc} ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="curl">Company URL<span className={classes.imp}>*</span></label>
            <input type="text"  id="curl" ref={curl} ></input>
          </div>
        </div>
        <div>
          <h3>Eligibility Details</h3>
          <div className={classes.control}>
            <label htmlFor="cgpa">CGPA<span className={classes.imp}>*</span></label>
            <div className={classes.control2}>
              <div className={classes.control}>
                <label htmlFor="btech">B.Tech</label>
                <input type="text"  id="btech" ref={btech}></input>
              </div>
              <div className={classes.control}>
                <label htmlFor="puc">PUC</label>
                <input type="text"  id="puc" ref={puc}></input>
              </div>
              <div className={classes.control}>
                <label htmlFor="primary">10th</label>
                <input type="text"  id="primary" ref={school}></input>
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
                  checked={checked["cb1"]}  ></input>
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
                   checked={checked["cb3"]} ></input>
                </div>
              </div>
              <div className={classes.control2}>
                <div className={classes.branch}>
                  <label htmlFor="mech">Mech</label>
                  <input type="checkbox" id="mech" 
                   onChange={() => toggleCheck("cb4")}
                   checked={checked["cb4"]} ></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="chem">Chem</label>
                  <input type="checkbox" id="chem" 
                   onChange={() => toggleCheck("cb5")}
                   checked={checked["cb5"]} ></input>
                </div>
                <div className={classes.branch}>
                  <label htmlFor="mme">MME</label>
                  <input type="checkbox" id="mme"
                   onChange={() => toggleCheck("cb6")}
                   checked={checked["cb6"]} ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="ypass">Year Of Pass<span className={classes.imp}>*</span></label>
            <input type="number"  id="ypass" ref={yop} ></input>
          </div>
        </div>
        <div>
          <h3>Job Description</h3>
          <div className={classes.control}>
            <label htmlFor="joiningLocation">Joining Location<span className={classes.imp}>*</span></label>
            <input type="text"  id="joiningLocation" ref={JL} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="training">Training<span className={classes.imp}>*</span></label>
            <input type="text"  id="training" ref={training} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="stipend">Stipend<span className={classes.imp}>*</span></label>
            <input type="text"  id="stipend" ref={stipend} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="ppo">PPO(if any)<span className={classes.imp}>*</span></label>
            <input type="text"  id="ppo" ref={ppo} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="jobPosition">Job Position<span className={classes.imp}>*</span></label>
            <input type="text"  id="jobPosition" ref={jposition} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="jobNature">Job Nature<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="jobNature" ref={jnature} ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="bond">Bond(if any)<span className={classes.imp}>*</span></label>
            <input type="text"  id="bond" ref={jbond} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="desc">Bond Description<span className={classes.imp}>*</span></label>
            <textarea rows={3} id="desc" ref={bdesc} ></textarea>
          </div>
        </div>
        <div className={classes.control}>
            <label htmlFor="lastdate">Last Date To Apply<span className={classes.imp}>*</span></label>
            <input type="date"  id="lastdate" ref={LDA} ></input>
        </div>
        <div className={classes.control} ><br></br>
          <label htmlFor="cars">Drive mode<span className={classes.imp}>*</span>
          <span>&#160;
          <select className={classes.im} onChange={e =>{setDrop(e.target.value )}}>
            <option style={{display:"none"}}>---select---</option>
            <option value="online">Online</option>
            <option value="offline">Offiline</option>
          </select></span></label>
        </div>
        
        <div className={classes.my}>
            <div className={classes.mycheck}>
            <input type="checkbox" name="ot" value="test" id="ot" onChange={e=>{setOft(e.target.checked);}} />
            <label htmlFor="ot" >&#160; Online Test</label>
            </div>
            <div className={classes.mycheck}>
            <input type="checkbox"   id="tr" onChange={e=>{setTr(e.target.checked);}}/>          
            <label htmlFor="tr">&#160; Personal & Technical Interview Test</label>
            </div>
            <div className={classes.mycheck}>
            <input type="checkbox" id="hr" onChange={e=>{setHr(e.target.checked);}} />
            <label htmlFor= "hr">&#160; HR Interview</label></div>
          </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}
export default NEWDRIVE;
