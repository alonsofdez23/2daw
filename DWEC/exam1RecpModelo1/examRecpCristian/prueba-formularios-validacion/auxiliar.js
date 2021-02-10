'use strict'

function generarFormulario() {
    console.log("Todo ok");
    //Capturamos el div principal
    var div = document.querySelector("#principal");

    var label1 = document.createElement("label");
    label1.innerHTML = "Nombre";
    div.appendChild(label1);

    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "nombre";

    div.appendChild(input1);

    var salto1 = document.createElement("br");
    div.appendChild(salto1);

    var label2 = document.createElement("label");
    label2.innerHTML = "Precio";
    div.appendChild(label2);

    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "precio";

    div.appendChild(input2);

    var salto2 = document.createElement("br");
    div.appendChild(salto2);

    var label3 = document.createElement("label");
    label3.innerHTML = "Stock";
    div.appendChild(label3);

    var input3 = document.createElement("input");
    input3.type = "number";
    input3.id = "stock";

    div.appendChild(input3);

    var salto3 = document.createElement("br");
    div.appendChild(salto3);

    var botonVolver = document.createElement("button");
    botonVolver.innerHTML = "Volver";
    botonVolver.id = "volver";
    var botonAñadir = document.createElement("button");
    botonAñadir.innerHTML = "Añadir";
    botonAñadir.id = "añadir";
    botonAñadir.type = "submit";
    div.appendChild(botonVolver);
    div.appendChild(botonAñadir);

    var botonGenerador = document.querySelector("#generador");
    botonGenerador.disabled = true;

    botonVolver.addEventListener('click', () => {
        volverAtras();
        var botonGenerador = document.querySelector("#generador");
        botonGenerador.disabled = false;
    });

    function volverAtras() {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}