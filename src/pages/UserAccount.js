import classes from './account.module.css';
import img from "../auth/login.png";
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Model } from './modal';
import { addStudentProfile, addStudentResume, getStudent } from '../apis';
import { Toggle } from '../components/Toggle';  

export const UserAccount =(props)=>{

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
            // setAccountData(data)
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
        .then(result => console.log(result));
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

    const onFileChange = (e) =>{
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const updateImage = () =>{

    }
    return<Card className={classes.account}>
        {modal1?<Model parentCallback={handleModal1} style={classes.modalClass} heading="Upload Resume to Apply Drive">
        <form onSubmit={updateResume}>
        <div className={classes.field}>
            <input type="file" name="file" onChange={onFileChange}></input>
        </div>
        <div className={classes.field}>
            <input type="submit" value='Upload'></input>
        </div>
        </form>
    </Model>:""}
    
<div className={classes.profile}>
    <img src={img} alt='not working'/>
    <div className={classes.mode}>
    {/* <input type="checkbox" id="switch" /><label for="switch">Toggle</label> */}
    <Toggle onChange={handleToggle}/>
    </div>
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
            <input type="text" disabled={!toggle} value={year} onChange={(e)=>setYear(e.target.value)}></input>
        </div>
        {/* <div className={classes.field}>
            <label>Year Of Pass</label><br/>
            <input type="text" disabled={!toggle} value={yop} onChange={(e)=>setYOP(e.target.value)}></input>
        </div> */}
        <div className={classes.field}>
            <label>Mobile</label><br/>
            <input type="text" disabled={!toggle} value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
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
            <label>Pemail</label><br/>
            <input type="text" disabled={!toggle} value={pEmail} onChange={(e)=>setPEmail(e.target.value)}></input>
        </div>
    </div>
</form>
<div className={classes.space}>
    <button type='button' className={classes.resume} disabled={!toggle} onClick={updateProfile}>Update Profile</button>
    <button className={classes.resume} onClick={showModel1} >Update Resume</button>
    
</div>
</Card>
}