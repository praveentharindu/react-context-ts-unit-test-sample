import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utility/TestUtility';
import Header from './Header';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Header {...setupProps} />);
};

describe('render header section', () => {
  test('test header section render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'header-section');
    expect(wrapperElement.length).toBe(1);
  });

  test('test brand name element render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'brand-name');
    expect(wrapperElement.length).toBe(1);
  });

  test('test home navigation render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'home-navigation');
    expect(wrapperElement.length).toBe(1);
  });

  test('test about navigation render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'about-navigation');
    expect(wrapperElement.length).toBe(1);
  });
});
