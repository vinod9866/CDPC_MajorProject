import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
<AuthContextProvider> 
<BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
