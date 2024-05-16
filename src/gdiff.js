import getData from '../src/parser.js';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default function genDiff(filepath1, filepath2, format) {
  const normFilePath1 = path.resolve('__fixtures__', filepath1);
  const data1 = fs.readFileSync(normFilePath1)
  const normFilePath2 = path.resolve('__fixtures__', filepath2);
  const data2 = fs.readFileSync(normFilePath2)
  const obj1 = getData(data1);
  const obj2 = getData(data2);
  
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