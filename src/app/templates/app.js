'use strict';

const Hapi = require('hapi');
const config = require('config');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: config.host || 'localhost',
  port: config.port
});

const goodOptions = config.get('good');

server.register({
  register: require('good'),
  options: goodOptions
}, (err) => {

  if (err) {
    console.error(err);
  }
});

server.register({
  register: require('./routes/v1/index')
}, {
  routes: {
    prefix: '/api/v1'
  }
}, (err) => {

  if (err) {
    throw err;
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
