
const API_URL = "https://ghibliapi.herokuapp.com";

const request= new XMLHttpRequest();


function obtenerPeliculas(){
    if (this.readyState === 4 && this.status === 200){
    const movies = JSON.parse(this.response)
    const html = document.querySelector('#movies')
    const movie = movies.map (films=>
         (` 
            <div class="card" onclick="hide()">
            <img class="poster" src="${films.image}"/>
            <p class="titles">${films.title}</p>
            <p class="titles">${films.original_title}</p>
            </div>`
         )).join('')

    html.innerHTML =`${movie}`
}
}

request.addEventListener("load", obtenerPeliculas);
request.open('GET', `${API_URL}/films`);
request.send();


function hide(){
    document.getElementById('movies').setAttribute('class', 'movies -hidden')
    document.getElementById('movie').setAttribute('class', 'movie -showed')

}   
function show(){
    document.getElementById('movies').setAttribute('class', 'movies -showed')
    document.getElementById('movie').setAttribute('class', 'movie -hidden')
}

  

