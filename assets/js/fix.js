
var xoxo = document.getElementsByClassName('swiper-slide');
var coco = document.getElementsByClassName('close');
var bobo = document.getElementsByClassName('fade');
var ioio = document.getElementsByClassName("navigation_button");
var jojo = document.getElementsByClassName("navigation_background");
for (let index = 0; index < 20; index++) {
    xoxo[index].addEventListener("click", go);
    coco[index].addEventListener("click", run);
    bobo[index].addEventListener("click", run);

    
}



function go() {
    ioio[0].style.display = 'none';
    jojo[0].style.display = 'none';

}

function run() {
    ioio[0].style.display = 'block';
    jojo[0].style.display = 'block';

}