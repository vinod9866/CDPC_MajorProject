import Card from "../ui/card";
import classes from "./login.module.css";
import loginlogo from "./login.png";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Loading from "../components/loading";

function Login(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [errormsg, seterror] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const user = useRef();
  const pswd = useRef();

  const authCtx = useContext(AuthContext);

  function submitHandler(event) {
    event.preventDefault();
    setLoading(true);

    const User = user.current.value;
    const Pswd = pswd.current.value;

    const formData = new FormData();
    formData.append("username", User);
    formData.append("password", Pswd);
    formData.append("grant_type", "password");

    fetch("http://3.111.79.215:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username: User,
        password: Pswd,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setState(true);
          seterror(false);
          res.json().then((data) => {
            const expTime = new Date(
              new Date().getTime() + parseInt( data.expiry)
            );
            console.log(data);

            authCtx.login(data.token, expTime.toString());
            authCtx.whoLoggedIn(String(data.username));
            navigate("/home", { replace: true });

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
            <button>{isLoading ? <Loading /> : "Submit"}</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default Login;
