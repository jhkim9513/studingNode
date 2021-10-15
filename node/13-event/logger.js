const EventEmitter = require("events");
// emitter에서 등록한것은 다른 emitter에서 들을 수 없다.
// 때문에 class로 만들어 exports해야만 재사용할 수 있다.

class Logger extends EventEmitter {
  // EventEmitter 를 상속했기에 emit을 바로 사용할 수 있다.
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
