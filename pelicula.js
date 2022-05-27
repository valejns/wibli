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


function obtenerDatos(){
    const html = document.querySelector('#peli')
}