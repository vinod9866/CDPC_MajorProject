import classes from './account.module.css';
import img from "../components/logos.png";
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Model } from './modal';
import { addStudentProfile, addStudentResume, getStudent } from '../apis';
import { Toggle } from '../components/Toggle';  
// import { addStudentResume, getStudent } from '../apis';
// import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
import Loading from '../components/loading';
import{BiEdit} from "react-icons/bi"
import Popup from 'reactjs-popup';
import Forgot from '../reset-forget-pswd/forgot';
import { Button } from 'react-bootstrap';

export const UserAccount =(props)=>{

    const [isLoading,setLoading]= useState(false);
    const [file,setFile] = useState(null)
    const [modal,setModal] = useState(false);
    const [modal1,setModal1] = useState(false);
    const [toggle,setToggle] = useState(false)
    const [name,setName] = useState()
    const [id,setId] = useState()
    const [email,setEmail] = useState()
    const [dob,setDob] = useState()
    const [year,setYear] = useState()
    const [yop,setYOP] = useState()
    const [mobile,setMobile] = useState()
    const [gender,setGender] = useState()
    const [yob,setYOB] = useState()
    const [branch,setBranch] = useState()
    const [pucCgpa,setPucCgpa] = useState()
    const [engCgpa,setEngCgpa] = useState()
    const [passed,setPassed] = useState()
    const [remCount,setRemCount] = useState()
    const [pEmail,setPEmail] = useState()
    const [acccoutData,setAccountData] = useState({})
    const showModel = ()=>{
        setModal(true);
    }
    const showModel1 = ()=>{
        setModal1(true);
    }
    window.onClick = (event)=>{
        setModal(false)
        setModal1(false)
    }

    const handleModal = (bool)=>{
        setModal(bool);
    }
    const handleModal1 = (bool)=>{
        setModal1(bool);
    }

    const handleToggle = (bool) =>{
        console.log(bool)
        setToggle(bool)
    }

    useEffect(()=>{
        getStudent()
       .then(res=>res.json())
        .then(data=>{
            setAccountData(data)
            setName(data.username)
            setId(data.userId)
            setEmail(data.useremail)
            setDob(data.dob)
            setYear(data.year)
            setYOP(data.year)
            setMobile(data.mobile)
            setGender(data.gender)
            setYOB(data.engYear)
            setBranch(data.branch)
            setPucCgpa(data.pucCgpa)
            setEngCgpa(data.engCgpa)
            setPassed(data.isPass)
            setRemCount(data.count)
            setPEmail(data.personalemail)
        });
    },[])

    const updateProfile = (e) =>{
        setLoading(true);
        e.preventDefault()
        var obj = {
            "userId": id,
            "username": name,
            "useremail": email,
            "personalemail": pEmail,
            "mobile": mobile,
            "gender": gender,
            "dob": dob,
            "pucCgpa": pucCgpa,
            "engCgpa": engCgpa,
            "branch": branch,
            "year": yop,
            "isPass": passed,
            "count": remCount,
            "engYear": yob,
          }
        addStudentProfile(obj)
        .then(res=>res.json())
        .then(result => {
            setLoading(false)
            console.log(result)});
        handleModal()
    }

    const updateResume = (e) =>{
        e.preventDefault()
        const data = new FormData()
        data.append("file",file)
        addStudentResume(data)
        .then(res=>res.json())
        .then(result => result);
    }
    const selectImage = (e) =>{
        e.preventDefault();
        document.getElementById("img-select").click();
    }

    const onFileChange = (e) =>{
        setFile(e.target.files[0])
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Upload Image
        </Tooltip>
      );
    const updateImage = (e) =>{
        e.preventDefault()
        var file = e.target.files[0]
        console.log(file)
        const data = new FormData()
        data.append("file",file)
        addStudentProfile(data)
        .then(res=>res.json())
        .then(result => result);
    }
    return<Card className={classes.account}>
        {modal1?<Model parentCallback={handleModal1} style={classes.modalClass} heading="Upload Resume File">
        <form onSubmit={updateResume}>
        <div className={classes.field}>
            <input type="file" name="file" onChange={onFileChange}></input>
        </div>
        <div className={classes.field}>
            <button className={classes.resume} type="submit" value='Upload'>Upload</button>
        </div>
        </form>
    </Model>:""}
    
    <div className={classes.profile}>
        {/* <img src={img} alt='not working'/> */}

        <div className={classes.mode}>
        {/* <input type="checkbox" id="switch" /><label for="switch">Toggle</label> */}
        <Toggle onChange={handleToggle}  /> <h6> <BiEdit/>Profile</h6>        
        </div>
    
        <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
        <img src={acccoutData.profileUrl ===null ? img:acccoutData.profileUrl} alt='not working' onClick={selectImage}/>
        </OverlayTrigger>
    
        <input type="file" hidden id="img-select" accept="image/*" onChange={updateImage}/>

    </div>
    
    <hr></hr>
    <form className={classes.accountForm}>
        <div className={classes.left}>
            <div className={classes.field}>
                <label>Name</label><br/>
                <input type="text" disabled value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>ID</label><br/>
                <input type="text" disabled value={id} onChange={(e)=>setId(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>Email</label><br/>
                <input type="text" disabled value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>DOB</label><br/>
                <input type="text" disabled value={dob} onChange={(e)=>setDob(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>YEAR</label><br/>
                <input type="text" disabled={!toggle} value={year} className={toggle&& classes.inp} onChange={(e)=>setYear(e.target.value)}></input>
            </div>
            {/* <div className={classes.field}>
                <label>Year Of Pass</label><br/>
                <input type="text" disabled={!toggle} value={yop} onChange={(e)=>setYOP(e.target.value)}></input>
            </div> */}
            <div className={classes.field}>
                <label>Mobile</label><br/>
                <input type="text" disabled={!toggle}  value={mobile} className={toggle&& classes.inp} onChange={(e)=>setMobile(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>Gender</label><br/>
                <input type="text" disabled value={gender} onChange={(e)=>setGender(e.target.value)}></input>
            </div>
        </div>
        <div className={classes.right}>
            <div className={classes.field}>
                <label>BATCH</label><br/>
                <input type="text" disabled value={yob} onChange={(e)=>setYOB(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>BRANCH</label><br/>
                <input type="text" disabled value={branch} onChange={(e)=>setBranch(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>PUC_CGPA</label><br/>
                <input type="text" disabled value={pucCgpa} onChange={(e)=>setPucCgpa(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>ENG_CGPA</label><br/>
                <input type="text" disabled value={engCgpa} onChange={(e)=>setEngCgpa(e.target.value)}></input>
            </div>

            <div className={classes.field}>
                <label>Passed</label><br/>
                <input type="text" disabled value={passed} onChange={(e)=>setPassed(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>REM_Count</label><br/>
                <input type="text" disabled value={remCount} onChange={(e)=>setRemCount(e.target.value)}></input>
            </div>
            <div className={classes.field}>
                <label>Personal mail</label><br/>
                <input type="text" disabled={!toggle} className={toggle&& classes.inp} value={pEmail} onChange={(e)=>setPEmail(e.target.value)}></input>
            </div>
        </div>
    </form>
    <div className={classes.space}>
        <button type='button' className={toggle && classes.resume} disabled={!toggle} onClick={updateProfile}> Update Profile</button>&nbsp;&nbsp;&nbsp;
        <button type="button" className={toggle && classes.resume} disabled={!toggle} onClick={showModel1} >Update Resume</button>
        <div> 
            <Popup trigger={<Button variant="primary" disabled={!toggle}> Change password? </Button>}  position="top center"> 
                <Forgot value="true" />
            </Popup> 
        </div> 
    </div>
</Card>
}