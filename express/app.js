import express from 'express'
const app = express();

// app.get('/sky/:id', (req, res, next) => {
//     // console.log(req.path);
//     // console.log(req.headers);
//     console.log(req.params);
//     console.log(req.query);

//     res.send('hi!')
// })

// Middleware는 순서가 중요하다!!
// send()를 하면 그 뒤부턴 작동x

// all 과 use의 차이점은 react router에서의 exact 같은것이다.
// all은 해당 주소와 정확히 맞아야하고 예를들어 /api/name 이런식으로 뒤에 추가적인 요청이 붙는다면 반응하지 않는다.
// 하지만 use는 /sky/name 이든 /sky/id 이든 일단 /sky가 반응하기 때문에 다 반응한다.
// 꼼수로 all도 /api/*  이런식으로하면 되긴한다...
app.all('/api', (req, res, next) => {
    console.log('all');
    next();
})
app.use('/sky', (req, res, next) => {
    console.log('use');
    next();
})

app.get('/', (req, res, next) => {
    console.log('first');
    // next('route'); // 'route'를하면 그 다음 요청으로 넘어가기에 first2 가 생략된다.
    // next(new Error('error'))

    /* 만약 같은 콜백함수에서 둘 이상의 send가 있다면 */
    if(true) {
        return res.send('true!!'); //return으로 콜백함수에서 나가서 두 번의 send가 나타나지 않게 하자
    }
    res.send('false!!');
}, (req, res, next) => {
    console.log('first2');
})

app.get('/', (req, res, next) => {
    console.log('second');
})

// 아무런 반응도 하지 않고 여기까지 왔다는건 해당하는 요청이 없었다..!
app.use((req, res, next) => {
    res.status(404).send('Not available! @_@');
})

// Error Handling
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Sorry, try later!');
})

app.listen(8080);

// IP : server가 네트워크상의 어디에 있는지 알 수 있는 주소
// Port : 그 server의 어떤 Application에 접속하길 원하는지 나타냄