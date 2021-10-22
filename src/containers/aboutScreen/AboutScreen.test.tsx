import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utility/TestUtility';
import { AboutScreen } from './AboutScreen';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<AboutScreen {...setupProps} />);
};

describe('render about screen', () => {
  test('test about screen render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'about-screen');
    expect(wrapperElement.length).toBe(1);
  });

  test('test welcome card component render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'about-screen-welcome-card');
    expect(wrapperElement.length).toBe(1);
  });
});
