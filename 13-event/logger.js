const EventEmitter = require("events");

class Logger extends EventEmitter {
  // EventEmitter 를 상속했기에 emit을 바로 사용할 수 있다.
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
