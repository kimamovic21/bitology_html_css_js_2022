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
}


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

