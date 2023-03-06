const campoEmail = document.querySelector("[name=email]");
const campoPassword = document.querySelector("[name=password]")

const validarCampoVacio = (mensage, e) => {
    const campo = e.target;
    const campoValue = e.target.value;
    if (campoValue.trim().length === 0){
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = mensage;
    } else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

const caracteresPassword = e => {
    const campo =e.target;
    if(campoPassword.value.trim().length < 8){
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "La contraseña debe contener al menos 8 caracteres";
    } else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

const validarFormatoEmail = e => {
    const campo = e.target;
    const campoValue = e.target.value;
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
    if(campoValue.trim().length > 5 && !regex.test(campoValue)){
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Por favor ingrese un email valido";
    } else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

campoEmail.addEventListener("input", validarFormatoEmail)

campoEmail.addEventListener("blur", (e) => validarCampoVacio("Ingresa tu email ", e));

campoPassword.addEventListener("blur", (e) => validarCampoVacio("Debes ingresar una contraseña", e));

campoEmail.addEventListener("input", validarFormatoEmail);

campoPassword.addEventListener("input", caracteresPassword);
