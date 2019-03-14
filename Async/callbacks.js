// Ex1
console.log("\nExample 1:\n");

function callback(){
  console.log("Coming from callback");
}
function higherOrder(fn){
  console.log("About to call callback");
  fn();
  console.log("Callback has been invoked");
}

higherOrder(callback);

// Ex2
console.log("\nExample 2: \n")

function sendMessage(message, callback){
  return callback(message);
}
sendMessage("Message for console", console.log);

// sendMessage("Message for alert", alert);

// var answer = sendMessage("Are you sure?", confirm);

// Ex3
console.log("\nExample 3: \n");

function greet(name, formatter){
  return "Hello, " + formatter(name);
}
function upperCaseName(name){
  return name.toUpperCase();
}
console.log(greet("Tim", upperCaseName));
console.log(greet("Tim", function(name){
  return name.toUpperCase();
}));
console.log(greet("Tim", function(name){
  return name + "!!!!";
}));

// Ex4
console.log("\nExample 4: \n");


// Ex 5
console.log("\nExample 5: \n");


// Ex 6
console.log("\nExample 6: \n");
