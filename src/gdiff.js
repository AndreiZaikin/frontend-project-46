import parseData from '../src/parser.js';
import findDiff from '../src/fdiff.js';
import { getData, getFormat } from '../src/utils.js';
// import fs from 'fs';
// import path from 'path';

export default function genDiff(arrPath, outFormat) {
  const objects = arrPath.map((path) => parseData(getData(path), getFormat(path)));
  return findDiff(...objects, outFormat);
}