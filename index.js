var inquirer = require('inquirer');
inquirer.prompt([
     {
          type: 'list',
          name: 'letter',
          message: 'What\'s your favorite letter?',
          paginated: true,
          choices: choices
     },
     {
          type: 'checkbox',
          name: 'name',
          message: 'Select the letter contained in your name:',
          paginated: true,
          choices: choices
     }
]).then(function (answers) {
     console.log(JSON.stringify(answers, null, '  '));
});