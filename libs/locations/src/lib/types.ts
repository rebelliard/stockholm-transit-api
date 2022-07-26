import { Range } from '@stockholm-transit/shared';

export type LocationParameterType =
  | 'S' // Search for stations only
  | 'P' // Search for only POI (points of interest)
  | 'A' // Search only for addresses
  | 'SP' // Search for stations and POI
  | 'SA' // Search only for stations and Addresses
  | 'AP' // Search only for addresses and POI
  | 'ALL'; // Search for addresses, stations and POI

export interface LocationParameters {
  /**
   * The search string. (Max 20 characters)
   */
  q: string;

  /**
   * If "True" only stops are returned. True = default.
   */
  stationsOnly?: boolean;

  /**
   * Maximum number of results desired.
   * - 10 is the default,
   * - You can not get more than 50.
   */
  maxResults?: Range<1, 51>;

  /**
   * Type filter for places.
   */
  type?: LocationParameterType;
}

export const parametersMapper: Record<keyof LocationParameters, string> = {
  /**
   * The search string. (Max 20 characters)
   */
  q: 'searchstring',

  /**
   * If "True" only stops are returned. True = default.
   */
  stationsOnly: 'stationsonly',

  /**
   * Maximum number of results desired.
   * - 10 is the default,
   * - You can not get more than 50.
   */
  maxResults: 'maxresults',

  /**
   * Type filter for places.
   */
  type: 'type',
} as const;

export type LocationResultType =
  | 'Station' // Search for stations only
  | 'Poi' // Search for only POI (points of interest)
  | 'Address'; // Search only for addresses

export interface LocationResult {
  /**
   * The name of the place.
   */
  Name: string;

  /**
   * Stop area ID.
   */
  SiteId: string;

  /**
   * Type of place.
   */
  Type: LocationResultType;

  /**
   * X-coordinate for placement.
   */
  X: string;

  /**
   * Y-coordinate for placement.
   */
  Y: string;

  /**
   * This field's is unknown and currently, always returns `null`.
   */
  Products: null;
}

export interface LocationResponse {
  /**
   * Contains status code for any message.
   */
  StatusCode: number;

  /**
   * Contains any call-related messages such as error messages.
   */
  Message: string | null;

  /**
   * Indicates how long (in ms) it took for the server to generate the response.
   */
  ExecutionTime: number;

  /**
   * Contains the actual response data from the service.
   */
  ResponseData: LocationResult[];
}
