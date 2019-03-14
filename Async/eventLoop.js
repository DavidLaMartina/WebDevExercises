// Event loop checks queue when stack is empty

// Ex 1
console.log("\nQueue / stack example\n");

function square(n){
  return n * n;
}
setTimeout(function(){
  console.log("The callback was placed on the queue");
}, 0);
console.log(square(2));

// Single-threaded: linear code execution ONLY in JS
console.log("\nSingle-threaded example\n");

setTimeout(function(){
  console.log("Hello from the timeout");
}, 0);
for (var i = 0; i < 1000000000; i++){
  var x = i * 2;
}
console.log("Done with the loop");
