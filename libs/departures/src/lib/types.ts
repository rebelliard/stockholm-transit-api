import { DateString, Range, TransportMode } from '@stockholm-transit/shared';

export interface DepartureParameters {
  /**
   * Unique identification number for the place for which current
   * departures are to be picked up, e.g. 9192 for Slussen.
   * This ID is available from the SL Location Search service.
   *
   * @see https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/
   */
  siteId: string;

  /**
   * Pick up departures within the desired time window.
   * Where the time window is the number of minutes from now.
   * - Max 60.
   */
  timeWindow?: Range<0, 61>;
}

export const parametersMapper: Record<keyof DepartureParameters, string> = {
  /**
   * Unique identification number for the place for which current
   * departures are to be picked up, e.g. 9192 for Slussen.
   * This ID is available from the SL Location Search service.
   *
   * @see https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/
   */
  siteId: 'siteid',

  /**
   * Pick up departures within the desired time window.
   * Where the time window is the number of minutes from now.
   * - Max 60.
   */
  timeWindow: 'timewindow',
} as const;

export interface Deviation {
  /**
   * Impact assessment for current deviation.
   */
  Consequence: string | null;

  /**
   * Significance level for current deviation.
   * - 0-9 where 9 is most serious.
   */
  ImportanceLevel: Range<0, 10>;

  /**
   * Description of current deviation.
   */
  Text: string;
}

export interface StopInfo {
  /**
   * If TransportMode is `"TRAM"`, the node contains one of the following values:
   * - "Lidingöbanan", "Nockebybanan", "Roslagsbanan", "Saltsjöbanan",
   *   "Spårväg City", "Tvärbanan", otherwise blank (subject to change).
   */
  GroupOfLine: 'string' | null;

  /**
   * Name of the stop to which the deviation applies.
   */
  StopAreaName: string;

  /**
   * Id for the stop to which the deviation applies.
   * - Is zero if TransportMode is not `"BUS"`.
   */
  StopAreaNumber: number;

  /**
   * Traffic types.
   */
  TransportMode: TransportMode;
}

export interface StopPointDeviation {
  /**
   * Stop info.
   */
  StopInfo: StopInfo;

  /**
   * Deviation.
   * - May be empty.
   */
  Deviation: Deviation | null;
}

export interface DepartureResult {
  /**
   * - For 'BUS': Indicates if it is a blue bus. If it is a blue bus it says "blue bus", otherwise the element is `null` (json).
   * - For 'TRAIN': Line group, e.g. “Tvärbanan” or “Roslagsbanan”.
   * - For 'METRO': Line grouping. Red / green / blue line.
   * - For 'SHIP': Indicates whether it is a commuter boat or Waxholmsbolaget.
   */
  GroupOfLine: 'string' | null;

  /**
   * Departure time for presentation. Can assume the formats:
   * - x min
   * - HH: mm
   * - Nu
   *
   * If there is an associated disturbance with a sufficiently high priority, this can have the value "-". This until a few minutes before departure.
   */
  DisplayTime: string;

  /**
   * Traffic types.
   */
  TransportMode: TransportMode;

  /**
   * Line designation / number.
   */
  LineNumber: string;

  /**
   * Name of the line's end stop.
   */
  Destination: string;

  /**
   * Travel direction ID. 0 at unknown direction, otherwise 1 or 2.
   */
  JourneyDirection: 0 | 1 | 2;

  /**
   * Stop name.
   */
  StopAreaName: string;

  /**
   * Stop name.
   * Subway before crossing: 0
   */
  StopAreaNumber: number;

  /**
   * Id for current stop.
   * Subway before crossing: 0
   */
  StopPointNumber: number;

  /**
   * Additional identifiers for stops, e.g. letter for bus shelter or track for commuter trains.
   */
  StopPointDesignation: string;

  /**
   * Departure time according to schedule.
   */
  TimeTabledDateTime: DateString;

  /**
   * Expected departure time. If there is an associated disturbance with a sufficiently
   * high priority, this can have zero / empty value. This until a few minutes before
   * departure.
   */
  ExpectedDateTime: DateString | null;

  /**
   * Turn number for the departure.
   */
  JourneyNumber: number;

  /**
   * Contains the type "Deviation" below.
   * This can be empty, or contain 1 to several deviations.
   */
  Deviations: Deviation[] | null;
}

export interface DepartureResponse {
  /**
   * Contains status code for any message.
   */
  StatusCode: number;

  /**
   * Contains any call-related messages such as error messages. See "Error Messages" below.
   */
  Message: string | null;

  /**
   * Indicates how long (in ms) it took for the server to generate the response.
   */
  ExecutionTime: number;

  /**
   * Contains the actual response data from the service.
   */
  ResponseData: {
    /**
     * Indicates when the real-time information (DPS) was last updated.
     */
    LatestUpdate: string;

    /**
     * Number of seconds since the TimeUpdate timestamp.
     */
    DataAge: number;

    /**
     * List of all bus departures for a given siteId.
     */
    Buses: DepartureResult[];

    /**
     * List of all metro departures for a given siteId.
     */
    Metros: DepartureResult[];

    /**
     * List of all train departures for a given siteId.
     */
    Trains: DepartureResult[];

    /**
     * List of all tram departures for a given siteId.
     */
    Trams: DepartureResult[];

    /**
     * List of all ship departures for a given siteId.
     */
    Ships: DepartureResult[];

    /**
     * List of stop area-specific deviations / disturbances,
     * ie disturbances that are not linked to a specific departure.
     */
    StopPointDeviations: StopPointDeviation[];
  };
}
