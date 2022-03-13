const spawn = require('child_process').spawn;
const chilProcess1 = spawn('ls', ['-l']);
chilProcess1.stdout.on('data', (result) => {
  console.log('stdout:', result.toString());
})
chilProcess1.stderr.on('data', (result) => {
  console.log('stderr:', result);
})
chilProcess1.on('error', (result) => {
  console.log('error:', result);
})
chilProcess1.on('exit', (code, signal) => {
  console.log('child process exited with a code:', code, 'and signal:', signal);
})
const chilProcess2 = spawn('find', ['/']);
chilProcess2.stdout.on('data', (result) => {
  console.log('stdout:', result.toString());
})
chilProcess2.stderr.on('data', (result) => {
  console.log('stderr:', result);
})
chilProcess2.on('error', (result) => {
  console.log('error:', result);
})
chilProcess2.on('exit', (code, signal) => {
  console.log('child process exited with a code:', code, 'and signal:', signal);
})
