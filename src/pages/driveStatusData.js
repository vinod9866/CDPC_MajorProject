import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import DriveStatus from './driveStatus';

function DriveStatusData(){
    return(
        <DriveStatus></DriveStatus>
    );
}
export default DriveStatusData;