# RTD Ridership Dashboard

The RTD Ridership Dashboard is a project by [Greater Denver Transit](https://www.greaterdenvertransit.com/) to track changes in RTD service levels and ridership. It draws data from the following sources:

- The [MobilityData RTD GTFS feed archive](https://transitfeeds.com/p/rtd-denver/188)

The root of this repo is a Next.js webapp, but inside the `datagen/` directory is Python code to read and aggregate data from the sources mentioned above. That file updates `data.json`, which is bundled by Next.js into a static site that lives in the `docs/` directory. We host that static site on [recovery.transitmatters.org](https://recovery.transitmatters.org).

The computations on the ridership data and the GTFS feeds in particular can be very slow, so we cache intermediate results in the following directories:

```
datagen/gtfs/.data
datagen/ridership/.data
```

You can force some computations to re-run by selectively deleting files from these.

## Setup

To initialize a Python virtual environment and install Python and JavaScript dependencies, run:

```
make setup-env
```

_Some recent macOS environments will crash while installing NumPy here — if this happens to you, you can try rerunning the command as `SYSTEM_VERSION_COMPAT=1 make setup-env` per the solution [here](https://github.com/pypa/pipenv/issues/4576#issuecomment-751639556)._

There are more useful commands in both the `Makefile` and `package.json`.

## Secrets

The setup process creates a `datagen/secrets.py`. TransitMatters members have a `BOX_ACCESS_TOKEN` from a free [Box developer account](https://developer.box.com/guides/authentication/tokens/) which should be copied into this file. If you don't want to bother with this step, you can read cached ridership data from a specific date in by modifying `RIDERSHIP_TARGET_DATE` in `datagen/config.py`:

```py
RIDERSHIP_TARGET_DATE = date(2021, 8, 8)
```

This date must match one of the subdirectories in `datagen/ridership/.data`, e.g. `20210808`.

## Building and running the app

To run the webapp locally with the data present in `data.json`, run:

```
npm run dev
```

To rebuild `data.json` with the latest data, run:

```
make update-data
```

To build a production version of the site in `docs/`, run:

```
npm run build-static
```

To update `data.json`, rebuild the production site, _and_ make a Git commit of the changes, run:

```
npm run update
```

This is what we use to periodically update the production site.

## Support Greater Denver Transit

If you've found this app helpful or interesting, please consider joining [Greater Denver Transit](https://www.greaterdenvertransit.com/) to help support our mission to advocate for an efficient, reliable, safe, accessible and inclusive public transit system which delivers on the region’s mobility needs.