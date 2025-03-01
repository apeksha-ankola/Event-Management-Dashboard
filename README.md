# Event Management Dashboard

## Prerequisites
- Node.js (>=14.x.x)
- Python (>=3.x)
- Flask installed (Backend)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install frontend dependencies:**
   Navigate to the `frontend` directory and install the dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   Navigate to the `backend` directory and install the required Python packages:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Start the backend (Flask server):**
   ```bash
   python app.py
   ```

5. **Start the frontend (React app):**
   In the `frontend` directory, run:
   ```bash
   npm start
   ```

6. **Access the application:**
   Open a browser and visit `http://localhost:3000` to see the frontend in action.

## API Endpoints
- `GET /attendees`: Fetch all attendees.
- `POST /attendees`: Add a new attendee.
- `DELETE /attendees/{id}`: Remove an attendee by ID.
- `GET /tasks/{eventId}`: Fetch tasks for a specific event.
- `PUT /tasks/{taskId}`: Update task status by ID.
