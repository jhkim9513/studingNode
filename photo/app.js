import path from "path";
import os from "os";
import fs from "fs";
// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4 | mov, png | aae, IMG_1234 (IMG_E1234)

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "/Users/jonghwan/Downloads", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error(`Please enter folder name in Pictures`);
}

console.log(workingDir);
