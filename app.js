let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

/* for the menu tool */
btnMenu.addEventListener('click', () => {
    //Icon X
    barIconX.classList.toggle('fa-times');

    if (activador) {
        menu.style.left = '0%';
        menu.style.transition = '0.5s';

        activador = false;
    } else {
        activador = false;
        menu.style.left = '-100%';

        activador = true;
    }
});

/* links  in the menu */
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');

    });

});


// Scroll efects 

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    //Hide & Show - Scroll Menu (Function)
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        menuContent.style.top = '0px';
        menuContent.style.transition = '0.3s';
    } else {
        menuContent.style.top = '-60px';
        menuContent.style.transition = '0.3s';
    }

    prevScrollPos = currentScrollPos;

    //Scoll Menu & Go Top & See Down(Styles)
    let arriba = window.pageYOffset;

    //Conditions
    if (arriba <= 600) {
        //Ocultar Go Top
        goTop.style.right = '-100px';
    } else {
        menuContent.style.borderBottom = '3px solid #08d9d6';

        //Mostrar Go Top
        goTop.style.right = '0px';
    }
}

//Go Top Click
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let down = document.querySelector('#down');

down.addEventListener('click', () => {
    document.body.scrollTop = 2350;
    document.documentElement.scrollTop = 2350;

});