import _ from 'lodash';

export default function findDiff(obj1, obj2, outFormat) {
  if (outFormat === undefined) {
    //console.log('default output format');
  };
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const findDiff = (key) => {
    const obj1HasOwn = Object.hasOwn(obj1, key);
    const obj2HasOwn = Object.hasOwn(obj2, key);
    if (obj1HasOwn && obj2HasOwn) {
      if (obj1[key] === obj2[key]) {
        return `   ${key}: ${obj1[key]}`;
      } else {
        return ` - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}`;
      }
    };
    if (obj1HasOwn) {
      return ` - ${key}: ${obj1[key]}`;
    } else {
      return ` + ${key}: ${obj2[key]}`;
    }
  };
  let str = '{';
  keys.forEach((key) => str = `${str}\n${findDiff(key)}`);
  str = `${str}\n}`
  return str;
}
