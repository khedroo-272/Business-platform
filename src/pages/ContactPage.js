// src/components/ContactPage.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {

  const navigate = useNavigate();
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      toast.success('Form submitted successfully!');
      // navigate('/'); // Navigate to home page after 2 seconds
    }, 1000);
  }

  return (
    <Container className="mx-auto h-100vh custom-margin mw-540 px-3">
      <h2 className='mt-5 text-center'>Contact Us</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <BootstrapForm.Group controlId="formName">
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formEmail">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formMessage">
              <BootstrapForm.Label>Message</BootstrapForm.Label>
              <Field
                as="textarea"
                name="message"
                className="form-control"
                rows="3"
                placeholder="Enter your message"
              />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <div className='w-100 d-flex justify-content-center'>
              <Button type="submit" disabled={isSubmitting} className="mt-4 pro-button mx-auto">
                Submit
              </Button>
            </div> 
          </Form>
        )}
        </Formik>
        <ToastContainer />
    </Container>
  );
};

export default ContactPage;
