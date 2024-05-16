import getData from '../src/parser.js';
import fs from 'fs';
import path from 'path';

export default function genDiff(filepath1, filepath2, format) {
  const normFilePath1 = path.resolve('__fixtures__', filepath1);
  const data1 = fs.readFileSync(normFilePath1)
  const normFilePath2 = path.resolve('__fixtures__', filepath2);
  const data2 = fs.readFileSync(normFilePath2)
  console.log(getData(data1))
  console.log(getData(data2))
  return 'ok';
}