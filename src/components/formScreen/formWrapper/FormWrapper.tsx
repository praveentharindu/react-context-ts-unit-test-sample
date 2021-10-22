import React, { useContext } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { Button, Row, Col } from 'react-bootstrap';
import * as yup from 'yup';

import { FormScreenContext } from '../../../containers/formScreen/FormScreenContext';

import './FormWrapper.scss';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const FormWrapper = () => {
  const { isLoading, isSubmit, initialValues, onSubmit } = useContext(
    FormScreenContext
  );
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
          setTimeout(() => {
            onSubmit(values);
            resetForm();
          }, 100);
        }}
        validationSchema={yup.object().shape({
          firstName: yup.string().required('First name is required.'),
          email: yup
            .string()
            .email('Invalid email')
            .required('Email is required.')
        })}
      >
        {({ values, errors, touched }) => (
          <Form>
            {console.log('values', values)}
            <div className="form-body">
              <Row>
                <Col md={12} className="form-group text-left">
                  <label htmlFor="firstName">First Name*</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={values.firstName}
                  />
                  <div className="error-message">
                    <ErrorMessage name="firstName" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="form-group text-left">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  />
                  <div className="error-message">
                    <ErrorMessage name="lastName" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="form-group text-left">
                  <label htmlFor="email">Email*</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <div className="error-message">
                    <ErrorMessage name="email" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="form-group text-right">
                  <Button type="submit" disabled={isSubmit}>
                    {isSubmit ? 'Submitting' : 'Submit'}
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormWrapper;
