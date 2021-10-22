import React, { createContext, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import { submitCheckResults } from '../../api/Api';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormScreenContext {
  isLoading: boolean;
  isSubmit: boolean;
  initialValues: User;
  setLoading: (value: boolean) => void;
  onSubmit: any;
}

const defaultState = {
  isLoading: false,
  isSubmit: false,
  initialValues: {
    firstName: '',
    lastName: '',
    email: ''
  },
  setLoading: () => console.log('toggle'),
  setSubmit: () => console.log('toggle'),
  onSubmit: () => console.log('toggle')
};

export const FormScreenContext = createContext<FormScreenContext>(defaultState);

const VerificationProvider = (props: { children: any }) => {
  const { children } = props;
  const [isLoading, setLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  /**
   *  on submit form handler
   */
  const onSubmit = useCallback(async values => {
    submitCheckResults(values);
    try {
      setSubmit(true);
      await submitCheckResults(values);
      toast.success('Save', {
        autoClose: 2000
      });
    } catch (exception) {
      toast.error('Failed', {
        autoClose: 2000
      });
      console.error(exception);
    } finally {
      setSubmit(false);
    }
  }, []);

  return (
    <FormScreenContext.Provider
      value={{
        isLoading,
        setLoading,
        initialValues,
        onSubmit,
        isSubmit
      }}
    >
      {children}
    </FormScreenContext.Provider>
  );
};

export default VerificationProvider;
