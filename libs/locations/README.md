# @stockholm-transit/locations

[Storstockholms Lokaltrafiks (SL) Location lookup v1.0](https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/)
With this API, you can get information about a place by submitting parts of the place name. You can choose to search only for stop areas or stops, addresses and locations.

## Usage

```javascript
import * as locations from '@stockholm-transit/locations';
import { LocationParameters } from '@stockholm-transit/locations';

locations.init({ apiKey: process.env.STOCKHOLM_LOCATIONS_API_KEY });

const params: LocationParameters = { q: 'Stockholm', maxResults: 10 };
locations.query(params).then((data) => res.send(data.ResponseData));
```

## Building

Run `nx build @stockholm-transit/locations` to build the library.

## Running unit tests

Run `nx test @stockholm-transit/locations` to execute the unit tests via [Jest](https://jestjs.io).
