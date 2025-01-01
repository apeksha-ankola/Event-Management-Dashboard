import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../Components/EventCard';
import EventForm from '../Components/EventForm';
import { Grid, Button, Typography } from '@mui/material';

const EventManagementPage = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://127.0.0.1:5000/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  };

  const handleAddEvent = (eventData) => {
    if (selectedEvent) {
      // Update event
      axios.put(`http://127.0.0.1:5000/events/${selectedEvent.id}`, eventData)
        .then(() => {
          fetchEvents();
          setSelectedEvent(null);
          setOpen(false);
        });
    } else {
      // Add new event
      axios.post('http://127.0.0.1:5000/events', eventData)
        .then(() => {
          fetchEvents();
          setOpen(false);
        });
    }
  };

  const handleDeleteEvent = (eventId) => {
    axios.delete(`http://127.0.0.1:5000/events/${eventId}`)
      .then(() => fetchEvents())
      .catch(error => console.error('Error deleting event:', error));
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Event Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Event
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard
              event={event}
              onEdit={() => handleEditEvent(event)}
              onDelete={() => handleDeleteEvent(event.id)}
            />
          </Grid>
        ))}
      </Grid>
      <EventForm
        open={open}
        handleClose={() => {
          setOpen(false);
          setSelectedEvent(null);
        }}
        onSubmit={handleAddEvent}
        initialData={selectedEvent}
      />
    </div>
  );
};

export default EventManagementPage;
