let btn_on = document.querySelector(".btn_on");
let btn_off = document.querySelector(".btn_off");
let img = document.querySelector(".image");

btn_on.addEventListener('click', (evt) => {
    img.setAttribute("src", "img/lampa.jpg");
})

btn_off.addEventListener('click', (evt) => {
    img.setAttribute("src", "img/lampa2.jpg");
})
