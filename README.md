# 🇸🇪 Stockholm Transit APIs 🚆

Storstockholms Lokaltrafiks (SL) APIs:

- [Location lookup](https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/)
- [Departures](https://www.trafiklab.se/api/trafiklab-apis/sl/departures-4/)
- [Service alerts](https://www.trafiklab.se/api/trafiklab-apis/sl/service-alerts-2/)

## Development server

Run `npm run start` for a dev API server:

- [http://localhost:3333/api/locations?q=T-Centralen](http://localhost:3333/api/locations?q=T-Centralen)
- [http://localhost:3333/api/departures?siteId=9001](http://localhost:3333/api/departures?siteId=9001)
- [http://localhost:3333/api/service-alerts?siteId=9001](http://localhost:3333/api/service-alerts?siteId=9001)

Expected environment variables:

- `STOCKHOLM_LOCATIONS_API_KEY`
- `STOCKHOLM_DEPARTURES_API_KEY`
- `STOCKHOLM_SERVICE_ALERTS_API_KEY`

## Publishing

See [guide](https://blog.nrwl.io/publishing-react-libraries-made-easy-d5b3d013deba#:~:text=Publishing%20to%20npm) on publishing an NX library to NPM.