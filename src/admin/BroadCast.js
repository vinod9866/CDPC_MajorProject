import Card from "../ui/card";
import classes from "./BroadCast.module.css";
import { VscBroadcast } from "react-icons/vsc";
import AuthContext from "../store/auth-context";
import { useContext, useRef } from "react";

function BROADCAST() {
  const title = useRef();
  const message = useRef();
  const authCtx = useContext(AuthContext);
  const stompClient = authCtx.stompClient
  const sendBroadCast=(e)=>{
    e.preventDefault()
    stompClient.send("/app/message", {}, JSON.stringify({"title":title.current.value,"message":message.current.value}))
    console.log("working................")
    e.target.reset()
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={sendBroadCast}>
        <VscBroadcast size={80} />
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={title}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Messaage</label>
          <textarea rows={3} required id="message" ref={message}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}
export default BROADCAST;
