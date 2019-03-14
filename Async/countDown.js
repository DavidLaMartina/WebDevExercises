/* Implement countDown - function that accepts 1 parameter which is time in seconds for count down.
  Function should log time remaining every second. Once timer gets to 0, timer should be stopped and
  should log "Ring Ring Ring!"

  HINT: You'll need to use setInterval() to count down and clearInterval to stop timer.

  Example:
    countDown(3):

    Timer: 2
    Timer: 1
    Ring Ring Ring!
*/
'use strict';

var num = process.argv[2];
countDown(num);

function countDown(seconds){
  var interval = setInterval(function(){
    seconds--;
    if(seconds > 0){
      console.log("Timer: ", seconds);
    }else{
      console.log("Ring Ring Ring");
      clearInterval(interval);
    }
  }, 1000);
}
