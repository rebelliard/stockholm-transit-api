# @stockholm-transit/service-alerts

[Storstockholms Lokaltrafiks (SL) Service alerts v2.0](https://www.trafiklab.se/api/trafiklab-apis/sl/service-alerts-2/)
With this API you can get information about current and planned disturbances in SL traffic. With the API, you can ask questions about disturbances on, for example, a certain line or a certain type of traffic. The answer consists of disturbance messages with certain meta-information.

## Usage

```javascript
import * as serviceAlerts from '@stockholm-transit/service-alerts';
import { ServiceAlertParameters } from '@stockholm-transit/service-alerts';

serviceAlerts.init({ apiKey: process.env.STOCKHOLM_SERVICE_ALERTS_API_KEY });

const params: ServiceAlertParameters = { siteId: '9001' };
serviceAlerts.query(params).then((data) => res.send(data.ResponseData));
```

## Building

Run `nx build @stockholm-transit/service-alerts` to build the library.

## Running unit tests

Run `nx test @stockholm-transit/service-alerts` to execute the unit tests via [Jest](https://jestjs.io).