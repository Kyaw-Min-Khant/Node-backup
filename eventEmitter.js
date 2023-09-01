// const event = require("events");
// const myEmitter = new event.EventEmitter();
// let i = 0;
// myEmitter.on("StartEmitter", function () {
//   console.log("I am start Working");
// });

// setInterval(function () {
//   i++;
//   if (i % 3 == 0) {
//     myEmitter.emit("StartEmitter");
//   } else {
//     console.log("Continue Working");
//   }
// }, 2000);

const event = require("events");
const myEmit = new event.EventEmitter();
let i = 0;
myEmit.on("Message", function (user) {
  console.log(`I am sendRequest to ${user}`);
});
const timingFunction = setInterval(function () {
  i++;
  if (i === 5) {
    myEmit.emit("Message", "Nyein Kyaw");
    clearInterval(timingFunction);
  } else {
    console.log("Sending");
  }
}, 2000);
