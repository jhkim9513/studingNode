const fs = require("fs");

// const readStream = fs.createReadStream("./file.txt", {
//   // 한 번에 얼마만큼 데이터를 읽어오는지 정함
//   // highWaterMark: 8, // 기본 64kbytes
//   encoding: "utf-8",
// });

// const data = [];
// readStream.on("data", (chunk) => {
//   // console.log(chunk);
//   data.push(chunk);
//   console.count("data");
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });
// readStream.on("error", (error) => {
//   console.log(error);
// });

// Chaining
const data = [];
fs.createReadStream("./file.txt", {
  // 한 번에 얼마만큼 데이터를 읽어오는지 정함
  // highWaterMark: 8, // 기본 64kbytes
  encoding: "utf-8",
})
  .on("data", (chunk) => {
    // console.log(chunk);
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
