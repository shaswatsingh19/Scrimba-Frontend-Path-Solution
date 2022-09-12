import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import {Footer} from './Components/Footer'

// import logoImg from "./logo.svg";
// Components





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div id="container">
    <Header />
    <Main />
    <Footer />
  </div>
);
