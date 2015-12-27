'use strict';

const _ = require('lodash');
const config = require('config');

/**
 * Will return function that require server as a parameter
 *
 * Usage:
 * ```javascript
 * const server = require('../../app');
 * const request = require('../helper/request')(server);
 *
 * //...
 * let.it('something', (done) => {
 *   request.call({
 *   	method: 'POST',
 *   	url: '/mail',
 *   	payload: {
 *   	  email: 'someemail@email.com'
 *   	}
 *   }).then((response) => {
 *     // ....
 *     expect(response.statusCode).to.equal(200);
 *     done();
 *   });
 * });
 * ```
 *
 * @param  {Hapi.Server} server
 * @return {Object}
 */
module.exports = function(server) {

  return {

    /**
     * Will send request to server
     *
     * List of options: {@link http://hapijs.com/api#serverinjectoptions-callback}
     *
     * @param  {Object} options
     * @return {Promise}
     */
    call: function(options) {
      if (!_.isObject(options)) {
        throw new Error('Wrong options provided');
      }
      if (!options.method) {
        options.method = 'GET';
      }
      if (options.url && !~options.url.indexOf(config.test.apiPrefix)) {
        options.url = config.test.apiPrefix + options.url;
      }
      return new Promise((resolve, reject) => {
        server.inject(options, (res) => {
          resolve(res);
        });
      });
    }
  };
};
