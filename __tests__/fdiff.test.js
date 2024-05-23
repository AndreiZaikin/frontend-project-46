/* eslint-disable no-undef */
import parseData from '../src/parser.js';
import findDiff from '../src/fdiff.js';
// import fs from 'fs';
import { getData, getFormat } from '../src/utils.js';

const correctDiff = getData('diff.txt');

test('comparing json files', () => {
  const arrPath = ['file1.json', 'file2.json']
  const objects = arrPath.map((path) => parseData(getData(path), getFormat(path)));
  expect(findDiff(...objects)).toEqual(correctDiff);
});

test('comparing yml files', () => {
  const arrPath = ['file1.yml', 'file2.yml']
  const objects = arrPath.map((path) => parseData(getData(path), getFormat(path)));
  expect(findDiff(...objects)).toEqual(correctDiff);
});

test('comparing yaml files', () => {
  const arrPath = ['file1.yaml', 'file2.yaml']
  const objects = arrPath.map((path) => parseData(getData(path), getFormat(path)));
  expect(findDiff(...objects)).toEqual(correctDiff);
});
