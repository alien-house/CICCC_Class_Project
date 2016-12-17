
var ID = document.getElementById("div_movie");

var left = 0;
var tops = 0;
var div_movie = document.getElementById("div_movie");
var div_title = document.getElementById("title");
var div_green = document.getElementById("green");
var green_height = div_title.parentElement.clientHeight;
// div_movie.style.left = "20px";


document.addEventListener("DOMContentLoaded", function(){
  // window.setInterval(btnMoveClicked,50);
  window.setInterval(titlemoving,50);
// titlemoving();
  //forever...
  // while(true){
  //   btnMoveClicked();
  // }

});

// thread function
// window.setTimeout

// window.setInterval



function titlemoving(){
  tops = tops + 10;
  div_title.style.top = tops;
  // console.log(div_title.clientHeight);

  if(tops > green_height - tops){
    tops = 0;
  }

// var height = document.getElementById("title").style.height;



}



function btnMoveClicked(){
  left = left + 40;
  // var left = document.getElementById("div_movie").style.left;
  // console.log(left);
  div_movie.style.left = left + "px";
  div_movie.style.width = left + "px";
  if(left > 500){
    left = 0;
  }

  var element = document.getElementById('blue');
  var style = element.currentStyle || document.defaultView.getComputedStyle(element, '')
  // var widths = document.getElementById("blue").style.width;
  console.log(style);
}
// document.getElementById("myCheck").click();
