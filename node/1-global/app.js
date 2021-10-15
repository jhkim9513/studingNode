const fs = require("fs");
// 위에서 파일시스템을 호출함으로써 global이 window가 아니라 node임을 지정해주어
// Ctrl + 클릭으로 진입시 NodeJS.Global을 확인할 수 있다.
console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
hello();
