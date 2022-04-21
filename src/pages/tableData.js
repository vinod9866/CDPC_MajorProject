import Table from "./table";
import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import AuthContext from "../store/auth-context";


function TableData() { 

  const [driveData,setDriveData] = useState([]);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  useEffect(()=>{
    getDrives()
    .then(res=>res.json()
    .then(data=>{
      if(data.status===200){
        setDriveData(data.data)
      }else{
        
      }
    }
    ));
  },[])

  return (
    // <Card>
    //   {" "}
      <div>
        {driveData.map((data) => (
          <Table
            key={data.id}
            stat={new Date(data.lastOfApply)>new Date() ? true:false}
            data={data}
          />
        ))}
      </div>
  );
}

export default TableData;
