import { useContext } from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import Login from "./auth/login";
import Layout from "./components/layout";
import ALLMUPS from "./pages/ALLmeetups";
import Favorites from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import AuthContext from "./store/auth-context";

function App() {

  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        {
          !authCtx.isLoggedIn && <Route path="/login" element={<Login />} />
        }
        {
          authCtx.isLoggedIn &&<Route path="/all" element={<ALLMUPS/>} />
        }
        {
          authCtx.isLoggedIn && <Route path="/new" element={<NewMeetupPage />} />
        }
        {
          authCtx.isLoggedIn && <Route path="fav" element={<Favorites/>} />
        }


        <Route path="*" element={<Navigate to="/login" />} />
  
      </Routes>
    </Layout>
  );
}

export default App;
