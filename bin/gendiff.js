#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/gdiff.js';

const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff([filepath1, filepath2], options.format));
  });
  
  program.parse();
