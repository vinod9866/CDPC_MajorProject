import Card from "../ui/card";
import classes from "./login.module.css";
import loginlogo from "./login.png";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

function Login(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const user = useRef();
  const pswd = useRef();

  const authCtx = useContext(AuthContext);

  function submitHandler(event) {
    event.preventDefault();

    const User = user.current.value;
    const Pswd = pswd.current.value;

    console.log(User,Pswd);
    const formData = new FormData();
    formData.append("username",User);
    formData.append("password",Pswd);
    formData.append("grant_type","password");
    
    fetch(
      "http://3.12.85.141:8081/oauth/token?",
      {
        method: "POST",
        headers: {
          Authorization: "Basic Y2xpZW50OnBhc3N3b3Jk",
        },
        body:formData
      }
    ).then((res) => {
        if (res.ok) {
          setState(true);
          navigate("/all",{replace:true});
          res.json().then(data=>{
            console.log(data);
            authCtx.login(data.access_token);

          })

        } else {
          return res.json().then((data) => {
            console.log(data)
            if (data && data.error && data.error_description) {
              setState(false); 
            }
          });
        }
      })
 
  }

  return (
    <Card>
      <img src={loginlogo} />
      <form className={classes.form} onSubmit={submitHandler}>
        {state && (
          <div className={classes.info}>
            <i className="fa fa-info-circle"></i>&nbsp; Use SMS credentials to
            login
          </div>
        )}
        {!state && (
          <div className={classes.error}>
            <i className="fa fa-times-circle"></i>&nbsp; Username or Password is
            incorret
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="title">Username </label>
          <input type="text" required id="user" ref={user}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Password</label>
          <input type="password" required id="pswd" ref={pswd}></input>
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
