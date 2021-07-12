const fs = require('fs');

// 3가지 형태
// rename(old Path, new Path, callback(error, data))  <- 비동기
// try { renameSync(...) } catch(e) { }   <- blocking
// promises.rename().them().catch(0)

try{
  fs.renameSync('./text.txt', './text-new.txt');
} catch(e) {
  console.error(e);
}

fs.rename('./text-new.txt', './text.txt', (e) => {
  console.log(e); //error가 발생하지 않기에 null로 출력
});

console.log('hello');

fs.promises.rename('./text2.txt', './text-new.txt').then(() => console.log('Done')).catch(console.error);