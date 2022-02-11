import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from './logos.png';
import { AiOutlineBell } from "react-icons/ai";
import {MdOutlineSystemUpdateAlt} from "react-icons/md"
import {MdUpdate} from "react-icons/md"

import AuthContext from '../store/auth-context';
import { useState,useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa"

import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { useContext } from 'react';

function MainNavigation(){
    const authCtx = useContext(AuthContext);  
    
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () =>{
        authCtx.logout();
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const User="user";
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
        {isMobile ?"CDPC-RGUKTN":"Career Development & Placement Cell"}
    </Navbar.Brand>&nbsp;
    {isLoggedIn&& <><Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >&nbsp;
                    <Nav.Link as={Link} to="/fav"> <MdOutlineSystemUpdateAlt style={{paddingBottom: "2px"}}/> Drive Updates</Nav.Link>
                    <Nav.Link as={Link} to="/all"> <MdUpdate style={{paddingBottom: "2px"}} /> Drive Status</Nav.Link>
                </Nav> 
                <Nav>
                <NavDropdown style={{width:'20px',paddingRight:"50px"}} title={<FaUserAlt style={{paddingBottom: "2px"}} />}  id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link}   to="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/login' onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  as={Link} to="/fav">
                        Notifications <AiOutlineBell style={{paddingBottom: "2px"}}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse></> }
    
    </Container>
  </Navbar>
}

export default MainNavigation;