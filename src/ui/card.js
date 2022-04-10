import { Card } from "react-bootstrap";
import classes from "./card.module.css";
function MyCard(props){
    return ( 
    <Card className={classes.spacing}>
        <Card.Body >
            {props.children}
        </Card.Body>
    </Card>
    );
}

export default MyCard;