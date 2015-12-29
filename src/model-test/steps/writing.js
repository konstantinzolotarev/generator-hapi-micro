/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

// import Util from '../../app/util'

const SOURCE_SMOKE_MODEL = `Model.smoke.js`;
const SOURCE_INTEGRATION_MODEL = `Model.integration.js`;
const SOURCE_HELPER_MODEL = `Model.helper.js`;

const DESTINATION_MODEL_SMOKE = name => `test/smoke/models/${name}.test.js`;
const DESTINATION_MODEL_INTEGRATION = name => `test/integration/models/${name}.test.js`;
const DESTINATION_MODEL_HELPER = name => `test/helper/model/${name}.js`;

export default function () {
  // Util.patchConflicter()

  let name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/(\w+)Model$/, '$1');
  let fileName = `${name}`
  let indexPath = this.destinationPath(DESTINATION_MODEL_SMOKE)

  this.template(SOURCE_SMOKE_MODEL, DESTINATION_MODEL_SMOKE(name), {name, fileName, answers: this.answers});

  if (!this.fs.exists(this.destinationPath(DESTINATION_MODEL_SMOKE))) {
    return this.fs.write(this.destinationPath(DESTINATION_MODEL_SMOKE), Util.getRequireStatement(fileName))
  }
};
