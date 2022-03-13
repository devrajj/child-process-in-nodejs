# child-process-in-nodejs

### Genral Information

```
This Repository contains code of creating child processes in NodeJs. Child Processes can 
be used to utilise core to the maximum.
It covers four methods
1. exec()
2. execFile()
3. spawn()
4. fork()
```

### To install packages

```
Before running the project run below command
npm i 
npm i -g loadtest
```

### To check the load testing for concurrent request we are using loadtest
loadtest -n 10 -c 10 http://localhost:3000/first
loadtest -n 10 -c 10 http://localhost:3000/second
loadtest -n 10 -c 10 http://localhost:3000/third
Run these three after starting node fork-demo.js server to see the time each request 
takes and request per second
