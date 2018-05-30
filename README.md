# Test for "already piped" errors in js-libp2p-switch

This app just starts up an js-ipfs node, and lets it idle.
After 3mins, "already piped" errors start to show up in the console.

- Issue: https://github.com/libp2p/js-libp2p-switch/issues/235
- PR: https://github.com/libp2p/js-libp2p-switch/pull/262

## Usage

With `node@8` and `yarn@1.6.0`

```
yarn
yarn start
```

Add the following debug config to your localStorage to see the logging.

```js
localStorage.setItem('debug', 'libp2p:switch:dial')
```

You can try it out with the PR branch by adding the following to the package.json

```json
"resolutions": {
  "libp2p-switch": "libp2p/js-libp2p-switch#fix/already-piped"
},
```

then clear out your node_modules dir, re-install, and restart

```
rm -rf node_modules
yarn
yarn start
```

The app should now run without errors. I've left it going to 50mins and no errors so far. Hurray.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

