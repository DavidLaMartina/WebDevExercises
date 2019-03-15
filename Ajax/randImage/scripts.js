var btn = document.querySelector("#btn");

// Listen for clicks
btn.addEventListener("click", function(){
  // make reuest
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange =function(){
    if(XHR.readyState === 4 && XHR.status === 200){
      var data = JSON.parse(XHR.responseText);
      console.log(data);
      document.querySelector("#photo").src = data.message;
    }
  }

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();

})
