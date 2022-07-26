import * as sdk from './sdk';
import { LocationParameters } from './types';

describe('sdk', () => {
  beforeAll(() => {
    sdk.init({ apiKey: 'abc123' });
  });

  describe('getApp', () => {
    it('should create the base URL', () => {
      const expected = sdk.getApp().url;
      const received = 'https://api.sl.se/api2/typeahead.json';
      expect(received).toEqual(expected);
    });
  });

  describe('getUrl', () => {
    it('should create the request URL', () => {
      const params: LocationParameters = {
        q: 'Solna',
        stationsOnly: false,
        maxResults: 20,
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/typeahead.json?key=abc123&searchstring=Solna&maxresults=20&stationsonly=false';
      expect(received).toEqual(expected);
    });

    it('should create the request URL with partial parameters', () => {
      const params: LocationParameters = {
        q: 'Solna',
      };
      const expected = sdk.getUrl(params).toString();
      const received =
        'https://api.sl.se/api2/typeahead.json?key=abc123&searchstring=Solna&maxresults=10&stationsonly=true';
      expect(received).toEqual(expected);
    });
  });
});
