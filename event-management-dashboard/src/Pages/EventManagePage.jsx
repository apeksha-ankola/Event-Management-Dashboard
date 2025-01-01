import React, { useState } from 'react';
import EventCard from '../Components/EventCard';
import EventForm from '../Components/EventForm';
import { Grid, Button } from '@mui/material';

const EventManagementPage = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddEvent = (eventData) => {
    setEvents([...events, eventData]);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Event
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
      <EventForm open={open} handleClose={() => setOpen(false)} onSubmit={handleAddEvent} />
    </div>
  );
};

export default EventManagementPage;
