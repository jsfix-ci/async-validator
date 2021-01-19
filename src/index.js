const fs = require('fs');
const watcher = require('node-watch-changes');
const { validateAsyncAPIDefinition } = require('./validateAsyncAPIDefinition');
const { info, critical, resetConsole } = require('./console-utils');

function isNotAFile(file) {
  return !fs.existsSync(file) || !fs.lstatSync(file).isFile();
}

function withWatcher(file) {
  const onStart = () => {
    resetConsole();
    info('Starting...');
    info(`File: ${file}`)
    validateAsyncAPIDefinition(file);
  };

  const onChange = async (events) => {
    resetConsole();
    info('Reloading...')
    if ( events.change ) {
      validateAsyncAPIDefinition(file);
    }
  };

  const onEnd = () => {
    resetConsole();
    info('Terminating...');
  };

  watcher({
    directory: file,
    delay: 100,
    verbosity: 'normal',
    onStart: onStart,
    onChange: onChange,
    onEnd: onEnd
  });
}

function asyncValidator({ file, watch }) {
  if (isNotAFile(file)) {
    critical(`File: ${file} - does not exists or is not a file!`);
  } else {
    if (watch) {
      withWatcher(file);
    } else {
      validateAsyncAPIDefinition(file);
    }
  }
}

module.exports = {
  asyncValidator,
}
