import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
import lightMode from '../assets/light-mode.png';
import { routingUtil } from '../utils/routingUtils';
import { ColorModeContext } from '../App';

const NavBar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext); // Access toggleColorMode from context

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton component={Link} to={routingUtil.routes.root} color="inherit">
          <img src={logo} alt="Logo" style={{ width: '3rem', height: '3rem' }} />
        </IconButton>
        <div style={{ marginLeft: 'auto' }}>
          <Button component={Link} to={routingUtil.routes.portfolio} color="inherit">
              Portfolio
          </Button>
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
