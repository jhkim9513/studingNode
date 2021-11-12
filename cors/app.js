import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOptions = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
}

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny')); //요청에 대한 정보를 보는데 사용
app.use(cors(corsOptions));
app.use(helmet()); // 공통적으로 필요한 보안에 필요한 헤더들이 포함됨

/* cors를 사용하면 다음과같은 복잡한 과정을 간편하게 처리할 수 있다. */

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  
  res.send('Welcome!');
});

app.listen(8080);
