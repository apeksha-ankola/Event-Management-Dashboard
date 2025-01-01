import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import AttendeeList from '../Components/AttendeeList';

const AttendeeManagementPage = () => {
  const [attendees, setAttendees] = useState([]);

  const addAttendee = (attendee) => {
    setAttendees([...attendees, attendee]);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => addAttendee({ name: 'John Doe', email: 'john@example.com' })}>
        Add Attendee
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <AttendeeList attendees={attendees} />
      </Grid>
    </div>
  );
};

export default AttendeeManagementPage;
