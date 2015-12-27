'use strict';

const expect = require('code').expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const server = require('../app');

lab.describe('Tests should be initialized', () => {

  lab.after((done) => {
    server.stop(done);
  });

  lab.it('Should be run', (done) => {
    expect(true).to.be.true;
    done();
  });

  lab.it('Server should be defined', (done) => {
    expect(server).to.exist();
    expect(server.stop).to.be.a.function();
    done();
  });
});
