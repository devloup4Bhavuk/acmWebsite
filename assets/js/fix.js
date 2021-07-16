
document.getElementsByClassName('swiper-slide')[0].addEventListener("click", go);
document.getElementsByClassName('close')[0].addEventListener("click", run);

function go() {
    document.getElementsByClassName("navigation_button")[0].style.display = 'none';
}

function run() {
    document.getElementsByClassName("navigation_button")[0].style.display = 'block';
}