import Card from "../ui/card";
import classes from "./BroadCast.module.css";
import { VscBroadcast } from "react-icons/vsc";
import {MainNavigation} from "../components/MainNavigation"
import AuthContext from "../store/auth-context";
import { useContext } from "react";

function BROADCAST() {
  const messageData = {
    title:"",
    message:"",
  }
  const authCtx = useContext(AuthContext);
  const stompClient = authCtx.stompClient
  const sendBroadCast=(e)=>{
    e.preventDefault()
    console.log(messageData)
    stompClient.send("/app/message", {}, JSON.stringify(messageData))
  }
  return (
    <Card>
      <form className={classes.form}>
        <VscBroadcast size={80} />
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" onChange={(e)=>messageData.title=e.target.value}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Messaage</label>
          <textarea rows={3} required id="message" onChange={(e)=>messageData.message=e.target.value}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={sendBroadCast}>Send</button>
        </div>
      </form>
    </Card>
  );
}
export default BROADCAST;
