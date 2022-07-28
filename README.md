# 🇸🇪 Stockholm Transit APIs 🚆

[![CI](https://github.com/rebelliard/stockholm-transit-api/actions/workflows/ci.yml/badge.svg)](https://github.com/rebelliard/stockholm-transit-api/actions/workflows/ci.yml)

Storstockholms Lokaltrafiks (SL) APIs:

- [Location lookup](https://www.npmjs.com/package/@stockholm-transit/locations)
- [Departures](https://www.npmjs.com/package/@stockholm-transit/departures)
- [Service alerts](https://www.npmjs.com/package/@stockholm-transit/service-alerts)

## Development server

Run `npm run start` for an [example API server](https://github.com/rebelliard/stockholm-transit-api/blob/main/apps/example-api/src/main.ts):

- [http://localhost:3333/api/locations?q=T-Centralen](http://localhost:3333/api/locations?q=T-Centralen)
- [http://localhost:3333/api/departures?siteId=9001](http://localhost:3333/api/departures?siteId=9001)
- [http://localhost:3333/api/service-alerts?siteId=9001](http://localhost:3333/api/service-alerts?siteId=9001)

Expected environment variables:

- `STOCKHOLM_LOCATIONS_API_KEY`
- `STOCKHOLM_DEPARTURES_API_KEY`
- `STOCKHOLM_SERVICE_ALERTS_API_KEY`

Read how to generate Trafiklab API keys [here](https://www.trafiklab.se/docs/using-trafiklab/getting-api-keys/).

## Publishing

A guide on publishing an NX library to NPM is available [here](https://blog.nrwl.io/publishing-react-libraries-made-easy-d5b3d013deba#:~:text=Publishing%20to%20npm).
