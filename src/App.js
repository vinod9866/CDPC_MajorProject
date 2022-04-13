import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NEWDRIVE from "./admin/NewDrive";
import Login from "./auth/login";
import Layout from "./components/layout";
import ALLMUPS from "./pages/ALLmeetups";
import Favorites from "./pages/table";
import Table from "./pages/tableData";
import BROADCAST from "./admin/BroadCast";
import { UserAccount } from "./pages/UserAccount";
import AuthContext from "./store/auth-context";
import AdminProfile from "./admin/Profile";
import Forgot from "./reset-forget-pswd/forgot";
import FPswd from "./admin/ForgotPswd";

function App() {
  const authCtx = useContext(AuthContext);
  const user = authCtx.Person;
  // console.log(user);
  // console.log(authCtx.isLoggedIn);
  return (
    <Layout>
      <Routes>
        {!authCtx.isLoggedIn && <Route path="/" element={<Login />} />}
        {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authCtx.isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        {authCtx.isLoggedIn && <Route path="/home" element={<ALLMUPS />} />}
        {user === "Admin"
          ? authCtx.isLoggedIn && (
              <Route path="/broadcast" element={<BROADCAST />} />
            )
          : null}
        {user === "Admin"
          ? authCtx.isLoggedIn && <Route path="/table" element={<Table />} />
          : null}
        {user === "Admin"
          ? authCtx.isLoggedIn && (
              <Route path="/newdrive" element={<NEWDRIVE />} />
            )
          : null}
        {user !== "Admin"
          ? authCtx.isLoggedIn && (
              <Route path="/profile" element={<UserAccount />} />
            )
          : null}
        {user === "Admin"
          ? authCtx.isLoggedIn && (
              <Route path="/Aprofile" element={<AdminProfile />} />)
          :null}


        <Route path="/forgot" element={<Forgot/>} />

        {authCtx.isLoggedIn && (
          <Route path="*" element={<Navigate to="/home" />} />
        )}
      </Routes>
    </Layout>
  );
  // user === "user"
  //         ? authCtx.isLoggedIn && <Route path="fav" element={<Favorites />} />
  //         : null}
}

export default App;
