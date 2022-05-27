const API_URL = "https://ghibliapi.herokuapp.com";
const request= new XMLHttpRequest;

let movies=[]

function obtenerPeliculas(){
        if (this.readyState === 4 && this.status === 200){
             movies= JSON.parse(this.response)
    }
}
request.addEventListener("load", obtenerPeliculas);
request.open('GET',`${API_URL}/films`);
request.send();

function obtenerRandom(){
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const html = document.querySelector('#rdm')
        html.innerHTML= `<div class="movie">
        <div>
        <h2 class="title">${randomMovie.title}</h2>
        <p class="text">${randomMovie.release_date}</p>
        </div>
        <div>
        <p class="originalTitle">${randomMovie.original_title}</p>
        <p class="text">${randomMovie.director}</p>
        </div>
        
        <img class="poster" src="${randomMovie.image}"/>
        <p class="description">${randomMovie.description}</p>
        </div>
        `
}
