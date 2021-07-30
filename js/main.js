const brand = document.querySelectorAll('.grid__menu-item')[1];
const we = document.querySelectorAll('.grid__menu-item')[2];
const photography = document.querySelectorAll('.grid__menu-item')[3];
const ap = document.querySelectorAll('.grid__menu-item')[4];


// AddEvenListener

brand.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

we.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

photography.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

ap.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

const div = document.createElement('div');

div.innerHTML = `
    <p>CREATIVE LOGO</p>
    <hr class="line">
    <h4>Branding</h4>
`;

div.classList.add('grid-main');
const inserImage = document.querySelector('.grid__container');
inserImage.insertBefore(div, inserImage.children[1]);