function findIndex(arr, callback){
  for (var i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      return i;
    }
  }
  return -1;
}

var arr = [3,4,2,6,1];
console.log(findIndex(arr, function(num, index, array){
  return num === 6;
}));
var arr = [5,11,13,8,6,7];
console.log(findIndex(arr, function(num, index, array){
  return num % 2 === 0;
}));
var langs = ["Java", "C++", "Python", "Ruby"];
console.log(findIndex(arr, function(lang, index, array){
  return lang === "JavaScript";
}));
