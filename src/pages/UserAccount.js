import classes from './account.module.css';
import img from "../auth/login.png";
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Model } from './modal';

export const UserAccount =(props)=>{

    const [modal,setModal] = useState(false);
    const [acccoutData,setAccountData] = useState({})
    const showModel = ()=>{
        setModal(true);
    }
    window.onClick = (event)=>{
        console.log("working.......")
        setModal(false)
    }

    const handleModal = (bool)=>{
        setModal(bool);
    }

    useEffect(()=>{
        console.log(localStorage.getItem("token"))
        fetch("http://3.111.79.215:8080/api/user/user/{userId}?userId="+localStorage.getItem("Person"),{
            method:'Get',
            headers:{
                Authorization:'Bearer '+localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(data=>setAccountData(data));
    },[])

    return<Card className={classes.account}>
    {modal?<Model parentCallback={handleModal} style={classes.modalClass} heading="Upload Resume to Apply Drive">
        <form>
        <div className={classes.field}>
            <input type="file" name='filename'></input>
        </div>
        <div className={classes.field}>
            <input type="submit" value='Upload'></input>
        </div>
        </form>
    </Model>:""}
<div className={classes.profile}>
    <img src={img} alt='not working'/>
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
    <button className={classes.resume} onClick={showModel}>ADD or Update Resume</button>
    
</div>
</Card>
}