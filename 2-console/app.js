console.log("logging....");

/* 출력내용 정리 */
console.clear();

/* log level */
console.log("log"); // 개발할 때
console.info("info"); // 정보를 남기고 싶을 때
console.warn("warn"); // 발생하면 안되지만 심각한 문제는 아닐 때
console.error("error"); // 에러

/* assert  ( 특정한 조건일 때 log를 출력 ) */
console.assert(2 === 3, "not same!"); //출력됨
console.assert(2 === 2, "same!"); //출력안됨

/* print object */
const student = { name: "Tom", age: 25, company: { name: "AC" } };
console.log(student);
console.table(student); //table형태로 출력결과를 볼 수 있음

// dir은 log처럼 보여주나 옵션을 지정할 수 있다.
// depth가 0이기에 student안에 있는 company 오브젝트는 그 내용값을 알려주지 않음
console.dir(student, { showHidden: true, colors: false, depth: 0 });

/* measuring time ( time과 timeEnd 사이에 처리되는 속도를 알려줌 )
  단, 같은 레이블이어야함
  O   time("apple") ~~  timeEnd("apple")
  X   time("apple") ~~  timeEnd("banana") */
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop2");

/* counting ( 지정한 레이블이 몇 번 호출되는지 확인 할 수 있다. ) */
function a() {
  console.count("a function");
}
a(); // a function: 1
a(); // a function: 2
console.countReset("a function"); //count 초기화
a(); // a function: 1

/* trace ( 해당 함수가 어디서 호출되었는지 경로를 알 수 있음 ) */
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
