import {Link, useNavigate} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from './logos.png';
import { AiOutlineBell,AiOutlineAppstoreAdd } from "react-icons/ai";
import {MdOutlineSystemUpdateAlt} from "react-icons/md"
import {AiFillNotification} from "react-icons/ai"
import {MdUpdate} from "react-icons/md"
import {GoBroadcast} from "react-icons/go"
import AuthContext from '../store/auth-context';
import { useState,useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Navbar,Nav,NavDropdown, Badge } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CompanyRegister from '../company/email';

import { useContext } from 'react';
import './notification.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { getNotifications } from '../apis';
import Popup from 'reactjs-popup';


var stompClient =null;
var d1 = [
]

var d1=[]

function MainNavigation(){
    // Notification Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Student adding modal
    const [show1,setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Student adding modal
    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [data,setData] = useState([]);

    const authCtx = useContext(AuthContext);  
    const [notification,setNotification] = useState(false)
    const isLoggedIn = authCtx.isLoggedIn;
    const loginPerson = authCtx.Person;
    const [modal,setModal] = useState(false);
    const [modaldata,setModalData] = useState({title:'',message:''});

    const [open,setOpen] = useState(false);
    const [ope,setOpe] = useState(false);

    const navigate = useNavigate()

    const showNotifModel = (data)=>{
        setModalData(data);
        setShow(true);
    }
    window.onClick = (event)=>{
        setModal(false)
    }

    const handleAddModal = ()=>{
        setShow1(true)
    }

    const handleInviteModal = () =>{
      setShow2(true);
    }

    // console.log(loginPerson);
    const logoutHandler = () =>{
        authCtx.logout();
    }

    useEffect(()=>{
      let Sock = new SockJS('http://3.111.79.215:8080/ws');
      stompClient = over(Sock);
      stompClient.connect({},onConnected, onError);
      authCtx.stopmClentAction(stompClient)
        console.log(isLoggedIn)
        console.log(authCtx.token)
      if(isLoggedIn && loginPerson !== "ADMIN" ){
        getNotifications(authCtx.token)
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                setData(data.data)
                d1=[...data.data]
            }
        })
      }
      
    },[isLoggedIn])

    const onConnected = () => {
      stompClient.subscribe('/students/all', onMessageReceived);
    }
    const onMessageReceived = (payload)=>{
      var payloadData = JSON.parse(payload.body);
      d1.reverse().push(payloadData)
      setData([...d1])
    }
    const onError = (err) => {
      console.log(err);
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 800;
            if (ismobile !== isMobile){
                setIsMobile(ismobile);
            }
        }, false);
    }, [isMobile]);

    const broadCastBtn = (e)=>{
        e.preventDefault()
        setNotification(!notification)
    }

    const updateStatus =(e)=>{
        authCtx.driveStatusMethod()
    }

    return <div><Navbar collapseOnSelect expand="lg"  variant="dark" className={classes.back}>
    <Container >
    <Navbar.Brand className={classes.logo}>
    <img src={logo} className={classes.clglogo}   />&nbsp;
      <Link  style={{textDecoration: 'none',color:'white'}} to="/home">  {isMobile ?"CDPC-RGUKTN":"Career Development & Placement Cell"} </Link>
    </Navbar.Brand>&nbsp;
    {isLoggedIn ? 
    (loginPerson !== "ADMIN"  ) ?  <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >&nbsp;
                    <Nav.Link as={Link} to="/fav"> <MdOutlineSystemUpdateAlt style={{paddingBottom: "2px"}} /> Drive Updates</Nav.Link>
                    <Nav.Link as={Link} to="/status"> <MdUpdate style={{paddingBottom: "2px"}} size={20}/> Drive Status</Nav.Link>
                </Nav> 
                <Nav>
                <NavDropdown 
                 onMouseLeave={() => setOpe(false)}
                 onMouseOver={() => setOpe(true)}
                 show={ope}
                style={{width:'20px',paddingRight:"50px"}} title={<FaUserAlt style={{paddingBottom: "2px"}} />}  id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{navigate('/profile');}}  className="bg-light"  ><Button variant='primary' style={{width:'100%'}}>Profile</Button></NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/login' onClick={logoutHandler} className="bg-light"><Button variant='primary' style={{width:'100%'}}>Logout</Button></NavDropdown.Item>
                    </NavDropdown>
                    <Popup trigger={<Nav.Link  onClick={broadCastBtn} to=""  >  Notifications 
                        <AiOutlineBell style={{paddingBottom: "0px"}} /> </Nav.Link>}
                        position="bottom right" > 
                        <div className="notifications" id="box">
                                <h2 className='notificationHead' ><AiFillNotification style={{paddingBottom:"3px",color:""}} size={25} />Notifications </h2>
                                    {data.reverse().map((d, index) => {
                                            return <div className="notifications-item" key={index} onClick={()=>{showNotifModel(d)}}> 
                                                        <div className="text">
                                                                <span className='fs-6'>{d.title}</span>&nbsp;&nbsp;
                                                                    <span className='ml-3'><Badge pill bg="info" >new</Badge></span>
                                                                    <span className='notificationDate'>{new Date(d.date).getDate()}</span>
                                                                <p>{d.message.slice(0,30)}...........</p>
                                                        </div>
                                                    </div>;
                                                }   
                                    )}
                        </div>
                                                    
                    </Popup> 
                  
                </Nav> 
    </Navbar.Collapse></> :
    <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >&nbsp;
                    <Nav.Link as={Link} to="/newdrive"> <AiOutlineAppstoreAdd style={{paddingBottom: "2px"}} size={20}/>Add Drive </Nav.Link>
                    <Nav.Link as={Link} onClick={updateStatus} to="/"> <MdUpdate style={{paddingBottom: "2px"}} /> {authCtx.driveStatus?"Processing Drives":"Active Drives"} </Nav.Link>
                </Nav> 
                <Nav>
                <NavDropdown 
                    onMouseLeave={() => setOpen(false)}
                    onMouseOver={() => setOpen(true)}
                    show={open}
                    style={{width:'20px',paddingRight:"50px"}} title={<FaUserAlt style={{paddingBottom: "2px"}} />}  id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleInviteModal} className="bg-light"><Button variant='primary' style={{width:'100%'}}>Invite Company</Button></NavDropdown.Item>
                        <NavDropdown.Item onClick={handleAddModal} className="bg-light"><Button variant='primary' style={{width:'100%'}}>Add New Batch </Button></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>{navigate('/Aprofile');}}  className="bg-light"  ><Button variant='primary' style={{width:'100%'}}>Profile</Button></NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/login' className="bg-light"  onClick={logoutHandler}><Button variant='primary' style={{width:'100%'}}>Logout</Button></NavDropdown.Item>


                </NavDropdown>
                    <Nav.Link  as={Link} to="/broadcast">
                        Broadcast <GoBroadcast style={{paddingBottom: "2px"}}size={18}/>
                    </Nav.Link>
                </Nav> 
    </Navbar.Collapse></> :null}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{modaldata.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <p>{modaldata.message}</p>
  </Modal.Body>
  <Modal.Footer>
    <button type="button" className="btn btn-light btn-sm" onClick={handleClose}>Close</button>
    {/* <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button> */}
  </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
        <Modal.Title>Add Students</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="file"/><br/>
            <button type="button" className="btn btn-primary btn-sm mt-2">Upload</button>
  </Modal.Body>
  <Modal.Footer>
    <button type="button" className="btn btn-light btn-sm" onClick={handleClose1}>Close</button>
  </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
        <Modal.Title>Invite Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CompanyRegister></CompanyRegister>
  </Modal.Body>
  <Modal.Footer>
    {/* <button type="button" className="btn btn-light btn-sm" onClick={handleClose2}>Close</button> */}
  </Modal.Footer>
      </Modal>
    </Container>
  </Navbar>
  </div> 
}



  export default MainNavigation;