import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Event Management Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/events">
        Events
      </Button>
      <Button color="inherit" component={Link} to="/attendees">
        Attendees
      </Button>
      <Button color="inherit" component={Link} to="/tasks">
        Tasks
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
