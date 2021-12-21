let basic_regEx = '^[0-9a-zA-Z@_.*%#$]{5,50}$';

function SimpleStrCheck(str: string): Boolean {
  return str.match(basic_regEx) === null ? false : true;
}
export {SimpleStrCheck};
export default null;
