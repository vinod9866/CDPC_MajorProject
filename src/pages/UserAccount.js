import classes from './account.module.css';
import img from "../auth/login.png";
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Model } from './modal';

export const UserAccount =(props)=>{

    const [modal,setModal] = useState(false);
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
            <label>Student Name</label><br/>
            <input type="text" disabled value="Satyanarayana"></input>
        </div>
        <div className={classes.field}>
            <label>Student ID</label><br/>
            <input type="text" disabled value="N160096"></input>
        </div>
        <div className={classes.field}>
            <label>Student Email</label><br/>
            <input type="text" disabled value="N160096@rguktn.ac.in "></input>
        </div>
        <div className={classes.field}>
            <label>DOB</label><br/>
            <input type="text" disabled value="25-02-2000"></input>
        </div>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" disabled value="E4"></input>
        </div>
        <div className={classes.field}>
            <label>Year Of Pass</label><br/>
            <input type="text" disabled value="2022"></input>
        </div>
    </div>
    <div className={classes.right}>
        <div className={classes.field}>
            <label>YEAR</label><br/>
            <input type="text" disabled value="E4"></input>
        </div>
        <div className={classes.field}>
            <label>BRANCH</label><br/>
            <input type="text" disabled value="CSE"></input>
        </div>
        <div className={classes.field}>
            <label>PUC_CGPA</label><br/>
            <input type="text" disabled value="8.1"></input>
        </div>
        <div className={classes.field}>
            <label>ENG_CGPA</label><br/>
            <input type="text" disabled value="8.5"></input>
        </div>

        <div className={classes.field}>
            <label>Passed</label><br/>
            <input type="text" disabled value="YES"></input>
        </div>
        <div className={classes.field}>
            <label>REM_Count</label><br/>
            <input type="text" disabled value="0"></input>
        </div>

    </div>
</form>
<div className={classes.space}>
    <button className={classes.resume} onClick={showModel}>ADD or Update Resume</button>
    
</div>
</Card>
}