const path = require('path');

// POSIX (Unix: Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

// 운영체제에 따라 경로설정이 다르기 때문에 사용하면 유용함
console.log(__dirname); // 현재 수행되는 디렉토리
console.log(__filename); // 현재 수행되는 파일이름

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경 변수 구분자

// basename
console.log(path.basename(__filename)); // basename을 사용하여 파일정보만 받아옴
console.log(path.basename(__filename), '.js'); // 확장자 이름 제거한 정보

// dirname
console.log(path.basename(__dirname)); // dirname을 사용하여 디렉토리정보만 받아옴

// extension
console.log(path.extname(__filename)); // 확장자 이름만 얻어오기

// parse
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed); // format에 obj형태를 보내주면 경로 string으로 변환됨
console.log(str); 

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/  절대경로기에 true
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로이기에 false

// normalize
console.log(path.normalize('./folder/////blabla')); // 잘못된 경로일경우 수정하여나옴  ex) folder/blabla

// join
console.log(__dirname + path.sep + 'image'); // 이렇게 임의로 경로를 설정할 수 있지만 
console.log(path.join(__dirname), 'image'); // join을 사용하면 간편하게 설정할 수 있다.