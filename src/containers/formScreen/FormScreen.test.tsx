import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import FormScreen from './FormScreen';
import { findByTestAttr } from '../../utility/TestUtility';

const defaultProps = {
  defaultProviderProps: {
    history: {},
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: undefined
    },
    match: {},
    staticContext: undefined
  }
};

/**
 * Factory function to create a ReactWrapper for the form screen.
 * @param {*} props
 * @param {*} values
 * @returns {ReactWrapper}
 */
const setup = (props = {}, values = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<FormScreen {...setupProps} />);
};

describe('test form screen', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('test render form screen without error', () => {
    const component = findByTestAttr(wrapper, 'form-wrapper');
    expect(component.exists()).toBe(true);
  });
});
