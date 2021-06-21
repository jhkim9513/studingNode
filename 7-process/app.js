const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("수행되고있는 모든 코드가 동작한 다음 0초 후에 실행되는것");
}, 0);

// 수행되고있는 코드가 완료된 후 등록한 callbakc 함수를 task queue에 넣어줌 (우선순위 높아서 setTimeout보다 먼저 나옴)
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 1000; i++) {
  console.log("for loop");
}
