let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "qazwsxedcrfvtgbyhnujmiklopç1234567890QWERTYUIOPASDFGHJKLÇZXCVBNM!@#$%&?";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.Value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }

    containerpassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;

    function copyPassword(){
        alert("Senha copiada com sucesso")
        navigator.clipboard.writeText(novaSenha);
    }

}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}