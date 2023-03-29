import { NavLink } from 'react-router-dom'
//import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import React, { Component } from 'react';
import { useState } from 'react'
import FrontPage from '../Front/Frontpage';
import { Link, useNavigate } from "react-router-dom";
//import { ReactComponent as Brand } from '../../Revengers_Logo.svg';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <div className="blurImage">
          <div className="testImage"></div>
          </div>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/Frontpage">
                <span className="newFont">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Tournaments">
                <span className="newFont">Tournaments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/History">
                <span className="newFont">History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Players">
                <span className="newFont">Players</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">
                <span className="newFont">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
