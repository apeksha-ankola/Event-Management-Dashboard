from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
from flask_cors import CORS

CORS(app)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///event_management.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False)

class Attendee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=True)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    deadline = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), default='Pending')
    attendee_id = db.Column(db.Integer, db.ForeignKey('attendee.id'), nullable=True)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)

# Event Routes
@app.route('/events', methods=['POST'])
def create_event():
    data = request.json
    new_event = Event(
        name=data['name'],
        description=data['description'],
        location=data['location'],
        date=data['date']
    )
    db.session.add(new_event)
    db.session.commit()
    return jsonify({'message': 'Event created successfully'}), 201

@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    output = [
        {
            'id': event.id,
            'name': event.name,
            'description': event.description,
            'location': event.location,
            'date': event.date
        } for event in events
    ]
    return jsonify(output)

@app.route('/events/<int:id>', methods=['PUT'])
def update_event(id):
    data = request.json
    event = Event.query.get_or_404(id)

    event.name = data.get('name', event.name)
    event.description = data.get('description', event.description)
    event.location = data.get('location', event.location)
    event.date = data.get('date', event.date)

    db.session.commit()
    return jsonify({'message': 'Event updated successfully'})

@app.route('/events/<int:id>', methods=['DELETE'])
def delete_event(id):
    event = Event.query.get_or_404(id)
    db.session.delete(event)
    db.session.commit()
    return jsonify({'message': 'Event deleted successfully'})

# Attendee Routes
@app.route('/attendees', methods=['POST'])
def add_attendee():
    data = request.json
    new_attendee = Attendee(name=data['name'], event_id=data.get('event_id'))
    db.session.add(new_attendee)
    db.session.commit()
    return jsonify({'message': 'Attendee added successfully'}), 201

@app.route('/attendees', methods=['GET'])
def get_attendees():
    attendees = Attendee.query.all()
    output = [
        {
            'id': attendee.id,
            'name': attendee.name,
            'event_id': attendee.event_id
        } for attendee in attendees
    ]
    return jsonify(output)

@app.route('/attendees/<int:id>', methods=['DELETE'])
def delete_attendee(id):
    attendee = Attendee.query.get_or_404(id)
    db.session.delete(attendee)
    db.session.commit()
    return jsonify({'message': 'Attendee deleted successfully'})

# Task Routes
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    new_task = Task(
        name=data['name'],
        deadline=data['deadline'],
        status=data.get('status', 'Pending'),
        attendee_id=data.get('attendee_id'),
        event_id=data['event_id']
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'message': 'Task created successfully'}), 201

@app.route('/tasks/<int:event_id>', methods=['GET'])
def get_tasks(event_id):
    tasks = Task.query.filter_by(event_id=event_id).all()
    output = [
        {
            'id': task.id,
            'name': task.name,
            'deadline': task.deadline,
            'status': task.status,
            'attendee_id': task.attendee_id
        } for task in tasks
    ]
    return jsonify(output)

@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.json
    task = Task.query.get_or_404(id)

    task.status = data.get('status', task.status)

    db.session.commit()
    return jsonify({'message': 'Task updated successfully'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
