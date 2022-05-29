const API_URL = "https://ghibliapi.herokuapp.com";

const request= new XMLHttpRequest();


function obtenerPeliculas(){
    if (this.readyState === 4 && this.status === 200){
    const movies = JSON.parse(this.response)
    const html = document.querySelector('#movies')
    const movie = movies.map (films=>
         (` 
            <a class="card" id="${films.id}" onclick="hide(this.id)">
            <img class="poster" src="${films.image}"/>
            <p class="titles">${films.title}</p>
            <p class="titles">${films.original_title}</p>
            </a>`
         )).join('')

    html.innerHTML =`${movie}`
}
}

request.addEventListener("load", obtenerPeliculas);
request.open('GET', `${API_URL}/films`);
request.send();


function hide(id){
    document.getElementById('movies').setAttribute('class', 'movies -hidden')
    document.getElementById('title').setAttribute('class', 'pageTitle -hidden')
    document.getElementById('footer').setAttribute('class', 'footer -absolute')
    document.getElementById('movie').setAttribute('class', 'movie -showed')
    console.log(id)
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json())
    .then(film => {
        const html = document.querySelector('#movie')
        html.innerHTML =`
        <img class="arrow-back"src="./images/back.svg" onclick="show()">

        <div class="movieDiv">

        <div class="left">
            <img class="poster" src="${film.image}"/>
        </div>
        <div class="right">
            <h2 class="title">${film.title} <span>(${film.release_date})</span></h2>
            <h3 class="title-original">${film.original_title}<span>${film.director}</span></h3>
            <p  class="description">${film.description}</p>
        </div>
        </div>
       `
    })
}   
function show(){
    document.getElementById('movies').setAttribute('class', 'movies -showed')
    document.getElementById('title').setAttribute('class', 'pageTitle -showed')
    document.getElementById('footer').setAttribute('class', 'footer')
    document.getElementById('movie').setAttribute('class', 'movie -hidden')
    const html = document.querySelector('#movie')
    html.innerHTML = ''
}

  

