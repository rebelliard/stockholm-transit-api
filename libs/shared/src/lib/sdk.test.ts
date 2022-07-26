import * as sdk from './sdk';

describe('sdk', () => {
  beforeEach(() => {
    sdk.clear();

    sdk.init({
      apiKey: 'abc123',
      name: 'sl-client',
      url: '/api/test.json',
    });
  });

  describe('getApp', () => {
    it('should create the base URL', () => {
      const expected = sdk.getApp('sl-client').url;
      const received = 'https://api.sl.se/api/test.json';
      expect(received).toEqual(expected);
    });

    it('should support multiple apps', () => {
      sdk.init({
        apiKey: 'abc456',
        name: 'sl-client2',
        url: '/api/test2.json',
      });

      sdk.init({
        apiKey: 'abc789',
        name: 'sl-client3',
        url: '/api/test3.json',
      });

      const expected1 = sdk.getApp('sl-client').url;
      const received1 = 'https://api.sl.se/api/test.json';
      expect(received1).toEqual(expected1);

      const expected2 = sdk.getApp('sl-client2').url;
      const received2 = 'https://api.sl.se/api/test2.json';
      expect(received2).toEqual(expected2);

      const expected3 = sdk.getApp('sl-client3').url;
      const received3 = 'https://api.sl.se/api/test3.json';
      expect(received3).toEqual(expected3);
    });
  });

  describe('getUrl', () => {
    it('should create the request URL', () => {
      const params = {
        q: 'search',
      };
      const expected = sdk.getUrl('sl-client', params).toString();
      const received = 'https://api.sl.se/api/test.json?key=abc123&q=search';
      expect(received).toEqual(expected);
    });
  });

  describe('getMappedUrl', () => {
    it('should create the mapped request URL', () => {
      const params = {
        q: 'Solna',
        type: 'TRAIN',
      };
      const mapper: Record<keyof typeof params, string> = {
        q: 'search',
        type: 'transportMode',
      };
      const defaultValues: Record<keyof typeof params, string> = {
        q: '',
        type: 'TRAIN',
      };
      const expected = sdk
        .getMappedUrl('sl-client', params, mapper, defaultValues)
        .toString();
      const received =
        'https://api.sl.se/api/test.json?key=abc123&search=Solna&transportMode=TRAIN';
      expect(received).toEqual(expected);
    });
  });
});
