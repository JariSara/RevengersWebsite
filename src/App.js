import logo from './logo.svg';
import './App.css';
import FrontPage from "./Components/Front/Frontpage.tsx";
import './index.css';

const BackgroundImagePage = () => {
  return (
    <div className="bg"></div>
  );
}


import React, { Component } from 'react';
  
class App extends Component {
  render() {
    const myStyle={
backgroundImage:`url(${process.env.PUBLIC_URL+ "/val.jpg"})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
    return (
      <div style={myStyle} >
      </div>
    );
  }
}

export default App;
