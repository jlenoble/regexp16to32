import {makeTests} from './helpers';
import path from 'path';

describe(`Testing U16To32`, function () {
  this.timeout(60000); // eslint-disable-line no-invalid-this

  const dir = path.join(process.cwd(), 'test', 'data');

  makeTests({dir, files: [
    'do-nothing1.txt',
    'convert1.txt',
    'convert2.txt',
  ]});
});
