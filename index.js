const { program } = require('commander');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-V, --version', 'output the version number')

program.parse();
