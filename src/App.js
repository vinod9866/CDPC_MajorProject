import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NEWDRIVE from "./admin/NewDrive";
import Login from "./auth/login";
import Layout from "./components/layout";
import Table from "./pages/tableData";
import BROADCAST from "./admin/BroadCast";
import { UserAccount } from "./pages/UserAccount";
import AuthContext from "./store/auth-context";
import AdminProfile from "./admin/Profile";
import Forgot from "./reset-forget-pswd/forgot";
import FPswd from "./admin/ForgotPswd";
import TableData from "./pages/tableData";
import DriveStatusData from "./pages/driveStatusData";
import CompanyRegister from "./company/email";

function App() {
  const authCtx = useContext(AuthContext);
  const user = authCtx.Person;

  return (
    <Layout>
      <Routes>
        {!authCtx.isLoggedIn && <Route path="/companyregister" element={<CompanyRegister/>} />}
        {!authCtx.isLoggedIn && <Route path="/" element={<Login />} />}
        {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authCtx.isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        {authCtx.isLoggedIn && <Route path="/home" element={<TableData />} />}
        {user === "ADMIN"
          ? authCtx.isLoggedIn && (
              <Route path="/broadcast" element={<BROADCAST />} />
            )
          : null}
        {user === "ADMIN"
          ? authCtx.isLoggedIn && <Route path="/table" element={<Table />} />
          : null}
        {user === "ADMIN"
          ? authCtx.isLoggedIn && (
              <Route path="/newdrive" element={<NEWDRIVE />} />
            )
          : null}
        {user !== "ADMIN"
          ? authCtx.isLoggedIn && (
              <Route path="/profile" element={<UserAccount />} />
            )
          : null}
        {user !== "ADMIN"
          ? authCtx.isLoggedIn && (
              <Route path="/status" element={<DriveStatusData />} />
            )
          : null}
        {user === "ADMIN"
          ? authCtx.isLoggedIn && (
              <Route path="/Aprofile" element={<AdminProfile />} />)
          :null}


        <Route path="/forgot" element={<Forgot/>} />

        {(authCtx.isLoggedIn)?
          <Route path="*" element={<Navigate to="/home" />} /> :null
        }
      </Routes>
    </Layout>
  );

}

export default App;
