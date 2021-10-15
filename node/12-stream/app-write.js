const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finisihed");
});

writeStream.write("hello!");
writeStream.write("bye!");
writeStream.end();
