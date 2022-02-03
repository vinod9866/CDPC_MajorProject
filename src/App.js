import { Routes,Route } from "react-router-dom";
import Login from "./auth/login";
import Layout from "./components/layout";
import ALLMUPS from "./pages/ALLmeetups";
import Favorites from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/all" element={<ALLMUPS/>} />
      <Route path="/" element={<Login />} /> 
      <Route path="/new" element={<NewMeetupPage />} />
      <Route path="fav" element={<Favorites/>} />
      </Routes>
    </Layout>
  );
}

export default App;
