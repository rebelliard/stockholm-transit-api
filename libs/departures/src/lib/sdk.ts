import {
  getApp as getClientApp,
  getMappedUrl,
  init as clientInit,
  StockholmBaseConfig,
  StockholmConfig,
} from '@stockholm-transit/shared';
import fetch from 'node-fetch';
import { appName, baseUrl, defaultValues } from './constants';
import {
  DepartureParameters,
  DepartureResponse,
  parametersMapper,
} from './types';

/**
 * Initializes the SL departures app.
 */
export function init(config: StockholmBaseConfig): void {
  clientInit({
    name: appName,
    apiKey: config.apiKey,
    url: baseUrl,
  });
}

/**
 * Gets the SL departures app.
 */
export function getApp(): StockholmConfig {
  return getClientApp(appName);
}

/**
 * Constructs a URL object based on the specified app
 * and the specified parameters.
 */
export function getUrl(params: DepartureParameters): URL {
  return getMappedUrl(appName, params, parametersMapper, defaultValues);
}

/**
 * SL Departures v4.0 (Real-time information 4)
 *
 * @description
 * Real-time information regarding bus, metro, commuter train and local train.
 *
 * @see https://www.trafiklab.se/api/trafiklab-apis/sl/departures-4/
 *
 * Console:
 * @see https://developer.trafiklab.se/node/15754/console
 */
export async function query(
  params: DepartureParameters
): Promise<DepartureResponse | undefined> {
  const url = getUrl(params);
  const response = await fetch(url.toString());
  if (response.ok) {
    return (await response.json()) as Promise<DepartureResponse>;
  }
  return;
}
