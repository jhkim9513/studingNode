import express from 'express';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// commonJS가 아닌 ES module에서 __dirname 을 사용하는 방법...
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({extended: false})) // HTML Form -> Body

const options = {
    dotfiles: 'ignore', // 숨겨진 파일은 보이지않도록 무시
    etag: false, // 
    index: false,
    maxAge: '1d', //얼마나 오랫동안 cache가 가능한지
    redirect: false,
    setHeaders: function (res, path, stat) {
        // 필요한 데이터가있으면 헤더에 추가해서 보냄
        res.set('x-timestamp', Date.now());
    },
};

// static을 사용하면 app.get('/index.html', ''); 이런식의 요청을 생략할 수 있다.
// localhost:8080/index.html 로 접근 가능
app.use(express.static('public', options)); //public폴더에 있는 파일들을 사용자가 읽을 수 있게 하겠다.

// 아래 방식으로 경로를 직접 설정할 수 있다. 다른 디렉토리에서 실행하는 경우에는 다음처럼 절대 경로를 설정해주는것이 안전하다.
// localhost:8080/apple/index.html 로 접근 가능
app.use('/apple', express.static(__dirname + '/public', options)); //


app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(8080);
