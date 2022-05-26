const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const messageInput= document.querySelector("#message");


function validateForm(){
    var regexEmail =/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var regexName= /^[a-zA-Z]{3,}$/;

    let errorNameInput = regexName.test(nameInput.value)?
    false : '¿Estas seguro de que ingresaste bien el nombre?'

    let errorEmailInput = (regexEmail.test(emailInput.value)) ?
    false : '¿Estas seguro de que ingresaste bien el mail?'

    let errorMessageInput = (messageInput.value.length >0) ?
    false : 'Ingresa un mensaje'

    if(errorNameInput && errorEmailInput && errorMessageInput == false){
        console.log("q pasa aca");
        // document.getElementById("#myForm").submit();
    }            
    
    // else if(errorNameInput && errorEmailInput && errorMessageInput){
    //     <div class="cartel">
    //         <div class="error">holi</div>
    //         <img class="hands" src="./images/hands.svg"/>
    //     </div>

    // }

    }

