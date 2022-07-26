import { DateString, TransportMode } from '@stockholm-transit/shared';

export interface ServiceAlertParameters {
  /**
   * Current traffic types. Comma-separated string.
   */
  transportMode?:
    | `${TransportMode}`
    | `${TransportMode},${TransportMode}`
    | `${TransportMode},${TransportMode},${TransportMode}`;

  /**
   * Max 10 lines. Comma-separated string.
   */
  lineNumber?: string;

  /**
   * Id for searched stop area.
   */
  siteId: string;

  /**
   * Start date for the current validity period.
   */
  fromDate?: string;

  /**
   * End date for the current validity period.
   */
  toDate?: string;
}

export const parametersMapper: Record<keyof ServiceAlertParameters, string> = {
  /**
   * Current traffic types. Comma-separated string.
   */
  transportMode: 'transportMode',

  /**
   * Max 10 lines. Comma-separated string.
   */
  lineNumber: 'lineNumber',

  /**
   * Id for searched stop area.
   */
  siteId: 'siteId',

  /**
   * Start date for the current validity period.
   */
  fromDate: 'fromDate',

  /**
   * End date for the current validity period.
   */
  toDate: 'toDate',
} as const;

export interface ServiceAlertResult {
  /**
   * When the case was published.
   */
  Created: DateString;

  /**
   * Boolean indicating whether the case is a major news item.
   */
  MainNews: boolean;

  /**
   * Proposal for sorting of cases. This is returned as `1`.
   * - If you are looking for sorting by priority, this should
   * be taken from Deviation Raw data and found in the response
   * structure under priority.
   */
  SortOrder: 1;

  /**
   * 🇸🇪 Heading.
   *
   */
  Header: string;

  /**
   * 🇸🇪 Details, the same as presented on the website for resp. matter.
   */
  Details: string;

  /**
   * 🇸🇪 An alias for `ScopeElements`.
   */
  Scope: string;

  /**
   * Case ID.
   */
  DevCaseGid: number;

  /**
   * Indicates the current version of the case.
   */
  DevMessageVersionNumber: number;

  /**
   * 🇸🇪 Description of which lines or stops the case applies to.
   */
  ScopeElements: string;

  /**
   * When the case begins to be active.
   */
  FromDateTime: DateString;

  /**
   * When the case ceases to be active.
   */
  UpToDateTime: DateString;

  /**
   * The case was last updated.
   */
  Updated: DateString;
}

export interface ServiceAlertResponse {
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
  ResponseData: ServiceAlertResult[];
}
