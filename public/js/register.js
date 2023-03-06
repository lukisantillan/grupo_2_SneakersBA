const campoNombre = document.querySelector("[name=first_name]");
const campoApellido = document.querySelector("[name=last_name]");
const campoEmail = document.querySelector("[name=email]");
const campoPassword = document.querySelector("[name=password]");
const campoConfirmarPassword = document.querySelector("[name=confirm_password]");
const campoAvatar = document.querySelector("[name=avatar]");

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
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}


const confirmarContraseña = e => {
    const campo = e.target;
    const campoValue = e.target.value;
    if(campoPassword.value != campoConfirmarPassword.value){
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Las contraseñas deben coincidir";
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

campoNombre.addEventListener("blur", (e) => validarCampoVacio("Debes ingresar tu nombre ", e));

campoApellido.addEventListener("blur", (e) => validarCampoVacio("Debes ingresar tu apellido ", e));

campoEmail.addEventListener("blur", (e) => validarCampoVacio("Debes ingresar tu email ", e));

campoPassword.addEventListener("blur", (e) => validarCampoVacio("Debes ingresar una contraseña", e));

campoConfirmarPassword.addEventListener("blur", (e) => validarCampoVacio("Debes repetir la contraseña", e));

campoEmail.addEventListener("input", validarFormatoEmail);

campoPassword.addEventListener("input", caracteresPassword);

campoConfirmarPassword.addEventListener("input", confirmarContraseña);

campoAvatar.addEventListener("change", (e) => {
    const campo = e.target;
    const extensionesAvatar = e.target.files[0].name.split(".").pop().toLowerCase();
    const extensionesPermitidas = ["jpg","png","jpeg","gif"];
    if(!extensionesPermitidas.includes(extensionesAvatar)){
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText= `Los únicos formatos permitidos son ${extensionesPermitidas.join(", ")}`;
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }

});


