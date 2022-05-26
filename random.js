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
        html.innerHTML= `<h2 class="title">${randomMovie.title}</h2>
        <p class="originalTitle">${randomMovie.original_title}</p>
        <img class="poster" src="${randomMovie.image}" width="10%" />
        <p class="description">${randomMovie.description}</p>
        <p class="producer">${randomMovie.producer}</p>
        <p class="title">${randomMovie.director}</p>
        <p class="title">${randomMovie.release_date}</p>
        <p class="title">${randomMovie.running_time}</p>
        <p class="title">${randomMovie.rt_score}</p>
        
        `
}
