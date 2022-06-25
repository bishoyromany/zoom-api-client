# Zoom API Client

NodeJS library for working with the Zoom API.

`zoom-api-client` provides server-side access to the [Zoom APIs](https://marketplace.zoom.us/docs/api-reference/introduction) via JWT access tokens. It's written completely in JS. Works on NodeJS version 8 and higher.

```js
npm i zoom-api-client
```

## Usage

```js
const { ZoomAPI } = require("zoom-api-client");

const client = ZoomAPI({
  apiKey: process.env.ZoomApiKey,
  apiSecret: process.env.ZoomApiSecret,
});
const users = await client.listUsers();
```

## API Progress

This library doesn't (yet) implement every API call. PRs are welcome and encouraged.

## Tests

None yet.

## Contributing

Pull requests are more than welcome! Please follow existing naming and style conventions, and correct any linting errors.

## License

MIT
