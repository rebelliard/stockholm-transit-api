import { removeEmptyKeys } from './utils';

describe('utils', () => {
  describe('removeEmptyKeys', () => {
    it('should remove the empty `timeWindow` key', () => {
      const obj = {
        siteId: '1111',
        timeWindow: undefined,
      };

      removeEmptyKeys(obj);
      const expected = {
        siteId: '1111',
      };
      const received = obj;
      expect(received).toEqual(expected);
    });

    it('should not remove any key', () => {
      const obj = {
        siteId: '1111',
        timeWindow: 30,
      };

      removeEmptyKeys(obj);
      const expected = {
        siteId: '1111',
        timeWindow: 30,
      };
      const received = obj;
      expect(received).toEqual(expected);
    });
  });
});
