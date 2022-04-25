#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
const program = new Command();



program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');
program.parse();
