import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from './App';
import "./index.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>

  <App/>
  </BrowserRouter>
  ,
  document.getElementById("root")
);