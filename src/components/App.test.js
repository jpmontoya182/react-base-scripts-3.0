import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findElementByTestAttribute } from '../testing/utilsTest';

// here asign the properties to the component
const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<App {...setupProps} />);
};

describe('this container is just to test the UI components', () => {
  it('Render of component', () => {
    const wrapper = setup();
    const component = findElementByTestAttribute(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });
});
