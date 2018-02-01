#!/usr/bin/env node

var glob = require('glob');
var _ = require('lodash');
var fileUtils = require('./utils/file');
var cmdlineUtils = require('./utils/cmdline');
var inquirer = require('inquirer');


var results = fileUtils.fuzzySearch(_.drop(process.argv, 2))

inquirer.prompt([
     {
          type: 'list',
          name: 'file',
          message: 'Choose file?',
          paginated: true,
          choices: results
     }
]).then(function (answers) {
     var file = (process.cwd() + "/" + answers.file).replace(/\\/g, "/");
     cmdlineUtils.executeCmd('subl ' + file);
     
     
     // if(fileUtils.isfile(file)){
        
     // }else{
     //      cmdlineUtils.executeCmd('explorer '+file);
     // }
});