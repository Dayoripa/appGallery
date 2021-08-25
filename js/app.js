const template = document.querySelector('#grid-image').content;
const main = document.querySelector('.grid__container');

const all = document.querySelector('#cargarApi');
const branding = document.querySelectorAll('.menu__links')[1];
const web = document.querySelectorAll('.menu__links')[2];
const photo = document.querySelectorAll('.menu__links')[3];
const app = document.querySelectorAll('.menu__links')[4];

const key = '8PoHaaF1QBWLgByh-uj4owUNFLQAVlyAZ8li4HDgskE';
    const url =`https://api.unsplash.com/search/collections?page=20&query=app,web,photo,branding&client_id=${key}`;


// AddEvenListener

all.addEventListener('click', obtenerImagenes);

branding.addEventListener('click', e => searchCategory(e));

web.addEventListener('click', e => searchCategory(e));

photo.addEventListener('click', e => searchCategory(e));

app.addEventListener('click', (e) => searchCategory(e));

//Funciones

async function obtenerImagenes(e){
    e.preventDefault();
    try{
        const res = await fetch(url);
        const data = await res.json();
        cleanHTML();
        paintGrid(data);
    }catch{
        console.log(error)
    }
}

const paintGrid = (dato) =>{   
     dato.results.forEach(items => {
        //   console.log(items.cover_photo)
          const { cover_photo: {urls: {regular}} } = items;
          const clone = template.cloneNode(true);
          const fragment = document.createDocumentFragment();

            clone.querySelector('img').setAttribute('src', regular);

          fragment.appendChild(clone);
        main.appendChild(fragment);
    });
}


const fechDate = async(category) =>{
     const urls =`https://api.unsplash.com/search/photos/?query=${category}&client_id=${key}`;

     try {
         const res = await fetch(urls);
         const date = await res.json();
         categoryGrid(date);
     } catch (error) {
          console.log(error)
     }
 }

const categoryGrid = (datos) =>{
     datos.results.forEach(items => {
          console.log(items.urls)
          const { urls: {regular} } = items;
          const clone = template.cloneNode(true);
          const fragment = document.createDocumentFragment();

           clone.querySelector('img').setAttribute('src', regular);

          fragment.appendChild(clone);
        main.appendChild(fragment);
    });
}

const searchCategory = (e) =>{
    e.preventDefault();
     cleanHTML();
      const nameCategory = e.target.textContent;
      fechDate(nameCategory)           
}

const cleanHTML = () =>{
    while(main.firstChild) {
        main.removeChild(main.firstChild)
    }
}
