'use strict';

const mongoose = require('mongoose');
const connection = require('../connection/mongoDefault');

const <%= name %>Schema = new mongoose.Schema({

}, {
  timestamps: true,

  versionKey: false,

  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

module.exports = connection.model('<%= name %>', <%= name %>Schema);
