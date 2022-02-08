
import classes from './loading.module.css'
import { useState ,useContext} from 'react';
import AuthContext from '../store/auth-context';


function Loading(props){
   const [isLoading, setIsLoading] = useState(false);
   const ctx = useContext(AuthContext);

   const handleOnClick = () => {
       
  };

    return (
        <div className={classes.loader}> Loading...</div>
    );

}

export default Loading;