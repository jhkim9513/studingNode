import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// promise를 return하거나 함수자체를 async를 사용하여 promise로 감싸고나면
// express-async-errors에 의해서 next(error)가 이루어진다. 
// express의 에러헨들링은 동기 방식이기 때문에 원래는 비동기인 promise 에러를 외부에서 잡아낼 수 없는데 이를 가능하게 하는것
import {} from 'express-async-errors'; 

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 1.
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2.
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .catch((error) => {
      res.sendStatus(404);
    });
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
