/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as locations from '@stockholm-transit/locations';
import * as departures from '@stockholm-transit/departures';
import * as serviceAlerts from '@stockholm-transit/service-alerts';
import {
  LocationParameters,
  LocationParameterType,
} from '@stockholm-transit/locations';
import { DepartureParameters } from '@stockholm-transit/departures';
import { ServiceAlertParameters } from '@stockholm-transit/service-alerts';

const app = express();

locations.init({ apiKey: process.env.STOCKHOLM_LOCATIONS_API_KEY });
departures.init({ apiKey: process.env.STOCKHOLM_DEPARTURES_API_KEY });
serviceAlerts.init({ apiKey: process.env.STOCKHOLM_SERVICE_ALERTS_API_KEY });

app.get('/api/locations', (req, res) => {
  const params: LocationParameters = {
    q: req.query.q?.toString(),
    maxResults: isNaN(Number(req.query.maxResults))
      ? undefined
      : (Number(req.query.maxResults) as LocationParameters['maxResults']),
    type: req.query.type as LocationParameterType,
    stationsOnly: req.query.stationsOnly === 'true',
  };

  console.log(`- ${req.protocol}://${req.headers.host}${req.originalUrl}`);

  locations.query(params).then((data) => res.send(data));
});

app.get('/api/departures', (req, res) => {
  const params: DepartureParameters = {
    siteId: req.query.siteId?.toString(),
    timeWindow: isNaN(Number(req.query.timeWindow))
      ? undefined
      : (Number(req.query.timeWindow) as DepartureParameters['timeWindow']),
  };

  console.log(`- ${req.protocol}://${req.headers.host}${req.originalUrl}`);

  departures.query(params).then((data) => res.send(data));
});

app.get('/api/service-alerts', (req, res) => {
  const params: ServiceAlertParameters = {
    siteId: req.query.siteId?.toString(),
    lineNumber: req.query.lineNumber?.toString(),
    transportMode:
      req.query.transportMode?.toString() as ServiceAlertParameters['transportMode'],
    fromDate: req.query.fromDate?.toString(),
    toDate: req.query.fromDate?.toString(),
  };

  console.log(`- ${req.protocol}://${req.headers.host}${req.originalUrl}`);

  serviceAlerts.query(params).then((data) => res.send(data));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`\nListening at http://localhost:${port}/api`);
});
server.on('error', console.error);
