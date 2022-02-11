import Card from "react-bootstrap/Card";
import classes from "./card.module.css";
function MyCard(props){
    return <Card className={classes.spacing}>
        <div>{props.children}</div>
    </Card>
}

export default MyCard;