console.log("hello");


// all theory in text.txt 



// const chalk = require('chalk')

// console.log(chalk.blue('Hello chalk'));

// it can't be run. because chalk v5+ is: only ESM. Does not support commonJS


import chalk from "chalk";
import { log } from "node:console";

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red("!"));

log(chalk.blue.bgRed.bold('Montajur Rahman'))

log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

log(chalk.red('Hello', chalk.underline.bgGray('Montajur') + '!'))


log(chalk.rgb(123,45,67).underline('Underline reddish color'))

log(chalk.hex('#DEADED').bold('Bold Gray!'))



// define own theme

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

log(error('Error!'))
log(warning('Warning!'))