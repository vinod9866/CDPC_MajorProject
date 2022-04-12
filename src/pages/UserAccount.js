import classes from './account.module.css';
import img from "../auth/login.png";
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Model } from './modal';
import { addStudentResume, getStudent } from '../apis';
// import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'

export const UserAccount =(props)=>{

    const [modal,setModal] = useState(false);
    const [modal1,setModal1] = useState(false);
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

    useEffect(()=>{
        getStudent()
       .then(res=>res.json())
        .then(data=>setAccountData(data));
    },[])

    const updateProfile = (e) =>{
        e.preventDefault()
        addStudentResume()
        .then(res=>res.json())
        .then(result => result);
    }

    const updateResume = (e) =>{
        e.preventDefault()
        addStudentResume()
        .then(res=>res.json())
        .then(result => result);
    }
    const selectImage = (e) =>{
        e.preventDefault();
        document.getElementById("img-select").click();
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Upload Image
        </Tooltip>
      );

    const updateImage = (e) =>{
        console.log(e);
    }
    return<Card className={classes.account}>
        {modal1?<Model parentCallback={handleModal1} style={classes.modalClass} heading="Upload Resume to Apply Drive">
        <form onSubmit={updateResume}>
        <div className={classes.field}>
            <input type="file" name='filename'></input>
        </div>
        <div className={classes.field}>
            <input type="submit" value='Upload'></input>
        </div>
        </form>
    </Model>:""}
    {modal?<Model parentCallback={handleModal} style={classes.modalClass} heading="Upload Resume to Apply Drive">
        <form className={classes.accountForm} onSubmit={updateProfile}>
    <div className={classes.left}>
        <div className={classes.field}>
            <label>Name</label><br/>
            <input type="text" value={acccoutData.username}></input>
        </div>
        <div className={classes.field}>
            <label>ID</label><br/>
            <input type="text" value={acccoutData.userId}></input>
        </div>
        <div className={classes.field}>
            <label>Email</label><br/>
            <input type="text" value={acccoutData.useremail}></input>
        </div>
        <div className={classes.field}>
            <label>DOB</label><br/>
            <input type="text" value={acccoutData.dob}></input>
        </div>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" value={acccoutData.year}></input>
        </div>
        <div className={classes.field}>
            <label>Year Of Pass</label><br/>
            <input type="text" value={acccoutData.username}></input>
        </div>
    </div>
    <div className={classes.right}>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" value={acccoutData.username}></input>
        </div>
        <div className={classes.field}>
            <label>BRANCH</label><br/>
            <input type="text"  value={acccoutData.branch}></input>
        </div>
        <div className={classes.field}>
            <label>PUC_CGPA</label><br/>
            <input type="text" value={acccoutData.pucCgpa}></input>
        </div>
        <div className={classes.field}>
            <label>ENG_CGPA</label><br/>
            <input type="text" value={acccoutData.engCgpa}></input>
        </div>

        <div className={classes.field}>
            <label>Passed</label><br/>
            <input type="text" value={acccoutData.isPass}></input>
        </div>
        <div className={classes.field}>
            <label>REM_Count</label><br/>
            <input type="text" value={acccoutData.count}></input>
        </div>
        <div className={classes.field}>
            <input type="submit" value='Upload'></input>
        </div>
    </div>
</form>
    </Model>:""}
<div className={classes.profile}>
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
    <img src={img} alt='not working' onClick={selectImage}/>
    </OverlayTrigger>
    <input type="file" hidden id="img-select" accept="image/*" onChange={updateImage}/>
</div>
<hr></hr>
<form className={classes.accountForm}>
    <div className={classes.left}>
        <div className={classes.field}>
            <label>Name</label><br/>
            <input type="text" disabled value={acccoutData.username}></input>
        </div>
        <div className={classes.field}>
            <label>ID</label><br/>
            <input type="text" disabled value={acccoutData.userId}></input>
        </div>
        <div className={classes.field}>
            <label>Email</label><br/>
            <input type="text" disabled value={acccoutData.useremail}></input>
        </div>
        <div className={classes.field}>
            <label>DOB</label><br/>
            <input type="text" disabled value={acccoutData.dob}></input>
        </div>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" disabled value={acccoutData.year}></input>
        </div>
        <div className={classes.field}>
            <label>Year Of Pass</label><br/>
            <input type="text" disabled value={acccoutData.username}></input>
        </div>
    </div>
    <div className={classes.right}>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" disabled value={acccoutData.username}></input>
        </div>
        <div className={classes.field}>
            <label>BRANCH</label><br/>
            <input type="text" disabled value={acccoutData.branch}></input>
        </div>
        <div className={classes.field}>
            <label>PUC_CGPA</label><br/>
            <input type="text" disabled value={acccoutData.pucCgpa}></input>
        </div>
        <div className={classes.field}>
            <label>ENG_CGPA</label><br/>
            <input type="text" disabled value={acccoutData.engCgpa}></input>
        </div>

        <div className={classes.field}>
            <label>Passed</label><br/>
            <input type="text" disabled value={acccoutData.isPass}></input>
        </div>
        <div className={classes.field}>
            <label>REM_Count</label><br/>
            <input type="text" disabled value={acccoutData.count}></input>
        </div>

    </div>
</form>
<div className={classes.space}>
<button className={classes.resume} onClick={showModel}>Update Profile</button>
    <button className={classes.resume} onClick={showModel1}>Update Resume</button>
    
</div>
</Card>
}