const jwt = require('jsonwebtoken');
const secret = 'Atkh$vIFv53F^nvvD0r&X2GHYRe9Q$cr';

const token = jwt.sign({
    id: 'ellie',
    isAdmin: false,
 },
 secret,
 { expiresIn: 2} // 만료기간 2초
);

/* 
// 임의로 payload를 변경한 edited
const edited = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVsbGllIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM3NjMzODk1fQ.H2RGWlJv-wPoSYaZKiKqwheaYJY7cgnozQFN8E-p254';

jwt.verify(edited, secret, (err, decoded) => {
    // jwt.io 사이트에서 payload값을 변경시켜 얻은 encoded는 'invalid signature'에러가 발생하는걸 확인할 수 있다.
    // 한 번 생성할 때 signature가 정해지기 때문에 중간에 변경하여 얻은 값은 signature가 일치하지 않기 때문
    console.log(err, decoded);
}); 
*/

jwt.verify(token, secret, (err, decoded) => {
    // jwt.sign으로 생성한 token값을 jwt.verify로 확인하면 정상적으로 payload 결과를 확인할 수 있다.
    console.log(err, decoded);
});

setTimeout(() => {
    // token의 expiresIn이 2초이기에 3초뒤에 verify해보면 'TokenExpiredError'에러가 발생
    jwt.verify(token, secret, (err, decoded) => {
        console.log(err, decoded);
    });
}, 3000)

console.log(token);