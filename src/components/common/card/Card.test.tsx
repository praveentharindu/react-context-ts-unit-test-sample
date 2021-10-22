import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utility/TestUtility';

import { Card } from './Card';

const title = 'Sample title';
const paragraph = 'Sample paragraph';

const defaultProps = {
  title,
  paragraph
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Card {...setupProps} />);
};

describe('render card section', () => {
  test('test card section render', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'card-section');
    expect(wrapperElement.length).toBe(1);
  });

  test('test card section title', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'card-title');
    expect(wrapperElement.length).toBe(1);
  });

  test('test card section paragraph', () => {
    const wrapper = setup(defaultProps);
    const wrapperElement = findByTestAttr(wrapper, 'card-paragraph');
    expect(wrapperElement.length).toBe(1);
  });
});
