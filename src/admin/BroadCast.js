import Card from "../ui/card";
import classes from "./BroadCast.module.css";
import { VscBroadcast } from "react-icons/vsc";
function BROADCAST() {
  return (
    <Card>
      <form className={classes.form}>
        <VscBroadcast size={80} />
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Messaage</label>
          <textarea rows={3} required id="message"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}
export default BROADCAST;
