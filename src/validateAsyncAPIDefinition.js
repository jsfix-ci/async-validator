const fs = require('fs');
const parser = require('@asyncapi/parser');

const { success, error} = require('./console-utils');

function validateAsyncAPIDefinition(file) {
  const apiDefinition = fs.readFileSync(file).toString();
  parser.parse(apiDefinition)
    .then(() => success('The definition file is correct!!'))
    .catch(err => {
      const errorMessages = err.validationErrors.map(e => `${e.title} ${e.location.startLine}:${e.location.startColumn}`);
      errorMessages.forEach(item => error(item));
    });
}

module.exports = {
  validateAsyncAPIDefinition,
}
