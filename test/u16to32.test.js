import Muter, {captured} from 'muter';
import {expect} from 'chai';
import U16to32 from '../src/u16to32';

describe('Testing U16to32', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class U16to32 says 'Hello world!'`, captured(muter, function () {
    new U16to32();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
