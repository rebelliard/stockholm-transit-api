# @stockholm-transit/departures

[Storstockholms Lokaltrafiks (SL) Departures v4.0](https://www.trafiklab.se/api/trafiklab-apis/sl/departures-4/):

- With this API, you can get real-time information regarding bus, metro, commuter train and local train.

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
