import { DepartureParameters } from './types';

/**
 * Departures API
 * @see https://developer.trafiklab.se/node/15754/console
 */
export const baseUrl = '/api2/realtimedeparturesv4.json' as const;
export const appName = 'sl-departures' as const;
export const defaultValues: Partial<DepartureParameters> = {
  timeWindow: 30,
} as const;
