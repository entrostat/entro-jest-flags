entro-jest-flags
================

A CLI that allows us to generate flags for jest form a json file. This can be used to change flags in conjunction with `nodemon`.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/entro-jest-flags.svg)](https://npmjs.org/package/entro-jest-flags)
[![Downloads/week](https://img.shields.io/npm/dw/entro-jest-flags.svg)](https://npmjs.org/package/entro-jest-flags)
[![License](https://img.shields.io/npm/l/entro-jest-flags.svg)](https://github.com/Kerren-Entrostat/entro-jest-flags/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage

If you create a `.json` file with the following entries,

`config.json`:
```json
{
    "namePattern": "name pattern",
    "pathPattern": "path pattern"
}
```

And then you run, `entro-jest-flags config.json`, the output will be:

```
--testNamePattern="name pattern" --testPathPattern="path pattern"
```

So using `nodemon`, we can rerun `jest` tests using:

```
nodemon --watch=./config.json --exec npm run test
```

And then set the `test` script in your `package.json` to:

```
jest $(entro-jest-flags ./config.json) --watchAll --verbose
```

<!-- usage -->
```sh-session
$ npm install -g entro-jest-flags
$ entro-jest-flags COMMAND
running command...
$ entro-jest-flags (-v|--version|version)
entro-jest-flags/0.0.0 linux-x64 node-v14.15.0
$ entro-jest-flags --help [COMMAND]
USAGE
  $ entro-jest-flags COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->

<!-- commandsstop -->
