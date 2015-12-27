'use strict';

exports.register = function (server, options, next) {
  require('./test')(server, options);
  next();
};

exports.register.attributes = {
  name: 'api-v1',
  version: '1.0.0'
};
