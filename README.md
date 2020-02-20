# Choose Port

Choose an available port

[![npm version](https://badge.fury.io/js/choose-port.svg)](https://www.npmjs.com/package/choose-port) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/choose-port/blob/master/LICENSE) [![Build Status](https://travis-ci.com/andrelmlins/choose-port.svg?branch=master)](https://travis-ci.com/andrelmlins/choose-port) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/choose-port.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/choose-port/context:javascript)

## Install

```
npm install choose-port
```

or

```
yarn add choose-port
```

## Usage

```js
const choosePort = require("choose-port");

choosePort(8000, "127.0.0.1", port => {
  console.log(port);
});
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/choose-port.png)](https://nodei.co/npm/choose-port/)

## License

Choose Port is open source software [licensed as MIT](https://github.com/andrelmlins/choose-port/blob/master/LICENSE).
