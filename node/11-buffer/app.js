// Fixed-size chuck of memory 고정된 사이즈의 메모리 덩어리
// array of integers, byte of data
const fs = require("fs");
const buf = Buffer.from("Hi");
console.log(buf); // 유니코드로 보여짐
console.log(buf.length);
console.log(buf[0]); // 아스키코드로 보여짐
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 초기화하지 않으므로 좀 더 빠름 ( 메모리 공간이 여유롭지 않다면 다른 값이 들어갈 수 있음)
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
