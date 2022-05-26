const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const messageInput= document.querySelector("#message");


function validateForm(){
    var regexEmail =/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var regexName= /^[a-zA-Z]{3,}$/;

    let errorNameInput = regexName.test(nameInput.value)?
    null : '¿Estas seguro de que ingresaste bien el nombre?'

    let errorEmailInput = (regexEmail.test(emailInput.value)) ?
    null : '¿Estas seguro de que ingresaste bien el mail?'

    let errorMessageInput = (messageInput.value.length >0) ?
    null : 'Ingresa un mensaje'

    if (errorEmailInput){
        console.log("ta mal")

    }

    }

