import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EventForm = ({ open, handleClose, onSubmit, initialData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          margin: 'auto',
          marginTop: '10%',
          boxShadow: 3,
        }}
      >
        <Formik
          initialValues={initialData || { name: '', description: '', location: '', date: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            date: Yup.date().required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                label="Event Name"
                name="name"
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                as={TextField}
                label="Description"
                name="description"
                fullWidth
                margin="normal"
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
              <Field
                as={TextField}
                label="Location"
                name="location"
                fullWidth
                margin="normal"
                error={touched.location && Boolean(errors.location)}
                helperText={touched.location && errors.location}
              />
              <Field
                as={TextField}
                label="Date"
                name="date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                error={touched.date && Boolean(errors.date)}
                helperText={touched.date && errors.date}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                {initialData ? 'Update Event' : 'Add Event'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EventForm;
