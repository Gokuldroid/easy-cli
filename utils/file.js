var glob = require("glob")
var _ = require('lodash');
var fs = require('fs');

exports.fuzzySearch = (patternArray, cwd) => {
     cwd = cwd || process.cwd();
     var results = [];
     _.each(patternArray, (pattern) => {
          results = _.concat(results, glob.sync(pattern, { mark: true, cwd: cwd }));
     });
     return results;
}

exports.isfile = (filePath) =>{
     try{
          return fs.lstatSync(filePath).isFile();
     }catch(e){
          return false;
     }
}