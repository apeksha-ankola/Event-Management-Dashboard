import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import EventManagementPage from './Pages/EventManagePage';
import AttendeeManagementPage from './Pages/AttManagePage';
import TaskTrackerPage from './Pages/TaskTrackerPage';
import Header from './Components/Header';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventManagementPage />} />
          <Route path="/attendees" element={<AttendeeManagementPage />} />
          <Route path="/tasks" element={<TaskTrackerPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
