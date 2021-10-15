function hello() {
  console.log(this);
  console.log(this === global); //함수내부의 this는 global이다
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("-------class-------");
    console.log(this);
    console.log(this === global); //class 내부의 this는 class 자기 자신
  }
}

const a = new A(1);
a.memberFunction();

console.log("---- global scope ----");
console.log(this); //  {}
console.log(this === module.exports); //true
