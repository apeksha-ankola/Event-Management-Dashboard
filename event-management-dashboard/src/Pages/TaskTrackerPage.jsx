import React, { useState } from 'react';
import { Button, Grid, Checkbox, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';  // Add this import

const TaskTrackerPage = () => {
  const [tasks, setTasks] = useState([
    { name: 'Setup Venue', completed: false },
    { name: 'Invite Guests', completed: false },
  ]);

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Button variant="contained" color="primary">
        Add Task
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTaskStatus(index)}
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
