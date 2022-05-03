import { useState,useEffect, useContext } from 'react';
import { getDrives, studentRegisteredDrives } from "../apis";
import DriveStatus from './driveStatus';


function DriveStatusData(){
    const [statusData,setStatusData] = useState([]);

    useEffect(()=>{
        studentRegisteredDrives()
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.status==200){
                setStatusData(result.data)
            }
        })
    },[])

    return(
        <div>
        {statusData.reverse().map((data) =>{
            return <DriveStatus
            key={data.id}
            data={data}
          />
        }
        )}
      </div>
    );
}
export default DriveStatusData;