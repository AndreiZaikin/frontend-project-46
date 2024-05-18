import fs from 'fs';
import path from 'path';

const getData = (filepath) => {
  const normFilePath = path.resolve('__fixtures__', filepath);
  return fs.readFileSync(normFilePath, "utf-8");  
};

export { getData }