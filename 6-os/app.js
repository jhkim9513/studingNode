const os = require("os");

//나의 서버가 동작하고있는 환경에 대한 정보를 얻을 때 사용하는 os

console.log(os.EOL === "\n"); //Mac 줄바꿈 End of Line
console.log(os.EOL === "\r\n"); //Window 줄바꿈

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
