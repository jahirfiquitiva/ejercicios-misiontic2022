// import React from 'react';
// import chalk from 'chalk';
const chalk = require('chalk');
const functions = require('./functions');
const multiply = require('./multiply');

let nombre = 'Jahir';
functions.print(nombre);
functions.print(chalk.yellow(multiply(2, 4)))