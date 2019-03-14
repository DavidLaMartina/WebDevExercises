// Ex 1
console.log("\nNaive version\n");

var arr = [1,2,3,4,5,6];
function double(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i] * 2);
  }
}
double(arr);

// Ex 2
console.log("\nRefactored forEach\n");

function forEach(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}

var arr = [1,2,3,4,5,6];
forEach(arr, function(number){
  console.log(number * 2)
});
