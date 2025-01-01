import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Event Management Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your events, attendees, and tasks efficiently in one place.
      </Typography>
      <Button
        component={Link}
        to="/events"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default Home;
