

var exec = require('child_process').exec;

exports.executeCmd = (cmd) => {
     exec(cmd, {
          cwd: process.cwd()
     }, function (error, stdout, stderr) {
          if (error) {
               console.log(error)
          }
          if (stderr) {
               console.log(stderr)
          }
          if (stdout) {
               console.log(stdout);
          }
     });
}