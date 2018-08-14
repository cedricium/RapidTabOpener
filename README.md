# <img src="extension/public/icons/icon.png" width="36" align="left"> RapidTabOpener

> RapidTabOpener is a browser extension which enables the ability to open as many URLs as one wants in a single click of a button. Gone are the days of needing to take 10 minutes opening tabs and typing the same URLs everyday - with RapidTabOpener, one simply needs to select the group of tabs they want to open. Minutes of lost productivity cut down to a split second; RapidTabOpener will have you managing your browser sessions like a boss.

## Installing
Before installing, you will need:
- `node` version >= 8
- `npm`
- `git`

Once you have those installed:

```shell
# Clone this repository
$ git clone https://github.com/cedricium/RapidTabOpener

# Go into the extension repository
$ cd RapidTabOpener/extension

# Install the dependencies
$ npm install
```

## Building
To build the extension for use in the browser, use the `build` script:

```shell
$ npm run build
```

This will create a `dist/` directory which contains all the necessary code bundled for a browser environment.

## Developing
Once you have the extension built, you're ready to begin testing. Use the `start` script to have the extension loaded in the browser (currently only Firefox supported):

```shell
$ npm start
```

`npm start` builds the extension then uses the `web-ext` CLI tool to load the `dist/` directory in Firefox. Any changes made while `npm start` is running will cause the extension to be live reloaded, making development a tad easier.

## Contributing
Your contributions are always welcome! See an issue you want to tackle or have an idea for a feature you'd like implemented? Just open a pull-request with a short explanation of the changes and I'd be happy to review it.

To get started:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

> Note: Be sure to merge the latest from "upstream" before making a pull request!
