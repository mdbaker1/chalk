const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

console.log(chalk.inverse.blue('Good Afternoon!  This is a short' +
    ' story displaying the use of a node.js!'));
console.log(chalk.inverse.blue('   This is really kind of neat!'));
console.log(chalk.green('The way a user can color the text ' +
    chalk.blue.bold('in a substring with another style') +
    ' and back again!'
))
console.log(chalk.red.underline('Underlining text is very simple to do!'));
console.log(chalk.blue('Chalk is also pretty handy for making chart-type data presentation!'));
console.log(`
Projects: ${chalk.red('90%')}
Homework: ${chalk.green('70%')}
Exams: ${chalk.yellow('80%')}
`);



const animate = chalkAnimation.rainbow('Chalk-Animate is awesome too!  Check it out!');
setTimeout(() => {
    console.log(chalk.cyan('The End!'));
}, 5000);
