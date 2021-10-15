console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.timeEnd('timeout 0');
  console.log('setTimeout 0');
}, 0); //실제로 setTimeout이 실행되는데에는 Task Queue에 들어가고나서 실행되기까지의 시간이 걸리기에 0초보다 더 걸린다.

// console.log('code2');
// setImmediate(() => {
//   console.log('setImmediate');
// });

// console.log('code3');
// process.nextTick(() => {
//   console.log('process.nextTick');
// });