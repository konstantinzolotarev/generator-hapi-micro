'use strict';

module.exports = {

  // System port
  port: 1337,

  // Disable logging
  good: {
    reporters: []
  },

  // Only for testing !!!
  test: {
    apiPrefix: '/api/v1'
  },

  /**
   * List of configuration for connections (DB)
   */
  connections: {

    mongo: {
      host: process.env.PWI_MONGODB_PORT_27017_TCP_ADDR || 'localhost',
      port: process.env.PWI_MONGODB_PORT_27017_TCP_PORT || 27017,
      database: process.env.PWI_MONGODB_PORT_27017_TCP_DATABASE || 'user_service_test',

      options: {}
    }
  }

};
