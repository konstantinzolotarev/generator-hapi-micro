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
    reporters: [{
      reporter: require('good-console'),
      events: {
        log: '*',
        response: '*',
        ops: '*',
        error: '*',
        request: '*'
      }
    }]
  },

  /**
   * List of configuration for connections (DB)
   */
  connections: {

    mongo: {
      host: process.env.PWI_MONGODB_PORT_27017_TCP_ADDR || 'localhost',
      port: process.env.PWI_MONGODB_PORT_27017_TCP_PORT || 27017,
      database: process.env.PWI_MONGODB_PORT_27017_TCP_DATABASE || 'user_service',

      options: {}
    }
  }

};
