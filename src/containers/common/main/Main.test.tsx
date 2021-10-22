import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utility/TestUtility';
import Main from './Main';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Main {...setupProps} />);
};

describe('render main section', () => {
  test('test main render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'main-section');
    expect(wrapperElement.length).toBe(1);
  });

  test('test home router render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'home-router');
    expect(wrapperElement.length).toBe(1);
  });

  test('test about router render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'about-router');
    expect(wrapperElement.length).toBe(1);
  });
});
