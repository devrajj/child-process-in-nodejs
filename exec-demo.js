const exec = require('child_process').exec;
//exec is not useful for commands that have large output on stdout as below
exec('find /', (err, stdout, stderr) => {
  if (err) {
    console.log('err:', err);
    return;
  }
  if (stderr) {
    console.log('stderr:', stderr);
    return;
  }
  console.log('stdout:', stdout);
});
//exec will run fine for below
exec('ls -l', (err, stdout, stderr) => {
  if (err) {
    console.log('err:', err);
    return;
  }
  if (stderr) {
    console.log('stderr:', stderr);
    return;
  }
  console.log('stdout:', stdout);
});
