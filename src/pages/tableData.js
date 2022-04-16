import Table from "./table";
import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import AuthContext from "../store/auth-context";


function TableData() { 

  const [driveData,setDriveData] = useState([]);
  const authContext = useContext(AuthContext);
  const isToken = authContext.token;

  if(isToken){
    getDrives()
    .then(res=>res.json()
    .then(data=>{setDriveData(data)
    console.log(data)}))
    
  }

  return (
    // <Card>
    //   {" "}
      <div>
        {driveData.map((data) => (
          <Table
            text="vinod"
            key={data.id}
            id={data.id}
            stat="Expired"
            branches={data.eligibilityData.branches}
            last_date={data.lastOfApply}
            title={data.name}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            address={data.location}
            desc={data.desc}
          />
        ))}
      </div>
  );
}

export default TableData;
