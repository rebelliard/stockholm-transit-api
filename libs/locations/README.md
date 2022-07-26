# @stockholm-transit/locations

[Storstockholms Lokaltrafiks (SL) Location lookup v1.0](https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/):

- With this API, you can get information about a place by submitting parts of the place name. You can choose to search only for stop areas or stops, addresses and locations.

## Usage

```javascript
import * as locations from '@stockholm-transit/locations';
import { LocationParameters } from '@stockholm-transit/locations';

locations.init({ apiKey: process.env.STOCKHOLM_LOCATIONS_API_KEY });

const params: LocationParameters = { q: 'Stockholm', maxResults: 10 };
locations.query(params).then((data) => res.send(data.ResponseData));
```

## Types

### LocationParameters

| Parameter    | Type                                            | Required | Description                              | Default |
| ------------ | ----------------------------------------------- | -------- | ---------------------------------------- | ------- |
| q            | string                                          | true     | The search string. (Max. 20 characters). |         |
| stationsOnly | boolean                                         | false    | If `true` only stops are returned.       | `true`  |
| maxResults   | number                                          | false    | Maximum number of results from 0-50.     | `10`    |
| type         | [LocationParameterType](#LocationParameterType) | false    | Type filter for places.                  | `"ALL"` |

### LocationParameterType

- `"S"`: Search for stations only
- `"P"`: Search for only POI (points of interest)
- `"A"`: Search only for addresses
- `"SP"`: Search for stations and POI
- `"SA"`: Search only for stations and Addresses
- `"AP"`: Search only for addresses and POI
- `"ALL"`: Search for addresses, stations and POI

## Building

Run `npx nx build @stockholm-transit/locations` to build the library.

## Running unit tests

Run `npx nx test @stockholm-transit/locations` to execute the unit tests via [Jest](https://jestjs.io).
