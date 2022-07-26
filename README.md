# 🇸🇪 Stockholm Transit APIs 🚆

Storstockholms Lokaltrafiks (SL) APIs:

- [Location lookup](https://www.npmjs.com/package/@stockholm-transit/locations)
- [Departures](https://www.npmjs.com/package/@stockholm-transit/departures)
- [Service alerts](https://www.npmjs.com/package/@stockholm-transit/service-alerts)

## Development server

Run `npm run start` for a dev API server:

- [http://localhost:3333/api/locations?q=T-Centralen](http://localhost:3333/api/locations?q=T-Centralen)
- [http://localhost:3333/api/departures?siteId=9001](http://localhost:3333/api/departures?siteId=9001)
- [http://localhost:3333/api/service-alerts?siteId=9001](http://localhost:3333/api/service-alerts?siteId=9001)

Expected environment variables:

- `STOCKHOLM_LOCATIONS_API_KEY`
- `STOCKHOLM_DEPARTURES_API_KEY`
- `STOCKHOLM_SERVICE_ALERTS_API_KEY`

An example API server is available [here](https://github.com/rebelliard/stockholm-transit-api/blob/main/apps/example-api/src/main.ts)

## Publishing

A guide on publishing an NX library to NPM is available [here](https://blog.nrwl.io/publishing-react-libraries-made-easy-d5b3d013deba#:~:text=Publishing%20to%20npm).
