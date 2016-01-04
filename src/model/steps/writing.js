/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */
 import chalk from 'chalk';
 import printMessage from 'print-message';

const SOURCE_MODEL = `Model.js`;

const DESTINATION_MODEL = name => `models/${name}.js`;

export default {

  model() {
    let name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/(\w+)Model$/, '$1');
    let fileName = `${name}`
    let filePath = this.destinationPath(DESTINATION_MODEL(name));

    this.template(SOURCE_MODEL, DESTINATION_MODEL(name), {name, fileName, answers: this.answers});

    if (!this.fs.exists(filePath)) {
      return this.fs.write(filePath)
    }
  }
};
