import { useState,useEffect, useContext } from 'react';
import { getDrives, studentRegisteredDrives } from "../apis";
import DriveStatus from './driveStatus';

function DriveStatusData(){

    useEffect(()=>{
        studentRegisteredDrives()
        .then(res=>res)
        .then(result=>console.log(result))
    })

    return(
        <DriveStatus></DriveStatus>
    );
}
export default DriveStatusData;