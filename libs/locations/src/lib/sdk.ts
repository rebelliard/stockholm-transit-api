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
  LocationParameters,
  LocationResponse,
  parametersMapper,
} from './types';

/**
 * Initializes the SL locations app.
 */
export function init(config: StockholmBaseConfig): void {
  clientInit({
    name: appName,
    apiKey: config.apiKey,
    url: baseUrl,
  });
}

/**
 * Gets the SL locations app.
 */
export function getApp(): StockholmConfig {
  return getClientApp(appName);
}

/**
 * Constructs a URL object based on the specified app
 * and the specified parameters.
 */
export function getUrl(params: LocationParameters): URL {
  return getMappedUrl(appName, params, parametersMapper, defaultValues);
}

/**
 * SL Location lookup v1.0
 *
 * @description
 * With this API, you can get information about a place by
 * submitting parts of the place name. You can choose to
 * search only for stop areas or stops, addresses and locations.
 *
 *
 * @see https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/
 *
 * Console:
 * @see https://developer.trafiklab.se/api/sl-platsuppslag/konsol
 */
export async function query(
  params: LocationParameters
): Promise<LocationResponse | undefined> {
  const url = getUrl({
    ...params,
    q: params.q?.substring(0, 20),
  });
  const response = await fetch(url.toString());
  if (response.ok) {
    return (await response.json()) as Promise<LocationResponse>;
  }
  return;
}
