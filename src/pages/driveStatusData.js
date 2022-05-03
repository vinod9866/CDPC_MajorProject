import { useState,useEffect, useContext } from 'react';
import { getDrives, studentRegisteredDrives } from "../apis";
import DriveStatus from './driveStatus';


function DriveStatusData(){
    const [statusData,setStatusData] = useState([]);
    const [spin, setSpin] = useState(false);

    useEffect(()=>{
        setSpin(true)
        studentRegisteredDrives()
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.status==200){
                setStatusData(result.data)
                setSpin(false);
            }
        })
    },[])

    return(
        <div>
        {statusData.reverse().map((data) =>{
            return <DriveStatus spin={spin}
            key={data.id}
            data={data}
          />
        }
        )}
      </div>
    );
}
export default DriveStatusData;