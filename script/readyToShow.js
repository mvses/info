var splash = document.querySelector('.splash')
var body = document.querySelector('.main-body')
function display(element, element2){
  setInterval(()=>{
    element.style.display = 'flex';
    element2.style.display = "none";
  }, 3000);
}
document.addEventListener('DOMContentLoaded',display(body, splash))
;
