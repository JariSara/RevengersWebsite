import { NavLink } from 'react-router-dom'
//import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import { BrowserView, MobileView } from 'react-device-detect';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
//import { ReactComponent as Brand } from '../../Revengers_Logo.svg';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [isChanged, setIsChanged] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsChanged(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleToggle = () => {
    setIsChanged(!isChanged);
  };
  return (
    <div>
      <BrowserView>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <div className="blurImage">
                <div className="navImage"></div>
              </div>
            </div>
            <div className="nav-elements">
              <ul>
                <li>
                  <NavLink to="/">
                    <span>Home</span>
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
      </BrowserView>
      <MobileView>
        <div className="mobileBackground">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div className="mobileContainer">
                  <div className="navImage2"></div>

                  <Button className="mobileDashboard"{...bindTrigger(popupState)}>
                    <div ref={containerRef} className={`containerButton ${isChanged ? 'change' : ''}`} onClick={handleToggle}>
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                    </div>
                  </Button>
                </div>                  

                <Menu {...bindMenu(popupState)} PaperProps={{ style: { backgroundColor: 'black' } }}>

                    <MenuItem onClick={popupState.close}>
                      <NavLink to="/">
                        <span>Home</span>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <NavLink to="/Tournaments">
                        <span>Tournaments</span>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <NavLink to="/History">
                        <span>History</span>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <NavLink to="/Players">
                        <span>Players</span>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <NavLink to="/Contact">
                        <span>Contact</span>
                      </NavLink>
                    </MenuItem>
                  </Menu>

              </React.Fragment>
            )}
          </PopupState>
        </div>
      </MobileView>
    </div>
  )
}
function myFunction(x) {
  x.classList.toggle("change");
}
export default Navbar
