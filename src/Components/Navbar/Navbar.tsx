import { NavLink } from 'react-router-dom'
//import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import React, { Component } from 'react';
import { useState } from 'react'
import FrontPage from '../Front/Frontpage';
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
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
          <div className="testImage2"></div>
          </div>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/Frontpage">
                <span>Homes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Tournaments">
                <span>Tournaments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/History">
                <span>History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Players">
                <span>Players</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
