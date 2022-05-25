import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff =  (path1, path2) => {
  const file1 = readFileSync(path1, 'utf8');
  const file2 = readFileSync(path2, 'utf8');
  const parsedFile1 = JSON.parse(file1);
  const parsedFile2 = JSON.parse(file2);
  const keys1 = _.keys(parsedFile1);
  const keys2 = _.keys(parsedFile2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = keys.sort();
  let result = '';
  for (const key of sortedKeys) {
    if (_.has(parsedFile1, key) && _.has(parsedFile2, key)) {
      if (parsedFile1[key] === parsedFile2[key]) {
        result += `  ${key}: ${parsedFile1[key]}\n`;
      }
      else {
        result += `- ${key}: ${parsedFile1[key]}\n`;
        result += `+ ${key}: ${parsedFile2[key]}\n`;
      }
    }
    else if (_.has(parsedFile1, key)) {
      result += `- ${key}: ${parsedFile1[key]}\n`;
    }
    else if (_.has(parsedFile2, key)) {
      result += `+ ${key}: ${parsedFile2[key]}\n`;
    }
  }
  console.log(result);
};

export default genDiff;
