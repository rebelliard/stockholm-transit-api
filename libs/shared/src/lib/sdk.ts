import { baseUrl } from './constants';
import { StockholmConfig } from './types';
import { removeEmptyKeys } from './utils';

const apps = new Map<string, StockholmConfig>();

/**
 * Initializes an app.
 */
export function init(config: StockholmConfig): void {
  const url = new URL(config.url, baseUrl).toString();
  const updatedConfig = { ...config, url };
  apps.set(config.name, updatedConfig);
}

/**
 * Removes all initiated apps.
 */
export function clear() {
  apps.clear();
}

/**
 * Gets an initialized app.
 */
export function getApp(name: string): StockholmConfig {
  const app = apps.get(name);
  if (!app) {
    throw `No app named: ${name}`;
  }

  return app;
}

/**
 * Constructs a URL object based on the specified app
 * and the specified parameters.
 */
export function getUrl(
  appName: string,
  params: Record<string, string | number | boolean>
): URL {
  const app = getApp(appName);
  const url = new URL(app.url);

  url.searchParams.set('key', app.apiKey);
  Object.keys(params).forEach(function (name) {
    const value = params[name];

    if (value !== undefined) {
      url.searchParams.set(name, value.toString());
    }
  });

  return url;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMappedUrl<T extends Record<string, any>>(
  appName: string,
  params: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapper: Record<string, any>,
  defaultValues: Partial<T>
): URL {
  removeEmptyKeys(params);
  const mergedParams = { ...defaultValues, ...params };
  const mappedParams = Object.keys(mergedParams).reduce(function (acc, param) {
    const name = mapper[param];
    const value = mergedParams[param];

    if (value !== undefined) {
      acc[name] = value;
    }

    return acc;
  }, {} as Record<string, string | number | boolean>);

  return getUrl(appName, mappedParams);
}
