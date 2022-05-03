import { useState,useEffect } from 'react';
import { studentRegisteredDrives } from "../apis";
import DriveStatus from './driveStatus';


function DriveStatusData(){
    const [statusData,setStatusData] = useState([]);
    let incKey = 0;
    const [spin, setSpin] = useState(false);

    useEffect(()=>{
        setSpin(true)
        studentRegisteredDrives()
        .then(res=>res.json())
        .then(result=>{
            if(result.status===200){
                console.log(result.data);
                setStatusData(result.data)
                setSpin(false);
            }
        })
    },[])
 
    return(
        <div>
        {statusData.reverse().map((data) =>{
            return <DriveStatus spin={spin}
            key={incKey=incKey+1}
            data={data}
          />
        }
        )}
      </div>
    );
}
export default DriveStatusData;