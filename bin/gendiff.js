#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(
    (filePath1, filePath2) => genDiff(filePath1, filePath2),
  );
program.parse();
