import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from './logos.png';
import { AiOutlineBell,AiOutlineAppstoreAdd } from "react-icons/ai";
import {MdOutlineSystemUpdateAlt} from "react-icons/md"
import {MdUpdate} from "react-icons/md"
import {GoBroadcast} from "react-icons/go"
import AuthContext from '../store/auth-context';
import { useState,useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa"

import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { useContext } from 'react';
import './notification.css'

import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { getNotifications } from '../apis';
import { Button } from 'bootstrap';
import { Model } from '../pages/modal';


var stompClient =null;
var d1 = [
]

var d1=[]

function MainNavigation(){

    const [data,setData] = useState([]);

    const authCtx = useContext(AuthContext);  
    const [notification,setNotification] = useState(false)
    const isLoggedIn = authCtx.isLoggedIn;
    const loginPerson = authCtx.Person;
    const [modal,setModal] = useState(false);

    const showModel = ()=>{
        console.log("workingl")
        setModal(true);
    }
    window.onClick = (event)=>{
        setModal(false)
    }

    const handleModal = (bool)=>{
        setModal(bool);
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

      getNotifications()
      .then(res=>res.json())
      .then(data=>{
        setData(data)
        d1=[...data]
      })
      
    },[])

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

    return  <Navbar collapseOnSelect expand="lg"  variant="dark" className={classes.back}>
    <Container >
    <Navbar.Brand className={classes.logo}>
    <img src={logo} className={classes.clglogo}   />&nbsp;
      <Link  style={{textDecoration: 'none',color:'white'}} to="/home">  {isMobile ?"CDPC-RGUKTN":"Career Development & Placement Cell"} </Link>
    </Navbar.Brand>&nbsp;
    {isLoggedIn ? 
    (loginPerson !== "Admin"  ) ?  <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >&nbsp;
                    <Nav.Link as={Link} to="/fav"> <MdOutlineSystemUpdateAlt style={{paddingBottom: "2px"}} /> Drive Updates</Nav.Link>
                    <Nav.Link as={Link} to="/all"> <MdUpdate style={{paddingBottom: "2px"}} size={20}/> Drive Status</Nav.Link>
                </Nav> 
                <Nav>
                <NavDropdown style={{width:'20px',paddingRight:"50px"}} title={<FaUserAlt style={{paddingBottom: "2px"}} />}  id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link}   to="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/login' onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={()=>setNotification(!notification)} as={Link} to="/fav">
                        Notifications 
                        <AiOutlineBell style={{paddingBottom: "0px"}} />
                        {notification ? <div className="notifications" id="box">
                            <h2 className='notificationHead'>Student BroadCast Notifications</h2>
                            {d1.reverse().map((d,index)=>{
                              return <div className="notifications-item" key={index} onClick={showModel}> 
                              <div className="text">
                                  <h4>{d.title}<span className='notificationBadge'>new</span><span className='notificationDate'>{new Date(d.date).getDate()}</span></h4>
                                  <p>{d.message}</p>
                              </div>
                            </div>
                            })}
                        </div>:""}
                        
                    </Nav.Link>
                </Nav> 
    </Navbar.Collapse></> :
    <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >&nbsp;
                    <Nav.Link as={Link} to="/newdrive"> <AiOutlineAppstoreAdd style={{paddingBottom: "2px"}} size={20}/>Add Drive </Nav.Link>
                    <Nav.Link as={Link} to="/all"> <MdUpdate style={{paddingBottom: "2px"}} /> Drive Status</Nav.Link>
                </Nav> 
                <Nav>
                <NavDropdown style={{width:'20px',paddingRight:"50px"}} title={<FaUserAlt style={{paddingBottom: "2px"}} />}  id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link}   to="/Aprofile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/login' onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  as={Link} to="/broadcast">
                        Broadcast <GoBroadcast style={{paddingBottom: "2px"}}size={18}/>
                    </Nav.Link>
                </Nav> 
    </Navbar.Collapse></> :null
    
    }
    {modal?<Model parentCallback={handleModal} style={classes.modalClass} heading="Upload Resume to Apply Drive">
        <form>
        <div className={classes.field}>
            <input type="file" name='filename'></input>
        </div>
        <div className={classes.field}>
            <input type="submit" value='Upload'></input>
        </div>
        </form>
    </Model>:""}
    </Container>
  </Navbar>
}

export default MainNavigation;