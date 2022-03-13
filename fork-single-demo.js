const fork = require('child_process').fork;
let childProcess = fork(__dirname + '/fork.js');
childProcess.send('start');
childProcess.on('message', (data) => {
  console.log('sum is:', data);
});
childProcess.on('exit', (code, signal) => {
  console.log(`fork existed with code ${code} and signal ${signal}:`);
})
