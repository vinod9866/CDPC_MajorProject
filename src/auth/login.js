import Card from "../ui/card";
import classes from "./login.module.css";
import loginlogo from "./login.png";
import { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Loading from "../components/loading";
import { login } from "../apis";
import FPswd from "../admin/ForgotPswd";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";

function Login(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [errormsg, seterror] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [invisible,setInvisible] = useState(false);

  const user = useRef();
  const pswd = useRef();

  const authCtx = useContext(AuthContext);

  function setStatusTrue(){
    setInvisible(true);
    console.log(invisible)
  }
  function setStatusFalse(){
    setInvisible(false);
  }
  function submitHandler(event) {
    setLoading(true);
    event.preventDefault();

    const User = user.current.value;
    const Pswd = pswd.current.value;

    const formData = new FormData();
    formData.append("username", User);
    formData.append("password", Pswd);
    formData.append("grant_type", "password");

    
    login({
      username: User,
      password: Pswd,
    }).then((res) => {
      if (res.ok) {
        setState(true);
        seterror(false);
        setLoading(false);

        res.json().then((data) => {
          const expTime = new Date(
            new Date().getTime() + parseInt( 1800000)
          );
          console.log(data);

          authCtx.login(data.token, expTime.toString());
          authCtx.whoLoggedIn(String(data.roles[0]));

        });
      } else {
        return res.json().then((data) => {
          console.log(data);
          setLoading(false);
          if (data  && data.errorMsg) {
            setState(false);
            seterror(false);
          }
        });
      }
    })
    .catch((error) => {
      if (error) {
        seterror(true);
        setLoading(false);
      }

      // Only network error comes here
    });

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <img className={classes.cte} src={loginlogo} />
        {state && !errormsg && (
          <div className={classes.info}>
            <i className="fa fa-info-circle"></i>&nbsp; Use University
            credentials to login
          </div>
        )}
        {!state && !errormsg && (
          <div className={classes.error}>
            <i className="fa fa-times-circle"></i>&nbsp; Username or Password is
            incorret
          </div>
        )}
        {errormsg && (
          <div className={classes.error}>
            <i className="fa fa-times-circle"></i>&nbsp;Network error!
          </div>
        )}

        <div className={classes.cter}>
          <div className={classes.control}>
            <label htmlFor="title">Username </label>
            <input type="text" required id="user" ref={user}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="title">Password</label>
            <input
              type="password"
              name="password"
              required
              id="pswd"
              ref={pswd}
              autoComplete="on"
            ></input>
          </div>

          <div className={classes.actions}>
          { !invisible && <button>{isLoading ? <Loading /> : "Submit"}</button>}
            <span style={{backgroundColor:"blue"}} >
              <Popup trigger={<button type="button" className={classes.forgot}  > Forgot password? </button>}
                position="top right" onOpen={setStatusTrue} onClose={setStatusFalse}> 
                    <FPswd/>
              </Popup> 
            </span>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default Login;
