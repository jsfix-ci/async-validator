# AsyncApi Definition Validator CLI
A CLI to check if an async api definition file is valid or has errors.
If the definition has errors, it will be displayed on console with the component, line and column location.

The cli will watch the file and if the file changes, it will reload the status.

If the fileName passed is a directory or does not exist, it will prompt an error.

## Usage
```
Usage: async-validator [options]

Options:
-V, --version      output the version number
-f, --file <file>  async api definition
-W, --no-watch     apply watcher to file
-h, --help         display help for command
```
