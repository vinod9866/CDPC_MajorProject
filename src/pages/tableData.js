import Table from "./table";
import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import AuthContext from "../store/auth-context";
import { Toast, ToastContainer } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer'

function TableData(props) { 
  const [shows, setShows] = useState(false);
  const [showe, setShowe] = useState(false);
  const [msg,setMsg] = useState("");
  const [process,setProcess] = useState(false)

  const [driveData,setDriveData] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(()=>{

    getDrives()
    .then(res=>res.json()
    .then(data=>{
      if(data.status===200){
        console.log(data.data);
        setDriveData(data.data)
      }else{
        
      }
    }
    ));
  },[process])

  const onError = (msg)=>{
    setShowe(true)
    setMsg(msg)
  }

  const onSuccess=()=>{
    setShows(true)
    // setMsg(msg)
  }
  const onStatusUpdate=()=>{
    setProcess(!process)
  }
  return (
  
      
      <div>
        <ToastContainer className="p-3 position-fixed bottom-1 end-0 p-3" style={{zIndex:'11'}}>
          <Toast className="bg-success text-light" onClose={() => setShows(false)} show={shows} delay={3000} autohide>
            <Toast.Body className="text-start">Applied to drive successfully.</Toast.Body>
          </Toast>
          <Toast className="bg-danger text-light" onClose={() => setShowe(false)} show={showe} delay={3000} autohide>
            <Toast.Body className="text-start">{msg}</Toast.Body>
          </Toast>
        </ToastContainer>
        {driveData.reverse().map((data) => {
          if(authCtx.Person==="ADMIN"){
              return authCtx.driveStatus ? new Date(data.lastOfApply)>new Date() && <Table
              onError={onError}
              onSuccess={onSuccess}
              onStatusUpdate={onStatusUpdate}
              key={data.id}
              stat={new Date(data.lastOfApply)>new Date() ? true:false}
              data={data}
            />:new Date(data.lastOfApply)<new Date() && <Table
            onError={onError}
            onSuccess={onSuccess}
            onStatusUpdate={onStatusUpdate}
            key={data.id}
            stat={new Date(data.lastOfApply)>new Date() ? true:false}
            data={data}
          />
          }else{
            return <Table
            onError={onError}
            onSuccess={onSuccess}
            onStatusUpdate={onStatusUpdate}
            key={data.id}
            stat={new Date(data.lastOfApply)>new Date() ? true:false}
            data={data}
          />
          }
        })
      }
      </div>
  );
}

export default TableData;
