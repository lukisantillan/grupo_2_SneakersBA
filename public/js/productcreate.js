const campoNombre = document.querySelector("[name=nombre]");
const campoDescripcion = document.querySelector("[name=descripcion]");
const campoPrecio = document.querySelector("[name=precio]");
const campoAvatar = document.querySelector("[name=imagen]");
const campoCategoria = document.querySelector("[name=categoria]");

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

campoNombre.addEventListener("blur", (e) => validarCampoVacio("Ingrese el nombre del producto", e));

campoDescripcion.addEventListener("blur", (e) => validarCampoVacio("Ingrese una descripción del producto", e));

campoPrecio.addEventListener("blur", (e) => validarCampoVacio("Ingrese el precio en pesos del producto", e));

campoAvatar.addEventListener("blur", (e) => validarCampoVacio("Debe seleccionar una imagen del producto", e));

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







/*const form = document.querySelector('form');
const categoriaSelect = document.querySelector('#categoria');
const categoriaError = document.querySelector('#categoria-error');

form.addEventListener('submit', (event) => {
  const categoriaValue = categoriaSelect.value;
  if (categoriaValue === '') {
    event.preventDefault();
    categoriaError.textContent = 'Debe seleccionar una categoría';
  } else {
    categoriaError.textContent = '';
    
  }
});*/