import { describe, it } from 'mocha';
import { expect } from 'chai';
import if_null_return_default_value from "../../main/common/if_null_return_default_value.js";

describe('#if_null_return_default_value', () => {
  describe(`null or undefined`, () => {
    context(`With (null)`, () => {
      it(`Return 'DEFAULT VALUE'`, () => {
        const expectValue = 'DEFAULT VALUE';
        const result = if_null_return_default_value(null);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (undefiend)`, () => {
      it(`Return 'DEFAULT VALUE'`, () => {
        const expectValue = 'DEFAULT VALUE';
        const result = if_null_return_default_value(undefined);

        expect(result).to.equal(expectValue);
      });
    });
  });

  describe(`falsy value without null or undefined`, () => {
    context(`With (0)`, () => {
      it(`Return 0`, () => {
        const expectValue = 0;
        const result = if_null_return_default_value(0);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (-0)`, () => {
      it(`Return -0`, () => {
        const expectValue = -0;
        const result = if_null_return_default_value(-0);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With ('')`, () => {
      it(`Return ''`, () => {
        const expectValue = '';
        const result = if_null_return_default_value('');

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (false)`, () => {
      it(`Return false`, () => {
        const expectValue = false;
        const result = if_null_return_default_value(false);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (NaN)`, () => {
      it(`Return NaN`, () => {
        const result = if_null_return_default_value(NaN);

        expect(result).to.be.NaN;
      });
    });
  });

  describe('not falsy value', () => {
    context(`With ('hello')`, () => {
      it(`Return 'hello'`, () => {
        const expectValue = 'hello';
        const result = if_null_return_default_value('hello');

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (-1)`, () => {
      it(`Return -1`, () => {
        const expectValue = -1;
        const result = if_null_return_default_value(-1);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (1)`, () => {
      it(`Return 1`, () => {
        const expectValue = 1;
        const result = if_null_return_default_value(1);

        expect(result).to.equal(expectValue);
      });
    });

    context(`With (true)`, () => {
      it(`Return true`, () => {
        const expectValue = true;
        const result = if_null_return_default_value(true);

        expect(result).to.equal(expectValue);
      });
    });
  });
});
