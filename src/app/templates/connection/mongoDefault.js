'use strict';

const Mongoose = require('mongoose');
const config = require('config');

/**
 * Set native Node.js promise library
 * Please note that only Node.js v 4.2.2+ Has all this features !
 * Do not use system on other node.js
 */
Mongoose.Promise = global.Promise;

const mongoConfig = config.get('connections.mongo');
let connection = null;

if (mongoConfig) {
  connection = Mongoose.createConnection(mongoConfig.host,
    mongoConfig.database, mongoConfig.port);

  console.log('MongoDB connected to ' + mongoConfig.host + ':' + mongoConfig.port + ' database ' +
    mongoConfig.database);
}

module.exports = connection;
