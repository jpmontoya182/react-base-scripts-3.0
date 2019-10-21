import checkPropTypes from 'check-prop-types';

/**
 * return the element
 */
export const findElementByTestAttribute = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

/**
 * return the evaluation the props with check-prop-types
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
};
