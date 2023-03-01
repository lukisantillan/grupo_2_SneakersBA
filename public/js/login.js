window.addEventListener("load", function(){


    const formulario = document.querySelector('#form-padre');
    const divErrores = document.querySelector('#errores');
    
    
    formulario.email.focus()
    
    
    const envioFormulario = (event) => {
        event.preventDefault();
    
    
        divErrores.innerHTML = '';
    
    
    
    
        const campoEmail = formulario.email;
        const campoPassword = formulario.password;
    
    
    
    
        if (campoEmail.value == '') {
            divErrores.innerHTML += '<li> El campo email está vacío </li>'
        }
    
        if (campoPassword.value == '') {
            divErrores.innerHTML += '<li> El campo password está vacío </li>'
        }
    
    
    
    /*consulto si hay errores para asignar la clase al <ul> y hacer la lista visible con css*/ 
    
        if (divErrores.innerHTML !== "") {
    
            
            divErrores.classList.add("conerrores");
          }
    
    }
    
    formulario.addEventListener('submit', envioFormulario)
    
    
    })