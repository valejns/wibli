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
    document.getElementById('cabezon').setAttribute('class', 'head-clicked')
    setTimeout(() => {
        document.getElementById('cabezon').setAttribute('class', 'head')
    }, 500);
    
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const html = document.querySelector('#rdm')
        html.innerHTML= `
    <div class="image-cropper">
        <img class="img" src="${randomMovie.image}" class="rounded" />
    </div>
    <div class="movie">
       
        <div class="left">
            <img class="poster" src="${randomMovie.image}"/>
        </div>
        <div class="right">
            <h2 class="title">${randomMovie.title} <span>(${randomMovie.release_date})</span></h2>
            <h3 class="title-original">${randomMovie.original_title}<span>${randomMovie.director}</span></h3>
            <p  class="description">${randomMovie.description}</p>
        </div>
    </div>
        `
}
