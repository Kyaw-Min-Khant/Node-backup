// const dir = __dirname;
// const file = __filename;
// const data = file.split("/");
// console.log(dir);
// console.log(data[data.length - 1]);
// let i = 0;
// setTimeout(() => {
//   console.log("I am Working");
// }, 5000);
// const timingFunction = setInterval(function () {
//   i++;
//   if (i === 5) clearInterval(timingFunction);
//   else console.log("I am Updating");
// }, 4000);
//function
function func(fun) {
  fun();
}

//Function Expression
const myFunc = function () {
  console.log("I am FunctionExpression");
};

const helper = function (data) {
  console.log(" i am helper in node 1 =>" + data);
};
module.exports = {
  myFunc: myFunc,
  helper: helper,
};
