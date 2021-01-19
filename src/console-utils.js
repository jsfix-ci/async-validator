const chalk = require("chalk");

function resetConsole() {
  return process.stdout.write('\033c');
}

function error(message) {
  console.log(chalk.red(message));
}

function critical(message) {
  console.log(chalk.black.bgRed(message));
}

function info(message) {
  console.log(chalk.green(message));
}

function success(message) {
  console.log(chalk.black.bgMagenta.bold(message));
}

module.exports = {
  resetConsole,
  critical,
  error,
  info,
  success,
};
