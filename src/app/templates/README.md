# Hapi Service
Service wrapped into [Docker](docker.com) container and distributed as a separate container.

## REQUIRED NODE.JS VERSION >= 4.1.0 !!!

## Requirements

This service requires `mongodb` connection and it provided using `mongodb` Docker container.

## Code style
By default all microservices will use `Node.js v4+` so most of `ES6` features will be supported out of the box.
List of supported features could be found here: [List of features](https://nodejs.org/en/docs/es6/)

Please follow this features and use it.
Use Arrow functions except of basic callbacks. And use `const`, `let` statements except of `var`.

**Remember**
All `.js` files will have to be started with `'use strict';`.
Most of features are available only in this mode !

## Development

Prerequirements:

- Docker v 1.8.3+
- docker-compose
- Running docker-machine
- node.js v4.2.2
- npm v 2.14.4+

To run local service container you have to follow this steps:

1. Install node dependencies

Use command `npm install` in current folder

1. Run docker-compose

Run command `docker-compose up -d` in current folder.

Open [http://localhost:3000](http://localhost:3000) on Linux machine and `http://${DOCKER_VM_IP}:3000` on Mac/Windows.

**Mac/Windows note**
To find out your `${DOCKER_VM_IP}` on MacOS/Windows use this command: `docker-machine ip default` (By default it `192.168.99.100`)

## Configuration

Service using `node-config` as configuration library.
Most of connection configurations done using ENV variables. To easier deployment and reconfigure process.

All configuration files are located into `config` folder.

**Create local configuration**
If you don't want to read all about `node-config`. You could create a file named `local.js` in config folder **Remember not to commit it to GIT**.
There you could overwrite all configuration options you need.

**Do not overwrite `config/default.js` file ! Use your own configuration file !**

### Environment configuration
`node-config` supports env config files like: `config/production.js`, `config/test.js`, `config/development.js`.
**And it's local copies**

To create env config you will have to create a file : `config/local-{ENV}.EXT`.
Where `{ENV}` - is your environment. Like: `config/local-production.js`, `config/local-development.js`

All files starting with `local` will be ignored by GIT.

**Please do not change current `production.js`, `development.js`, `test.js`**

More information about configuration process: [Configuration files](https://github.com/lorenwest/node-config/wiki/Configuration-Files)

### Configure MongoDB connection:

MongoDB configuration variables:

- `MONGODB` - Full MongoDB connection URL
- `DATABASE_1_PORT_27017_TCP_ADDR` - MongoDB host
- `DATABASE_1_PORT_27017_TCP_PORT` - MongoDB port
- `MONGODB_DATABASE` - MongoDB database name

Example:
```javascript
var dbUrl = process.env.MONGODB || 'mongodb://' + (process.env.DATABASE_1_PORT_27017_TCP_ADDR || 'localhost') + ':' + (process.env.DATABASE_1_PORT_27017_TCP_PORT || '27017') + process.env.MONGODB_DATABASE'/test',
```

## Tests

Application uses this libraries for testing:

- [Code](https://github.com/hapijs/code) - BDD assertion library
- [Lab](https://github.com/hapijs/lab) - Node test utility

### Run tests

** All tests**
To run tests use this command:
```bash
npm test
```

**Smoke tests**
To run only smoke tests user this command:
```bash
npm run smoke-test
```

**Run single test file**

- Install `lab` globally using command: `npm install -g lab`
- Run test file: `lab path/to/file.test.js`

Be sure that you didn't forget to require server and start it. And then stop it.

## Writing tests

Please keep all your tests isolated.
No need to relay on other test file if it's not required by scenario.

Every test file should start server on it's start and stop it after execution.

Sample:

```javascript
'use strict';

const expect = require('code').expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const server = require('../app'); // Will start server

lab.describe('Tests should be initialized', () => {

  // Will stop server after tests
  lab.after((done) => {
    server.stop(done);
  });

  lab.it('Should be run', (done) => {
    expect(true).to.be.true;
    done();
  });

  lab.it('Server should be defined', (done) => {
    expect(server).to.exist();
    expect(server.stop).to.be.a.function();
    done();
  });
});

```

Every `lab.it` will require `done` as argument and `done` should be called after test execution.

Example:
```javascript

// ...
lab.it('Should do something', (done) => {
  // Some logic
  done(); // Have to be called !!!!
});
// ...
```

### Integration tests and requests to server
Please right now there is not everything is ready. So please look into existing tests

### Tests folder structure

### Naming

### Helper files

## Server responses
For generating server responses servers uses [Boom](https://github.com/hapijs/boom) library.

Please use it for all RESTful errors
