import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from './Components/Header'
import Main from './Components/Body.jsx'
import {Footer} from './Components/Footer'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div id="container">
    <Header />
    <Main />
    <Footer />
  </div>
);
