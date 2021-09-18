import {describe, it} from 'mocha';
import {expect} from 'chai';
import isEmpty from "../../main/string/isEmpty.js";

describe('#isEmpty', () => {
  context(`With ('')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty('');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' ')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty(' ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('\t')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty('\t');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' \t ')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty(' \t ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('\n')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty('\n');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('null')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty(null);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('undefined')`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = isEmpty(undefined);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (' \tabc ')`, () => {
    it(`Return true`, () => {
      const expectValue = false;
      const result = isEmpty(' \tabc ');

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ('a')`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = isEmpty('a');

      expect(result).to.equal(expectValue);
    });
  });
});
