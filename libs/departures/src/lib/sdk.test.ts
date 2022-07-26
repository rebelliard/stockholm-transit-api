import * as sdk from './sdk';
import { DepartureParameters } from './types';

describe('sdk', () => {
  beforeAll(() => {
    sdk.init({ apiKey: 'abc123' });
  });

  describe('getApp', () => {
    it('should create the base URL', () => {
      const expected = sdk.getApp().url;
      const received = 'https://api.sl.se/api2/realtimedeparturesv4.json';
      expect(received).toEqual(expected);
    });
  });

  describe('getUrl', () => {
    it('should create the request URL', () => {
      const params: DepartureParameters = {
        siteId: '1111',
        timeWindow: 60,
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/realtimedeparturesv4.json?key=abc123&timewindow=60&siteid=1111';
      expect(received).toEqual(expected);
    });

    it('should create the request URL with partial parameters', () => {
      const params: DepartureParameters = {
        siteId: '1111',
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/realtimedeparturesv4.json?key=abc123&timewindow=30&siteid=1111';
      expect(received).toEqual(expected);
    });
  });
});
