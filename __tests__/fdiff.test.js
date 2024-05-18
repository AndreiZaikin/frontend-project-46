/* eslint-disable no-undef */
import parseData from '../src/parser.js';
import findDiff from '../src/fdiff.js';
// import fs from 'fs';
import { getData } from '../src/utils.js';

test('finding difference', () => {
  const correctDiff = getData('diff.txt');
  const data1 = getData('file1.json');
  const data2 = getData('file2.json')
  const obj1 = parseData(data1);
  const obj2 = parseData(data2);

  expect(findDiff(obj1, obj2)).toEqual(correctDiff);
});