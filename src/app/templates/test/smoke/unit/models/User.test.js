'use strict';

const expect = require('code').expect;
const lab = exports.lab = require('lab').script();
const User = require('../../../../models/User');

lab.describe('Smoke tests User.js model :: ', () => {

  lab.it('Should exist and be defined', (done) => {
    expect(User).to.exist();
    done();
  });

  lab.it('User should have create/find methods', (done) => {
    expect(User.create).to.be.function();
    expect(User.find).to.be.function();
    done();
  });
});
