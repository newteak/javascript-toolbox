import {describe, it} from 'mocha';
import {expect} from 'chai';
import truthy from "../../main/common/truthy.js";

describe('#truthy', () => {
  context(`With (null)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = truthy(null);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (undefined)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = truthy(undefined);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ({}.nope)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = truthy({}.nope);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With ((function() {})())`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = truthy((function () {
      })());

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (0)`, () => {
    it(`Return true`, () => {
      const expectValue = true;
      const result = truthy(0);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With (false)`, () => {
    it(`Return false`, () => {
      const expectValue = false;
      const result = truthy(false);

      expect(result).to.equal(expectValue);
    });
  });

  context(`With [null, undefined, 1, 2, false].map(truthy)`, () => {
    it(`Return [false, false, true, true, true]`, () => {
      const expectValue = [false, false, true, true, false];
      const result = [null, undefined, 1, 2, false].map(truthy);

      expect(result).to.deep.equal(expectValue);
    });
  });
});
