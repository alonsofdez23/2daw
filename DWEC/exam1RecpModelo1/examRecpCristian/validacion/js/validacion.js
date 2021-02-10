'use script'

window.addEventListener('load', () => {
    //Capturamos el formulario y los inputs
    const formulario = document.querySelector("#form");
    const inputs = document.querySelectorAll('#form input');

    //Creamos las expresiones regulares
    const expresiones = {
        vacio: /^$/, //Expresion regular para un string vacio (la negamos en el if para usarla)
        precio: /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/, // Comprueba si es un decimal de 2 digitos
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                console.log('Entra en la comprobacion del nombre');
                if (!expresiones.vacio.test(e.target.value)) {
                    console.log('El test pasa');
                    document.querySelector('#nombre').classList.remove('mal');
                    document.querySelector('#nombre').classList.add('bien');
                } else {
                    console.log('El test no pasa');
                    document.querySelector('#nombre').classList.remove('bien');
                    document.querySelector('#nombre').classList.add('mal');
                }
                break;
            case "precio":
                console.log('Entra en la comprobacion del precio');
                if (expresiones.precio.test(e.target.value) && !expresiones.vacio.test(e.target.value)) {
                    console.log('El test pasa');
                    document.querySelector('#precio').classList.remove('mal');
                    document.querySelector('#precio').classList.add('bien');
                } else {
                    console.log('El test no pasa');
                    document.querySelector('#precio').classList.remove('bien');
                    document.querySelector('#precio').classList.add('mal');
                }
                break;
            case "stock":
                console.log('Entra en la comprobacion del sotck');
                if (!expresiones.vacio.test(e.target.value)) {
                    console.log('El test pasa');
                    document.querySelector('#stock').classList.remove('mal');
                    document.querySelector('#stock').classList.add('bien');
                } else {
                    console.log('El test no pasa');
                    document.querySelector('#stock').classList.remove('bien');
                    document.querySelector('#stock').classList.add('mal');
                }
                break;
        }

    };


    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();


    });






});