const bcrypt = require('bcrypt');

const password = 'abcd1234';
// 실제 구현할 때는 비동기( hash, compare )로 구현해야한다.

// hash(비밀번호, salt문장 또는 길이 ) : salt는 보통 10~12가 일반적이며 
// 복잡도가 오를수록 처리속도가 기하급수적으로 늘기때문에 서버성능 생각하면서 설정해야함
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd1234', hashed); //true
const result = bcrypt.compareSync('abcd12', hashed); //false

console.log(result);