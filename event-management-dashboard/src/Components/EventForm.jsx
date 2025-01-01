import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EventForm = ({ open, handleClose, onSubmit }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, padding: 2, margin: 'auto', marginTop: '10%' }}>
        <Formik
          initialValues={{ name: '', description: '', location: '', date: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            date: Yup.date().required('Required'),
          })}
          onSubmit={onSubmit}
        >
          <Form>
            <Field as={TextField} label="Event Name" name="name" fullWidth margin="normal" />
            <Field as={TextField} label="Description" name="description" fullWidth margin="normal" />
            <Field as={TextField} label="Location" name="location" fullWidth margin="normal" />
            <Field as={TextField} label="Date" name="date" type="date" fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              Add Event
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default EventForm;
