// Navbar

// select hamburger
const hamburger = document.querySelector('.hamburger');

// select nav-menu
const navMenu = document.querySelector('.nav-menu');

// add event listener
hamburger.addEventListener('click', mobileMenu);

// navmenu function
// toggle active
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

let listItems = document.querySelectorAll('li');
console.log(listItems);

function hideNavMenu() {
    if (navMenu.classList.toggle('active')) {
        listItems.addEventListener('click', function hideListItems() {
            listItems.style.display = "none";
        });
    };
};



// About me section

let mySkills = [
    {
        image: "about/html5.png",
        alt: "HTML 5",
        title: "HTML 5",
        description: "HTML 5 is a markup language used for structuring and presenting content on the World Wide Web.",
    },
    {
        image: "about/css3.png",
        alt: "CSS 3",
        title: "CSS 3",
        description: "CSS 3 is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. ",
    },
    {
        image: "about/javascript.png",
        alt: "Javascript",
        title: "Javascript",
        description: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
    },
];

console.log(mySkills);


const showMySkills = () => {
   let grid = document.getElementById('grid');
   grid.innerHTML = mySkills.map((skill) => {
    return `
                <div class="grid-card">
                    <div class="grid-image">
                        <img src=${skill.image}  alt=${skill.alt}>
                    </div>
                    <div class="informations">
                        <h3>${skill.title}</h3>
                        <p>${skill.description}</p>
                    </div>
                </div>
           `
   }).join('');
}

showMySkills();


// Ovo je galerija slika

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

// Pomjeramo slike u desno
const moveRight = () => {
    console.log('right');
    // console.log(pictures);
    displayNone();

    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    console.log(imgNum);

    // pictures[0].style.display = 'none';
    // pictures[1].style.display = 'block';
    pictures[imgNum].style.display = 'block';
};

// Pomjeramo slike u lijevo
const moveLeft = () => {
    console.log('left');
    displayNone();

    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    console.log(imgNum);
    // console.log(pictures);
    pictures[imgNum].style.display = 'block';
};

// Event listeneri za strelice
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Ova funkcija ce da sakrije slike
const displayNone = () => {
    pictures.forEach((picture) => {
        picture.style.display = 'none';
    });
};
