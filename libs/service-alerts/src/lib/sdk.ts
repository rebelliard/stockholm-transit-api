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
  ServiceAlertParameters,
  parametersMapper,
  ServiceAlertResponse,
} from './types';

/**
 * Initializes the SL service alerts app.
 */
export function init(config: StockholmBaseConfig): void {
  clientInit({
    name: appName,
    apiKey: config.apiKey,
    url: baseUrl,
  });
}

/**
 * Gets the SL service alerts app.
 */
export function getApp(): StockholmConfig {
  return getClientApp(appName);
}

/**
 * Constructs a URL object based on the specified app
 * and the specified parameters.
 */
export function getUrl(params: ServiceAlertParameters): URL {
  return getMappedUrl(appName, params, parametersMapper, defaultValues);
}

/**
 * SL Service alerts v2.0 (Fault information 2)
 *
 * @description
 * With this API you can get information about current
 * and planned disturbances in SL traffic. With the API,
 * you can ask questions about disturbances on, for example,
 * a certain line or a certain type of traffic. The answer
 * consists of disturbance messages with certain meta-information.
 *
 * To see the information returned by this API,
 * see https://api.sl.se/ta (this is a disruption information page
 * that is adapted to SL's internal needs and not intended for use
 * by travelers).
 *
 * @see https://www.trafiklab.se/api/trafiklab-apis/sl/service-alerts-2/
 *
 * Console:
 * @see https://developer.trafiklab.se/node/12605/console
 */
export async function query(
  params: ServiceAlertParameters
): Promise<ServiceAlertResponse | undefined> {
  const url = getUrl(params);
  const response = await fetch(url.toString());
  if (response.ok) {
    return (await response.json()) as Promise<ServiceAlertResponse>;
  }
  return;
}
