import { LocationParameters } from './types';

/**
 * Locations API
 * @see https://developer.trafiklab.se/api/sl-platsuppslag
 */
export const baseUrl = '/api2/typeahead.json' as const;
export const appName = 'sl-locations' as const;
export const defaultValues: Partial<LocationParameters> = {
  q: '',
  maxResults: 10,
  stationsOnly: true,
} as const;
