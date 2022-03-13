function longComputation() {
  let sum = 0;
  for (let i = 1; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}
process.on('message', (data) => {
  if (data === 'start') {
    process.send(longComputation());
  }
})
