'use strict'

window.addEventListener('load', () => {
    console.log("DOM LOAD!");

    //Modo Inicio
    /*
    Apartado a) Se implementará un objeto Producto que contendrán los datos de los productos.
    Tendrá las propiedades: nombre, precio y stock . Incluirá en la función constructora
    un método para cambiar el stock
    */





    //Modo Administrador

    /*
    Apartado b) Al pulsar “Administrador” se creará en “contenedorDos” un formulario para introducir
    la información del nuevo producto, un botón “Volver” para volver al modo Inicio y
    un botón “Añadir” para almacenar la información. (1,5 puntos)
    • Los botones se han de crear con métodos que manipulen el DOM.
    • Se deben deshabilitar los botones “Entrar” y “Administrador”.
    */

    var botonAdministrador = document.querySelector("#entrarAdmin");


    botonAdministrador.addEventListener('click', () => {

        modoAdministrador();
    });

    var botonCliente = document.querySelector("#entrarCliente");
    botonCliente.addEventListener('click', () => {
        modoCliente();
    });


});





/*
A la hora de mostrar los productos no me sale con un bucle.
En la funcion comprar tiene que fallar algo, por que no muestra
el mensaje cuando se le da al boton comprar.
En modo Administrador la validacion hace aguas.
Las cookies no funcionan bien.
*/