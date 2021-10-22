/**
 * @function findByTestAttr
 * @param {*} wrapper
 * @param {*} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: any, val: any) => {
  return wrapper.find(`[data-test='${val}']`);
};
