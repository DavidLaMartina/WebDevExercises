// Ex 1
console.log("\nExample 1: basic stack stuff\n");

function upperCaseFirst(word){
  return word[0].toUpperCase() + word.slice(1);
}
function upperCaseWords(sentence){
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++)  {
    words[i] = upperCaseFirst(words[i]);
  }
  return words.join(" ");
}

console.log(upperCaseWords("Let's see if this worked!"));

// Ex 2
// console.log("\nsetTimeOut example\n");
//
// var timerId = setTimeout(function(){
//   console.log("This function runs in 30 seconds");
// }, 30000);
// setTimeout(function(){
//   console.log("Cancelling the first setTimeout\n", timerId);
//   clearTimeout(timerId);
// }, 2000);

// Ex 3
// console.log("\nsetInterval\n");
//
// var num = 0;
// setInterval(function(){
//   num++;
//   console.log("num:", num);
// }, 1000);

// Ex 4
console.log("\nCancelling setInterval\n");

var num = 0;
var intervalId = setInterval(function(){
  num++;
  console.log("num:", num);
  if (num === 3){
    clearInterval(intervalId);
  }
}, 1000);
