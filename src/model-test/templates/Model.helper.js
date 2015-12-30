'use strict';

const <%= name %> = require('../../../models/<%= name %>');
const chance = new require('chance')();

module.exports = {

  /**
   * Clear all records from DB
   * @return {Promise}
   */
  clear: function () {
    return <%= name %>.remove({}).exec();
  },

  /**
   * Generate an object with random values based on model
   * @return {Object}
   */
  random: function () {
    return {

    };
  },

  /**
   * Will create a new User record
   * @return {Promise}
   */
  createRandom: function () {
    const model = new <%= name %>(this.random());
    return model.save();
  }
};
