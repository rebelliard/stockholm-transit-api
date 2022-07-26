export interface StockholmBaseConfig {
  apiKey: string;
}

export interface StockholmConfig extends StockholmBaseConfig {
  name: string;
  url: string;
}

export type TransportMode =
  | 'BUS'
  | 'METRO' // Tunnelbana
  | 'TRAIN' // Pendeltåg
  | 'TRAM'
  | 'SHIP';

type YYYY = `${number}${number}${number}${number}`;
type MM = `${number}${number}`;
type DD = `${number}${number}`;
type HH = `${number}${number}`;
type mm = `${number}${number}`;
type ss = `${number}${number}`;

/**
 * Date string
 * @example "2022-07-16T23:38:15"
 */
export type DateString = `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}`;
