import parseData from '../src/parser.js';
import findDiff from '../src/fdiff.js';
import { getData } from '../src/utils.js';
// import fs from 'fs';
// import path from 'path';

export default function genDiff(filepath1, filepath2, format) {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2)
  const obj1 = parseData(data1);
  const obj2 = parseData(data2);
  return findDiff(obj1, obj2);
}