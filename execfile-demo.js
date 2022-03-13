const execFile = require('child_process').execFile;
let fileName = __dirname + '/exec-file.txt';
execFile(fileName, (error, stdout, stderr) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  if (stderr) {
    console.log('stderr:', stderr);
    return;
  }
  console.log('stdout:', stdout);
});
