# 🇸🇪 Storstockholms Lokaltrafiks (SL) Departures 🚆

- With this API, you can get real-time information regarding bus, metro, commuter train and local train.
- Trafiklab documentation is available [here](https://www.trafiklab.se/api/trafiklab-apis/sl/departures-4/).

## Usage

```javascript
import * as departures from '@stockholm-transit/departures';
import { DepartureParameters } from '@stockholm-transit/departures';

departures.init({ apiKey: process.env.STOCKHOLM_DEPARTURES_API_KEY });

const params: DepartureParameters = { siteId: '9001' };
departures.query(params).then((data) => res.send(data.ResponseData));
```

## Types

### DepartureParameters

| Parameter  | Type    | Required | Description                                        | Default |
| ---------- | ------- | -------- | -------------------------------------------------- | ------- |
| siteId     | string  | true     | Unique identification number for the place.        |         |
| timeWindow | boolean | false    | Pick up departures within the desired time window. | `60`    |

## Building

Run `npx nx build @stockholm-transit/departures` to build the library.

## Running unit tests

Run `npx nx test @stockholm-transit/departures` to execute the unit tests via [Jest](https://jestjs.io).

## Related APIs

- [Location lookup](https://www.npmjs.com/package/@stockholm-transit/locations)
- [Service alerts](https://www.npmjs.com/package/@stockholm-transit/service-alerts)
