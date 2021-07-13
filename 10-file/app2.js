const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./text.txt", "hello, jhkim!") //
  .catch(console.error);

// appending a file
fs.appendFile("./text.txt", "\n bye, jhkim!") //
  .then(() => {
    // copy
    fs.copyFile("./text.txt", "./text2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir("sub-folder") //
  .catch(console.error);

// 해당하는 경로들의 모든 file 이름 읽어오기
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
