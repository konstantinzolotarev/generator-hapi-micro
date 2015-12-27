'use strict';

module.exports = function(server, options) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world of microservices');
    }
  });
};
