// bad example - nested
// console.log("\nBad - nested\n");
//
// var counter = 0;
// setTimeout(function(){
//   counter++;
//   console.log("Counter: ", counter);
//   setTimeout(function(){
//     counter++;
//     console.log("Counter: ", counter);
//     setTimeout(function(){
//       counter++;
//       console.log("Counter: ", counter);
//     }, 3000);
//   }, 2000);
// }, 1000);

// good example with promises
console.log("\nGood example - promises");

var counter = 0;
function incCounter(){
  counter++;
  console.log("Counter: ", counter);
}

function runLater(callback, timeInMs){
  var p = new Promise(function(resolve, reject){
    setTimeout(function(){
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then(function(){
  return runLater(incCounter, 2000);
}).then(function(){
  return runLater(incCounter, 3000);
}).then(function(){

});

// Promise chain example
// console.log("\nPromise chain - random number\n");
//
// var promise = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 500);
// });
//
// promise.then(function(data){
//   console.log("Random int passed to resolve: ", data);
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(Math.floor(Math.random() * 10));
//     }, 3000);
//   });
// }).then(function(data){
//   console.log("Second random int passed to resolve: ", data);
// })
