let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// getCount라는 module에는 위에 만들어둔 getCount함수를 연결
module.exports.getCount = getCount;
// increase라는 module에는 위에 만들어둔 increase함수를 연결
module.exports.increase = increase;

// module은 생략이 가능하나 단순 exports는 module.exports를 참조하고있는것이다.
console.log(module.exports === exports); //true

// 때문에 다음과같이 exports에 다른 값을 입력하게되면
exports = {};

console.log(module.exports === exports); //false
