import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{event.name}</Typography>
        <Typography variant="body2">{event.description}</Typography>
        <Typography variant="body2">Location: {event.location}</Typography>
        <Typography variant="body2">Date: {event.date}</Typography>
        <Button variant="outlined" color="primary" sx={{ marginTop: 1 }}>
          Edit
        </Button>
        <Button variant="outlined" color="secondary" sx={{ marginTop: 1 }}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
