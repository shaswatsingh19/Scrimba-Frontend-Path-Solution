import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from './Components/Header'
import MainBody from './Components/Body.jsx'
import {Footer} from './Components/Footer'


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () =>{
  return (
    <div id='container'>
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

// root.render({App});
root.render(<App />);
