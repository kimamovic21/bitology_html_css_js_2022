// 1. dio

// let buttonPrvi = document.getElementById('prviButton');

// buttonPrvi.addEventListener('click', klikFunkcija);

// function klikFunkcija() {
//     console.log('Korisnik je kliknuo dugme.');
//     let element = document.getElementById('test');
//     element.innerHTML = 'Korisnik je kliknuo dugme.';
// };


// let button1 = document.getElementById('prviButton');
// button1.addEventListener('click', mojaFunkcija);
// function mojaFunkcija() {
//     console.log('Dugme je kliknuto');
// };


// 2. dio

let prviButton = document.getElementById('prviButton');
prviButton.addEventListener('mouseover', hoverFunkcija);
function hoverFunkcija() {
    console.log('Kursor je iznad elementa button.');
    prviButton.classList.add('moja-klasa');
};

prviButton.addEventListener('mouseleave', leaveFunkcija);
function leaveFunkcija () {
    console.log('Kursor je napustio button');
    prviButton.classList.remove('moja-klasa');
};
