
const API_URL = "https://ghibliapi.herokuapp.com";

const request= new XMLHttpRequest();


function obtenerPeliculas(){
    if (this.readyState === 4 && this.status === 200){
    const movies = JSON.parse(this.response)
    const html = document.querySelector('#app')
    const movie = movies.map (films=>
         (` 
            <div class="card" onclick="hide()">
            <img class="poster" src="${films.image}"/>
            <p class="tittles">${films.title}</p>
            <p class="tittles">${films.original_title}</p>
            </div>`
         )).join('')

    html.innerHTML =`${movie}`
}
}
function hide(){
    document.getElementById('app').setAttribute('class', 'hideApp')
}

request.addEventListener("load", obtenerPeliculas);
request.open('GET', `${API_URL}/films`);
request.send();

