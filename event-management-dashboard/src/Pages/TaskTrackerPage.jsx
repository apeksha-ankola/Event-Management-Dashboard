import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Checkbox, Typography, Card, CardContent } from '@mui/material';

const TaskTrackerPage = () => {
  const [tasks, setTasks] = useState([]);
  const eventId = 1; // Replace with the event ID dynamically if needed

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get(`http://127.0.0.1:5000/tasks/${eventId}`) // Adjust eventId dynamically
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  const toggleTaskStatus = (taskId, currentStatus) => {
    axios.put(`http://127.0.0.1:5000/tasks/${taskId}`, { status: !currentStatus })
      .then(() => fetchTasks())
      .catch(error => console.error('Error updating task status:', error));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Task Tracker
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card>
              <CardContent>
                <Checkbox
                  checked={task.status}
                  onChange={() => toggleTaskStatus(task.id, task.status)}
                  color="primary"
                />
                <Typography variant="body2">{task.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TaskTrackerPage;
