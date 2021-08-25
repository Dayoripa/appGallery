const alls = document.querySelector('#all');
const brand = document.querySelectorAll('.grid__menu-item')[1];
const we = document.querySelectorAll('.grid__menu-item')[2];
const photography = document.querySelectorAll('.grid__menu-item')[3];
const ap = document.querySelectorAll('.grid__menu-item')[4];

// AddEvenListener
alls.addEventListener('click', obtImag);

brand.addEventListener('click', (e) => {
    searchCategory(e);
});

we.addEventListener('click', (e) => {
    searchCategory(e);
});

photography.addEventListener('click', (e) => {
    searchCategory(e);
});

ap.addEventListener('click', (e) => {
    searchCategory(e);
});

async function obtImag(e){
    e.preventDefault();
    const key = '8PoHaaF1QBWLgByh-uj4owUNFLQAVlyAZ8li4HDgskE';
    const url =`https://api.unsplash.com/search/collections?page=20&query=app,web,photo,branding&client_id=${key}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        cleanHTML();
        paintGrid(data);
    }catch{
        console.log(error)
    }
}
// const div = document.createElement('div');

// div.innerHTML = `
//     <p>CREATIVE LOGO</p>
//     <hr class="line">
//     <h4>Branding</h4>
// `;

// div.classList.add('grid-main');
// const inserImage = document.querySelector('.grid__container');
// inserImage.insertBefore(div, inserImage.children[1]);