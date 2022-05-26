
const API_URL = "https://ghibliapi.herokuapp.com";

const request= new XMLHttpRequest();


function obtenerPeliculas(){
    if (this.readyState === 4 && this.status === 200){
    const movies = JSON.parse(this.response)
    const HTMLResponse = document.querySelector('#app')
    const tpl = movies.map (films=>
         (`
         <div class="card">
            <img class="poster" src="${films.image}"/>
            <p class="tittles">${films.title}</p>
            <p class="tittles">${films.original_title}</p>
         </div>`
         )).join('')

    HTMLResponse.innerHTML =`${tpl}`
     
}
}

request.addEventListener("load", obtenerPeliculas);
request.open('GET', `${API_URL}/films`);
request.send();

