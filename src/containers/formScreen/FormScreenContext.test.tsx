import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../../utility/TestUtility';

import FormScreenProvider, { FormScreenContext } from './FormScreenContext';

/**
 * Factory function to create a ShallowWrapper for the verification component.
 * @function setup
 * @param { object } testValues - Context values specific to this setup.
 * @return { mount }
 */

const ConsumerComponent = (props: any) => {
  return <></>;
};
/**
 * Factory function to create a ReactWrapper for the verification context.
 * @returns {ReactWrapper}
 */
const setup = () => {
  return mount(
    <FormScreenProvider>
      <FormScreenContext.Consumer>
        {(values: any) => (
          <ConsumerComponent {...values} data-test="consumer-component" />
        )}
      </FormScreenContext.Consumer>
    </FormScreenProvider>
  );
};

describe('test verification context', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('test initial state', () => {
    const component = findByTestAttr(wrapper, 'consumer-component');

    const {
      isLoading,
      setLoading,
      initialValues,
      onSubmit,
      isSubmit
    } = component.props();

    expect(isLoading).toBeFalsy();
    expect(isSubmit).toBeFalsy();
    expect(initialValues).toEqual({
      email: '',
      firstName: '',
      lastName: ''
    });
    expect(typeof setLoading).toBe('function');
    expect(typeof onSubmit).toBe('function');
  });
});
