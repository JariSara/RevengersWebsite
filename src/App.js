import logo from './logo.svg';
import './App.css';
import FrontPage from "./Components/Front/Frontpage.tsx";
import Players from "./Components/PlayerInfo/Players.tsx";
import History from "./Components/GameHistory/History.tsx";
import Tournaments from "./Components/FutureMatches/Tournaments.tsx";
import Contact from "./Components/ContactForm/EmailContactForm.jsx";
import './index.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.tsx";
import { HashRouter, Routes, Route } from "react-router-dom";

const myStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.jpg"})`,
  height: 'auto',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
  backgroundAttachment: "fixed"
};

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={myStyle}>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="Players" element={<Players />} />
            <Route path="History" element={<History />} />
            <Route path="Tournaments" element={<Tournaments />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

/*
      <div style={myStyle} />
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
