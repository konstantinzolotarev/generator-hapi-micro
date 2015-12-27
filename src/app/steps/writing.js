/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')

export default {
  serverDependentApi () {
    this.fs.copy(this.templatePath('connection/**'), this.destinationPath('connection'));
    this.fs.copy(this.templatePath('routes/**'), this.destinationPath('routes'));
  },

  config () {
    this.fs.copy(this.templatePath('config/**'), this.destinationPath('config'));
  },

  docker () {
    if (!this.answers['generate-docker'])
      return;

    this.fs.copy(this.templatePath('docker-compose-server.yml'), this.destinationPath('docker-compose-server.yml'));
    this.fs.copy(this.templatePath('docker-compose-test.yml'), this.destinationPath('docker-compose-test.yml'));
    this.fs.copy(this.templatePath('docker-compose.yml'), this.destinationPath('docker-compose.yml'));
    this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
  },

  tests() {
    if (!this.answers['generate-tests'])
      return;

    this.fs.copy(this.templatePath('test/**'), this.destinationPath('test'));
  },

  root () {
    this.fs.copy(this.templatePath('app.js'), this.destinationPath('app.js'));
  },

  development () {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
  },

  pkg () {
    // node:app generator will merge into this
    let trailsPackage = require(this.templatePath('package.json'));
    this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage);
  }
};
