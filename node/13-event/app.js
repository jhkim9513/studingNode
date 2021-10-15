const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("kim", callback1);

emitter.on("kim", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("kim", { message: 1 });
emitter.emit("kim", { message: 2 });
emitter.removeListener("kim", callback1);
emitter.emit("kim", { message: 3 });
