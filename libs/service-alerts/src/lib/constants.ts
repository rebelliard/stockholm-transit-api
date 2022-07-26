import { ServiceAlertParameters } from './types';

/**
 * Service alerts API
 * @see https://www.trafiklab.se/api/trafiklab-apis/sl/service-alerts-2/
 */
export const baseUrl = '/api2/deviations.json' as const;
export const appName = 'sl-service-alerts' as const;
export const defaultValues: Partial<ServiceAlertParameters> = {} as const;
