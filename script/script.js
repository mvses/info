var main = document.querySelector('.main-content');
var page = document.querySelector(".left");

function tiltParallax(event){
  var rotX = event.pageX - main.offsetWidth/2;
  var rotY =  event.pageY - main.offsetHeight/2;
  page.style.transform = "translateX("+(-rotY*1)+")";
  page.style.webkitTransform = "translateX("+(-rotY*1)+")";

}

//main.addEventListener("mousemove",tiltParallax,false);
