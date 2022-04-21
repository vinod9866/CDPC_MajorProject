import Table from "./table";
import { useState,useEffect, useContext } from 'react';
import { getDrives } from "../apis";
import AuthContext from "../store/auth-context";
import { Toast, ToastContainer } from "react-bootstrap";
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer'

function TableData(props) { 
  // const [shows, setShows] = useState(false);
  // const [showe, setShowe] = useState(false);
  const [shows, setShows] = useState(false);
  const [showe, setShowe] = useState(false);
  const [msg,setMsg] = useState("");

  const [driveData,setDriveData] = useState([]);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  useEffect(()=>{
    getDrives()
    .then(res=>res.json()
    .then(data=>setDriveData(data.data)
    ));
  },[])

  const onError = (msg)=>{
    setShowe(true)
    setMsg(msg)
  }

  const onSuccess=()=>{
    setShows(true)
    // setMsg(msg)
  }
  return (
    // <Card>
    //   {" "}
      <div>
        <ToastContainer className="p-3 position-fixed bottom-1 end-0 p-3" style={{zIndex:'11'}}>
          <Toast className="bg-success text-light" onClose={() => setShows(false)} show={shows} delay={3000} autohide>
            <Toast.Body className="text-start">Applied to drive successfully.</Toast.Body>
          </Toast>
          <Toast className="bg-danger text-light" onClose={() => setShowe(false)} show={showe} delay={3000} autohide>
            <Toast.Body className="text-start">{msg}</Toast.Body>
          </Toast>
        </ToastContainer>
        {driveData.map((data) => (
          <Table
            onError={onError}
            onSuccess={onSuccess}
            text="vinod"
            key={data.id}
            // id={data.id}
            stat="Expired"
            // branches={data.eligibilityData.branches}
            // last_date={data.lastOfApply}
            // title={data.name}
            data={data}
          />
        ))}
      </div>
  );
}

export default TableData;
