const express = require('express');
const app = express();
const fork = require('child_process').fork;
app.get('/', (req, res) => {
  res.send('Hey There');
});
app.get('/first', (req, res) => {
  let sum = longComputation();
  res.send({ sum: sum });
});
app.get('/second', async function (req, res) {
  let sum = await longComputationAsync();
  res.send({ sum: sum });
});
app.get('/third', (req, res) => {
  let childProcess = fork(__dirname + '/fork.js');
  childProcess.send('start');
  childProcess.on('message', (data) => {
    res.send({ sum: data });
  })
});
app.listen(3000, () => {
  console.log('Server started at Port http://localhost://3000');
});
function longComputation() {
  let sum = 0;
  for (let i = 1; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}
function longComputationAsync() {
  const promise = new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 1; i < 1e9; i++) {
      sum += i;
    }
    return resolve(sum);
  })
}
