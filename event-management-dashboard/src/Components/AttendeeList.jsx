import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AttendeeList = ({ attendees }) => {
  return (
    <>
      {attendees.map((attendee, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{attendee.name}</Typography>
            <Typography variant="body2">{attendee.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default AttendeeList;
