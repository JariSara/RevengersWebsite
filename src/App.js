import logo from './logo.svg';
import './App.css';
import FrontPage from "./Components/Front/Frontpage.tsx";
import './index.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

/*

    <div>
    <header>
        <nav>
          <div className='CenteredText'>
          <div className='testImage'></div>
          </div>
        </nav>
      </header>
        <FrontPage></FrontPage>
      </div>
          <img src="./Revengers_Logo.png"></img>
  render() {
    const myStyle={
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/val.jpg"})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: "relative"
        };
    return (
      <div style={myStyle}>
        <div>
        <FrontPage></FrontPage>
        </div>
      </div>
    );
  }

*/

export default App;
