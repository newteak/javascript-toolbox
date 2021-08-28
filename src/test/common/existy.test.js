const chai = require('chai');
const expect = chai.expect;
const existy = require('./existy').existy;

describe('#existy', () => {
  context(`With (null)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = existy(null);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (undefined)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = existy(undefined);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ({}.notHere)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = existy({}.notHere);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ((function() {})())`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = existy((function () {
      })());

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (0)`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = existy(0);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (false)`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = existy(false);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ([])`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = existy([]);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ("")`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = existy("");

      expect(result).to.equal(expectValue);
    });
  });

  context(`With [null, undefined, 1, 2, false].map(existy)`, () => {
    it(`Return [false, false, true, true, true]`, () => {
      const expectValue = [false, false, true, true, true];
      const result = [null, undefined, 1, 2, false].map(existy);

      expect(result).to.deep.equal(expectValue);
    });
  });
});
