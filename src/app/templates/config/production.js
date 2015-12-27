'use strict';
/* jshint maxlen: false */
module.exports = {

  // System port
  port: 3000,

  // Good is hapi logger
  good: {
    opsInterval: 60000,
    requestHeaders: true,
    requestPayload: true,
    responsePayload: true,
    responseEvent: 'response',
    reporters: [
      {
        reporter: require('good-console'),
        events: {
          log: '*',
          response: '*',
          ops: '*',
          error: '*',
          request: '*'
        }
      },
      {
        reporter: require('good-file'),
        events: {
          log: '*',
          response: '*',
          ops: '*',
          error: '*',
          request: '*'
        },
        config: {
          path: 'logs',
          rotate: 'weekly'
        }
      }]
  }

};
