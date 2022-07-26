import * as sdk from './sdk';
import { ServiceAlertParameters } from './types';

describe('sdk', () => {
  beforeAll(() => {
    sdk.init({ apiKey: 'abc123' });
  });

  describe('getApp', () => {
    it('should create the base URL', () => {
      const expected = sdk.getApp().url;
      const received = 'https://api.sl.se/api2/deviations.json';
      expect(received).toEqual(expected);
    });
  });

  describe('getUrl', () => {
    it('should create the request URL', () => {
      const params: ServiceAlertParameters = {
        siteId: '1111',
        transportMode: 'TRAM,SHIP',
        lineNumber: '1,2,3',
        fromDate: '2022-01-12T15:00:37.309Z',
        toDate: '2022-03-12T21:28:46.613Z',
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/deviations.json?key=abc123&siteId=1111&transportMode=TRAM%2CSHIP&lineNumber=1%2C2%2C3&fromDate=2022-01-12T15%3A00%3A37.309Z&toDate=2022-03-12T21%3A28%3A46.613Z';
      expect(received).toEqual(expected);
    });

    it('should create the request URL with partial parameters', () => {
      const params: ServiceAlertParameters = {
        siteId: '1111',
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/deviations.json?key=abc123&siteId=1111';
      expect(received).toEqual(expected);
    });
  });
});
