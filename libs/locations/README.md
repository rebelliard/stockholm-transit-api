# 🇸🇪 Storstockholms Lokaltrafiks (SL) Location lookup API 🚆

- With this API, you can get information about a place by submitting parts of the place name. You can choose to search only for stop areas or stops, addresses and locations.
- Trafiklab documentation is available [here](https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/).

## Usage

```javascript
import * as locations from '@stockholm-transit/locations';
import { LocationParameters } from '@stockholm-transit/locations';

locations.init({ apiKey: process.env.STOCKHOLM_LOCATIONS_API_KEY });

const params: LocationParameters = { q: 'Stockholm', maxResults: 10 };
locations.query(params).then((data) => res.send(data.ResponseData));
```

## Functions

### init

```javascript
(config: StockholmBaseConfig) => void
```

### query

```javascript
(params: DepartureParameters) => Promise<DepartureResponse | undefined>
```

## Types

### StockholmBaseConfig

| Parameter | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| apiKey    | string | true     | Trafiklab API key. |

- Read how to generate Trafiklab API keys [here](https://www.trafiklab.se/docs/using-trafiklab/getting-api-keys/).

### LocationParameters

| Parameter    | Type                                            | Required | Description                              | Default |
| ------------ | ----------------------------------------------- | -------- | ---------------------------------------- | ------- |
| q            | string                                          | true     | The search string. (Max. 20 characters). |         |
| stationsOnly | boolean                                         | false    | If `true` only stops are returned.       | `true`  |
| maxResults   | number                                          | false    | Maximum number of results from 0-50.     | `10`    |
| type         | [LocationParameterType](#LocationParameterType) | false    | Type filter for places.                  | `"ALL"` |

### LocationParameterType

- `"S"`: Search for stations only.
- `"P"`: Search for only POI (points of interest).
- `"A"`: Search only for addresses.
- `"SP"`: Search for stations and POI.
- `"SA"`: Search only for stations and Addresses.
- `"AP"`: Search only for addresses and POI.
- `"ALL"`: Search for addresses, stations and POI.

## Building

Run `npx nx build @stockholm-transit/locations` to build the library.

## Running unit tests

Run `npx nx test @stockholm-transit/locations` to execute the unit tests via [Jest](https://jestjs.io).

## Related APIs

- [Departures](https://www.npmjs.com/package/@stockholm-transit/departures)
- [Service alerts](https://www.npmjs.com/package/@stockholm-transit/service-alerts)
