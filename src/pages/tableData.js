import Table from "./table";
import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import AuthContext from "../store/auth-context";


function TableData() { 

  const [driveData,setDriveData] = useState([]);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  if(isLoggedIn){
    // console.log("testing");
    // getDrives()
    // .then(res=>res.json()
    // .then(data=>setDriveData(data)
    // ));
    
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
            all={data}
          />
        ))}
      </div>
  );
}

export default TableData;
