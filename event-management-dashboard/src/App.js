
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage'
import EventManagementPage from './Pages/EventManagePage';
import AttendeeManagementPage from './Pages/AttManagePage';
import TaskTrackerPage from './Pages/TaskTrackerPage';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventManagementPage />} />
        <Route path="/attendees" element={<AttendeeManagementPage />} />
        <Route path="/tasks" element={<TaskTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;