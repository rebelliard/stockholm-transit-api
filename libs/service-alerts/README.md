# 🇸🇪 Storstockholms Lokaltrafiks (SL) Service alerts API 🚆

- With this API, you can get information about current and planned disturbances in SL traffic. With the API, you can ask questions about disturbances on, for example, a certain line or a certain type of traffic. The answer consists of disturbance messages with certain meta-information.
- Trafiklab documentation is available [here](https://www.trafiklab.se/api/trafiklab-apis/sl/service-alerts-2/).

## Usage

```javascript
import * as serviceAlerts from '@stockholm-transit/service-alerts';
import { ServiceAlertParameters } from '@stockholm-transit/service-alerts';

serviceAlerts.init({ apiKey: process.env.STOCKHOLM_SERVICE_ALERTS_API_KEY });

const params: ServiceAlertParameters = { siteId: '9001' };
serviceAlerts.query(params).then((data) => res.send(data));
```

## Functions

### init

```javascript
(config: StockholmBaseConfig) => void
```

### query

```javascript
(params: ServiceAlertParameters) => Promise<ServiceAlertResponse | undefined>
```

## Types

### StockholmBaseConfig

| Parameter | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| apiKey    | string | true     | Trafiklab API key. |

- Read how to generate Trafiklab API keys [here](https://www.trafiklab.se/docs/using-trafiklab/getting-api-keys/).

### ServiceAlertParameters

| Parameter     | Type                            | Required | Description                                    | Default |
| ------------- | ------------------------------- | -------- | ---------------------------------------------- | ------- |
| transportMode | [TransportMode](#TransportMode) | false    | Current traffic types. Comma-separated string. |         |
| lineNumber    | string                          | false    | Max 10 lines. Comma-separated string.          |         |
| siteId        | string                          | true     | Unique identification number for the place.    |         |
| fromDate      | string                          | false    | Start date for the current validity period.    |         |
| toDate        | string                          | false    | End date for the current validity period.      |         |

### TransportMode

- `"BUS"`
- `"METRO"` (Tunnelbana)
- `"TRAIN"` (Pendeltåg)
- `"TRAM"`
- `"SHIP"`

## Building

Run `npx nx build @stockholm-transit/service-alerts` to build the library.

## Running unit tests

Run `npx nx test @stockholm-transit/service-alerts` to execute the unit tests via [Jest](https://jestjs.io).

## Related APIs

- [Location lookup](https://www.npmjs.com/package/@stockholm-transit/locations)
- [Service alerts](https://www.npmjs.com/package/@stockholm-transit/service-alerts)
