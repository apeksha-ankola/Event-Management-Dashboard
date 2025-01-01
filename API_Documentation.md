## API Endpoints

### 1. Get All Attendees
- **URL**: `/attendees`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    ...
  ]
  ```

### 2. Add an Attendee
- **URL**: `/attendees`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

### 3. Remove an Attendee
- **URL**: `/attendees/{id}`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "Attendee removed successfully"
  }
  ```

### 4. Get Tasks for Event
- **URL**: `/tasks/{eventId}`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Task 1",
      "status": true
    },
    ...
  ]
  ```

### 5. Update Task Status
- **URL**: `/tasks/{taskId}`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "status": false
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Task 1",
    "status": false
  }
  ```
