import {describe, it} from 'mocha';
import {expect} from 'chai';
import isBlank from "../../main/string/isBlank.js";

describe('#isBlank', () => {
  context(`With ('')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank('');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' ')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank(' ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('\t')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank('\t');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' \t ')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank(' \t ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('\n')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank('\n');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('null')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank(null);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('undefined')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isBlank(undefined);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' \tabc ')`, () => {
    it(`Return true`, () => {
      const expectValue = false;
      const result = isBlank(' \tabc ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('a')`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = isBlank('a');

      expect(result).to.equal(expectValue);
    });
  });
});
