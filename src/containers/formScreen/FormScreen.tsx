import React from 'react';

import FormScreenProvider from './FormScreenContext';
import FormWrapper from '../../components/formScreen/formWrapper/FormWrapper';

const FormScreen = () => {
  return (
    <FormScreenProvider>
      <div data-test="form-wrapper" className="verificationContainer">
        <FormWrapper />
      </div>
    </FormScreenProvider>
  );
};

export default FormScreen;
