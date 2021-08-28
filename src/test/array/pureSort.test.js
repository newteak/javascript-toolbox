import {describe, it} from 'mocha';
import {expect} from 'chai';
import pureSort from "../../main/array/pureSort.js";

describe('#pureSort', () => {
  context('With ([3, 1, 2])', () => {
    it('Return [1, 2, 3]', () => {
      const expectValue = [1, 2, 3];
      const actualValue = pureSort([3, 1, 2]);

      expect(actualValue).to.deep.equal(expectValue);
    });
  });

  context('With ([3, 1, -2])', () => {
    it('Return [-2, 1, 3]', () => {
      const expectValue = [-2, 1, 3];
      const actualValue = pureSort([3, 1, -2]);

      expect(actualValue).to.deep.equal(expectValue);
    });
  });


  context('With ([3, 1, 20])', () => {
    it('Return [1, 3, 20]', () => {
      const expectValue = [1, 20, 3];
      const actualValue = pureSort([3, 1, 20]);

      expect(actualValue).to.deep.equal(expectValue);
    })
  });

  context('With (target)', () => {
    it('After sorting, target array is same order', () => {
      const targetArr = [3, 1, 2];
      const expectValue = [3, 1, 2];
      pureSort(targetArr)
      const actualValue = targetArr;

      expect(actualValue).to.deep.equal(expectValue);
    });
  });
});
