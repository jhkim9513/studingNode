const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");

//file.txt를 읽어와 zlib으로 압축한것을 file4에 쓴다
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
