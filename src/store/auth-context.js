import React ,{useState} from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token) => {},
    logout:()=>{},
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

    const userIsloggedIn = !!token;

    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const loginHandler = (token,expTime) =>{
        setToken(token);
        localStorage.setItem('token',token);
        const Rtime = cRT(expTime);

        setTimeout(logoutHandler,Rtime);
    }


    const contextValue = {
        token:token,
        isLoggedIn:userIsloggedIn,
        login:loginHandler,
        logout:logoutHandler,
    };

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;