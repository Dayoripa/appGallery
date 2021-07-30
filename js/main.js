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

app.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});
