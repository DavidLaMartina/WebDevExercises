var url = "https://randomuser.me/api/"
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors);
});

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}
function displayErrors(err){
  console.log(err);
}
function parseJSON(res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}
function updateProfile(data){
  var fullname = data.name.first + " " + data.name.last;
  fullnameDisp.innerText = fullname;
  avatar.src = data.picture.medium;
}
