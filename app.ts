#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let para = await inquirer.prompt({
  name: "value",
  message: "Enter your message...",
  type: "input",
});

console.log(chalk.bgWhite.bold(" " + para.value + " "));

let words = para.value.split(" ");

let characters = para.value.replace(/" "/g);

let line = para.value.split("\n");

console.log(
  `[ ${chalk.bgBlueBright.bold(
    " Words: " + words.length + " "
  )} | ${chalk.bgGreenBright.bold(
    " Characters: " + characters.length + " "
  )} | ${chalk.bgCyanBright.bold(" Lines: " + line.length + " ")} ]`
);
