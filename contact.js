const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const messageInput= document.querySelector("#message");
const html = document.querySelector('#cartel');

function validateForm(){
    var regexEmail =/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var regexName= /^[a-zA-Z]{3,}$/;

    let errorNameInput = regexName.test(nameInput.value)?
    null : '¿Estas seguro de que ingresaste bien el nombre?'

    let errorEmailInput = (regexEmail.test(emailInput.value)) ?
    null : '¿Estas seguro de que ingresaste bien el mail?'

    let errorMessageInput = (messageInput.value.length >0) ?
    null : 'Ingresa un mensaje'

    if(!errorNameInput && !errorEmailInput && !errorMessageInput){
        document.getElementById("myForm").submit();
    }            
    
    else if(errorNameInput && errorEmailInput && errorMessageInput){
        html.innerHTML=
        `<div class="error">mmm... check the fields</div>
        <img class="hands" src="./images/hands.svg"/>`
    }
    else if(errorNameInput){
        html.innerHTML=
        `<div class="error">check your name</div>
        <img class="hands" src="./images/hands.svg"/>`

    }
    else if(errorEmailInput){
        html.innerHTML=
        `<div class="error">check your e-mail</div>
        <img class="hands" src="./images/hands.svg"/>`

    }
    else if(errorMessageInput){
            html.innerHTML=
            `<div class="error">please write a message</div>
            <img class="hands" src="./images/hands.svg"/>`

    }

    }
