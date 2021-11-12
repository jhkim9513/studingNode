import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

// express alpha버전에서는 promise문제가 해결되었다고 했기 때문에 별도로 express-async-errors가 필요없다.
// http://localhost:8080/file1  요청에는 try catch가 없음에도 마지막 에러헨들링 망에 걸리는걸 확인할 수 있음!
// import {} from 'express-async-errors'; 

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
  // try {
  //   const data = fs.readFileSync('/file1.txt');
  // } catch (error) {
  //   res.sendStatus(404);
  // }

    const data = fs.readFileSync('/file1.txt');
  
    res.sendStatus(404);
  
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
