import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from './logos.png';
import { AiOutlineBell } from "react-icons/ai";
import AuthContext from '../store/auth-context';

import { useContext } from 'react';

function MainNavigation(){
    const authCtx = useContext(AuthContext);  

    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () =>{
        authCtx.logout();
    }

    console.log(isLoggedIn);
    return  <header  className={classes.header}><meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <div ><img src={logo}  className={classes.clglogo}/></div>
            <div className={classes.logo}>Career Development & Placement Cell</div>
            <div className={classes.spacing}>
            {isLoggedIn && <nav >
                <ul>
                    
                    <li>
                        <Link to="/new">Drive updates</Link>
                    </li>
                    <li>
                        <Link to="/fav">Drive status</Link>
                    </li>
                    <li >
                        <Link to ='/fav' onClick={logoutHandler} >Logout</Link>
                    </li>
                    <li >
                        <Link to ='/new'  ><AiOutlineBell  /> </Link>
                    </li>
                </ul>
            </nav>}
            </div>
    </header>
}

export default MainNavigation;