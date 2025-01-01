import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Typography, Modal, TextField } from '@mui/material';
import AttendeeList from '../Components/AttendeeList';

const AttendeeManagementPage = () => {
  const [attendees, setAttendees] = useState([]);
  const [open, setOpen] = useState(false);
  const [newAttendee, setNewAttendee] = useState({ name: '', email: '' }); // Adjust fields as necessary

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = () => {
    axios.get('http://127.0.0.1:5000/attendees')
      .then(response => setAttendees(response.data))
      .catch(error => console.error('Error fetching attendees:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendee({ ...newAttendee, [name]: value });
  };

  const addAttendee = () => {
    if (newAttendee.name && newAttendee.email) {
      axios.post('http://127.0.0.1:5000/attendees', newAttendee)
        .then(() => {
          fetchAttendees();
          setOpen(false);
          setNewAttendee({ name: '', email: '' });
        })
        .catch(error => console.error('Error adding attendee:', error));
    }
  };

  const deleteAttendee = (attendeeId) => {
    axios.delete(`http://127.0.0.1:5000/attendees/${attendeeId}`)
      .then(() => fetchAttendees())
      .catch(error => console.error('Error deleting attendee:', error));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Attendee Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Attendee
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <AttendeeList attendees={attendees} onDelete={deleteAttendee} />
      </Grid>

      {/* Modal to Add Attendee */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '20px', backgroundColor: 'white', margin: '100px auto', width: '400px' }}>
          <Typography variant="h6" gutterBottom>
            Add New Attendee
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={newAttendee.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newAttendee.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={addAttendee}>Add</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AttendeeManagementPage;
