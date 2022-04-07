import classes from "./table.module.css";
function Table(props) {
  // return(
  //     <div>

  //     </div>
  // );

  return (
    <div className={classes.main}>
      <li>
        <div>
          <div className={classes.header}>
            <h5>{props.title}</h5>
            <span
              style={{ paddingleft: "10rem" }}
              className={
                props.stat === "Active" ? classes.statuss : classes.statusf
              }
            >
              {props.stat}
            </span>
          </div>
        </div>
      </li>
      <br></br>
      <div className={classes.border}></div>
    </div>
  );
}

export default Table;
