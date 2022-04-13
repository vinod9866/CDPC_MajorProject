import React ,{useState} from "react";

const AuthContext = React.createContext({

    token:'',
    isLoggedIn:false,
    whoLoggedIn:(person)=>{},
    Person:'',
    login:(token) => {},
    logout:()=>{},
    stompClient :null,
    stopmClentAction : ()=>{},
    notifications:[],
    notificationAction:()=>{}
})

const cRT = (expTime) => {
    const currentTime = new Date().getTime();
    const adjExpTime = new Date(expTime).getTime();
    const Rduration = adjExpTime - currentTime;

    return Rduration;
}

export const AuthContextProvider = (props) =>{

    const initialToken = localStorage.getItem('token');
    const [token,setToken] = useState(initialToken);

    const initialPerson = localStorage.getItem('Person');
    const [person,setPerson] = useState(initialPerson);

    const [stompClient,setStompClient] = useState(null);

    const [notifications,setNotifications] = useState([])

    const userIsloggedIn = !!token;

    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('Person');
        
    }

    const loginHandler = (token,expTime) =>{
        setToken(token);
        localStorage.setItem('token',token);
        const Rtime = cRT(expTime);
        setTimeout(logoutHandler,Rtime);
    }

    const accountHandler = (person) =>{
        setPerson(person);
        localStorage.setItem('Person',person);

    }

    const stopmClientHandler = (client) =>{
        setStompClient(client)
    }

    const notificationHandler = (data) =>{
        setNotifications(data)
    }


    const contextValue = {
        token:token,
        isLoggedIn:userIsloggedIn,
        login:loginHandler,
        logout:logoutHandler,
        whoLoggedIn:accountHandler,
        Person:person,
        stompClient:stompClient,
        stopmClentAction:stopmClientHandler,
        notifications:notifications,
        notificationAction:notificationHandler
    };

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;