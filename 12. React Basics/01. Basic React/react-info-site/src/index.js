import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import logoImg from './logo.svg'


// Components
function Header (){
  return (
    <nav>
      <img src={logoImg} alt='react logo'></img>
    </nav>
  )
}

function Main(){
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>  
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function Footer(){
  return (
    <footer>
      <small>© 2022 Singh development. All rights reserved</small>
    </footer>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div id ='container'>
      <Header />
      <Main />
      <Footer />
    </div>
)