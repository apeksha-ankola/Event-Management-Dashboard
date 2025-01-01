import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Event Management Dashboard
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/events"
          sx={{ fontWeight: location.pathname === '/events' ? 'bold' : 'normal' }}
        >
          Events
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/attendees"
          sx={{ fontWeight: location.pathname === '/attendees' ? 'bold' : 'normal' }}
        >
          Attendees
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/tasks"
          sx={{ fontWeight: location.pathname === '/tasks' ? 'bold' : 'normal' }}
        >
          Tasks
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
