
function Table(props){
    
    return (<li>

        <div>
            <img src={props.image} alt={props.title} />
        </div>

        <div>
            <h3>{props.title}</h3>
            <address> {props.address} </address>
            <p> {props.desc} </p>
        </div>

        <div>
            <button>Options</button>
        </div>
    </li>);
    

    }

export default Table;