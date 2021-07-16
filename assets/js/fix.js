
var xoxo = document.getElementsByClassName('swiper-slide');
var coco = document.getElementsByClassName('close');
for (let index = 0; index < 20; index++) {
    xoxo[index].addEventListener("click", go);
    coco[index].addEventListener("click", run);
    
}



function go() {
    document.getElementsByClassName("navigation_button")[0].style.display = 'none';
    document.getElementsByClassName("navigation_background")[0].style.display = 'none';

}

function run() {
    document.getElementsByClassName("navigation_button")[0].style.display = 'block';
    document.getElementsByClassName("navigation_background")[0].style.display = 'block';

}