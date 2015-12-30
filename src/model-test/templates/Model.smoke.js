'use strict';

const expect = require('code').expect;
const lab = exports.lab = require('lab').script();
const <%= name %> = require('../../../models/<%= name %>');

lab.describe('Smoke tests <%= name %>.js model :: ', () => {

  lab.it('Should exist and be defined', (done) => {
    expect(<%= name %>).to.exist();
    done();
  });

  lab.it('<%= name %> should have create/find methods', (done) => {
    expect(<%= name %>.create).to.be.function();
    expect(<%= name %>.find).to.be.function();
    done();
  });
});
