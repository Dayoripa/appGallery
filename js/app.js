const template = document.querySelector('#grid-image').content;
const main = document.querySelector('.grid__container');
const branding = document.querySelectorAll('.menu__links')[1];
const web = document.querySelectorAll('.menu__links')[2];
const photo = document.querySelectorAll('.menu__links')[3];
const app = document.querySelectorAll('.menu__links')[4];



// AddEvenListener

branding.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

web.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

photo.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});

app.addEventListener('click', (e) => {
    cleanHTML(); 
    searchCategory(e);
});




  document.addEventListener('DOMContentLoaded', () =>{
    fechDate();
   
 });

 const fechAll = async() =>{

    const key = '8PoHaaF1QBWLgByh-uj4owUNFLQAVlyAZ8li4HDgskE';
    const url =`https://api.unsplash.com/search/collections?page=1&query=web,branding&client_id=${key}`;

      try {
          const res = await fetch(url);
          const date = await res.json();
          console.log(date)
          console.log(date)
      } catch (error) {
           console.log(error)
      }
  }

const fechDate = async(category = 'all') =>{

    const key = '8PoHaaF1QBWLgByh-uj4owUNFLQAVlyAZ8li4HDgskE';
    const url =`https://api.unsplash.com/search/photos/?query=${category}&client_id=${key}`;

      try {
          const res = await fetch(url);
          const date = await res.json();
          console.log(date)
          paintGrid(date);
      } catch (error) {
           console.log(error)
      }
  }

 const paintGrid = (images) =>{
     //console.log(images)
     images.results.forEach(items => {
       //  console.log(items)
          const {urls} = items;
          const clone = template.cloneNode(true);
          const fragment = document.createDocumentFragment();

          clone.querySelector('img').setAttribute('src', urls.regular);

          fragment.appendChild(clone);
        main.appendChild(fragment);
    });
}

const searchCategory = (e) =>{
     const name = e.target.textContent;
      fechDate(name)
              
}

const cleanHTML = () =>{
    while(main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

