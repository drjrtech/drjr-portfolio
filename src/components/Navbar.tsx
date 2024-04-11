import React, { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';

import darkMode from '../assets/dark-mode.png';
import lightMode from '../assets/light-mode.png';
import chatDark from '../assets/flight-dark.png';
import chatLight from '../assets/flight-light.png';
import { routingUtil } from '../utils/routingUtils';
import { ColorModeContext } from '../App';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext); // Access toggleColorMode from context

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton component={Link} to={routingUtil.routes.root} color="inherit">
          {/* Temporary Logo */}
          <img 
              src={mode === 'light' ? chatDark : chatLight} 
              alt={mode === 'light' ? "Chat" : "Chat"} 
              style={{ width: '2rem', height: '2rem' }} 
            />
        </IconButton>
        <div style={{ marginLeft: 'auto' }}>
          {/* <Button component={Link} to={routingUtil.routes.portfolio} color="inherit">
              Portfolio href="#projects-section"
          </Button> */}
          <a className="nav-link active" href="#about-section">About</a>
          {/* Include hire use icon */}
          <IconButton color='primary' onClick={toggleColorMode}>
            <img 
              src={mode === 'light' ? darkMode : lightMode} 
              alt={mode === 'light' ? "Dark mode" : "Light mode"} 
              style={{ width: '2rem', height: '2rem' }} 
            />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
