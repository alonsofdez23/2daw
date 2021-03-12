'use strict'

//Creamos el objeto Bola con las propiedades
function Bola(id, marca, color, usada) {
    this.id = id;
    this.marca = marca;
    this.color = color;
    this.usada = usada;

    //Creamos un metodo para cambiar el estado de usada
    this.cambiarUsada = (nuevo) => {
        this.usada = nuevo;
    };
}

var bola1 = new Bola(1, "Marca1", "Azul", true);
var bola2 = new Bola(2, "Marca2", "Rojo", false);
var arrayBolas = [bola1, bola2];


//Funcion modoAdministrador para el boton Administrador
function modoAdministrador() {

    // Cogemos el boton Administrador, entrar y el contenedorDos
    var botonEntrar = document.querySelector("#entrarUsuario");
    var botonAdministrador = document.querySelector("#entrarAdmin");
    var contenedorDos = document.querySelector("#contenedorDos");

    //Creamos los elementos del formulario
    var label1 = document.createElement("label");
    //Asignamos valores a "for" y rellenamos el label
    label1.htmlFor = "marca";
    label1.innerHTML = "Marca: ";
    // Hacemos append a contenedorDos con label1 para ponerlo
    contenedorDos.append(label1);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "marca";
    input1.name = "marca";
    contenedorDos.append(input1);

    //Creamos un salto para separar y lo ponemos
    var salto1 = document.createElement("br")
    contenedorDos.append(salto1);


    var label2 = document.createElement("label");
    label2.for = "color";
    label2.innerHTML = "Color: ";
    contenedorDos.append(label2);
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "color";
    input2.name = "color";
    contenedorDos.append(input2);

    //Creamos un salto para separar y lo ponemos
    var salto2 = document.createElement("br")
    contenedorDos.append(salto2);

    var label3 = document.createElement("label");
    label3.for = "id";
    label3.innerHTML = "Id: ";
    contenedorDos.append(label3);
    var input3 = document.createElement("input");
    input3.type = "number";
    input3.id = "id";
    input3.name = "id";
    contenedorDos.append(input3);

    //Creamos un salto para separar y lo ponemos
    var salto3 = document.createElement("br")
    contenedorDos.append(salto3);

    //Creamos el boton Añadir desactivado por defecto
    var anadir = document.createElement("input");
    anadir.type = "button";
    anadir.id = "anadir";
    anadir.value = "Añadir";
    anadir.disabled = true;
    contenedorDos.append(anadir);

    //Creamos el boton Volver
    var volver = document.createElement("input");
    volver.type = "button";
    volver.id = "volver";
    volver.value = "Volver";
    contenedorDos.append(volver);





    //Desactivamos el boton administrador y entrar
    botonAdministrador.disabled = true;
    botonEntrar.disabled = true;

    //Capturamos el boton volver y llamamos a la funcion volverInicio
    var botonVolver = document.querySelector("#volver");
    volver.addEventListener('click', () => {
        volverInicio();
    });

    //Validaciones
    function validarVacio() {
        var input = document.querySelectorAll(".input").value;
        if (input != "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        return true;
    }

    function validarColor() {
        var color = document.querySelector("#color");
        var valorColor = color.value;
        color.pattern = "^\\d{2}[.]\\d{2}$";
        if (valorColor == "rojo" || valorColor == "azul") {
            alert("El color debe ser azul o rojo");
            return false;
        }
        return true;
    }

    function validarStock() {
        var stock = document.querySelector("#stock");
        var valorStock = stock.value;
        stock.min = 0;
        if (valorStock == "" || valorStock == null || valorStock.length == 0) {
            alert("El stock no puede ser vacío");
            return false;
        }
        if (!stock.checkValidity()) {
            if (stock.validity.rangeUnderflow) {
                return false;
            }
        }
        return true;
    }

    function validar() {
        if (validarVacio() && validarColor() && validarStock()) {
            var botonAnadir = document.querySelector("#anadir");
            botonAnadir.disabled = false;
        }
    }

    var botonAnadir = document.querySelector("#anadir");
    botonAnadir.addEventListener('click', () => {
        anadir2();
    });

}

//Funcion que estando en el modo Administrador nos deje volver hacia el modo Inicio
function volverInicio() {
    var contenedorDos = document.querySelector("#contenedorDos");
    var botonEntrar = document.querySelector("#entrarUsuario");
    var botonAdministrador = document.querySelector("#entrarAdmin");

    contenedorDos.innerHTML = "";
    botonEntrar.disabled = false;
    botonAdministrador.disabled = false;
}

function anadir2() {
    var valorMarca2 = document.querySelector("#marca").value;
    var valorColor2 = document.querySelector("#color").value;
    var valorId2 = document.querySelector("#id").value;

    var nuevo = new Bola(valorMarca2, valorColor2, valorId2);
    arrayBolas.push(nuevo);
}

function modoCliente() {
    var botonEntrar = document.querySelector("#entrarUsuario");
    var botonAdministrador = document.querySelector("#entrarAdmin");
    var contenedorDos = document.querySelector("#contenedorDos");

    //Desactivamos botones administrador y entrar
    botonEntrar.disabled = true;
    botonAdministrador.disabled = true;

    //Creacion de la tabla
    var table = document.createElement("table");
    contenedorDos.append(table);

    //Creacion de thead
    var thead = document.createElement("thead");
    table.append(thead);

    //Creacion de th
    var th = document.createElement("th");
    th.innerHTML = "Color";
    thead.append(th);
    var th = document.createElement("th");
    th.innerHTML = "Número de bolas";
    thead.append(th);
    var th = document.createElement("th");
    th.innerHTML = "Color seleccionado";
    thead.append(th);
    var th = document.createElement("th");
    th.innerHTML = "Número de bolas solicitadas";
    thead.append(th);

    //Creacion de tbody
    var tbody = document.createElement("tbody");
    table.append(tbody);

    //Creacion de tr
    var tr = document.createElement("tr");
    tbody.append(tr);

    //Creacion de td
    var td = document.createElement("td");
    td.innerHTML = arrayBolas[0].color;
    tr.append(td);

    var td = document.createElement("td");
    td.innerHTML = arrayBolas[0].marca;
    tr.append(td);

    var td = document.createElement("td");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "check1";
    td.append(check);

    tr.append(td);

    var td = document.createElement("td");
    var input = document.createElement("input");
    input.type = "number";
    input.id = "input1";
    input.disabled = true;
    td.append(input);

    tr.append(td);

    //Creacion de tr
    var tr = document.createElement("tr");
    tbody.append(tr);

    //Creacion de td
    var td = document.createElement("td");
    td.innerHTML = arrayBolas[1].color;
    tr.append(td);

    var td = document.createElement("td");
    td.innerHTML = arrayBolas[1].marca;
    tr.append(td);

    var td = document.createElement("td");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "check2";
    td.append(check);

    tr.append(td);

    var td = document.createElement("td");
    var input = document.createElement("input");
    input.type = "number";
    input.id = "input2";
    input.disabled = true;
    td.append(input);

    tr.append(td);

    //Creacion de boton prestamo y volver
    var botonPrestamo = document.createElement("button");
    botonPrestamo.id = "prestamo";
    botonPrestamo.disabled = true;
    botonPrestamo.innerHTML = "Préstamo de bolas";
    contenedorDos.append(botonPrestamo);

    var botonVolver = document.createElement("input");
    botonVolver.type = "button";
    botonVolver.id = "volver";
    botonVolver.value = "Volver";
    contenedorDos.append(botonVolver);

    var botonVolver = document.querySelector("#volver");
    volver.addEventListener('click', () => {
        volverInicio();
    });

    var botonPrestamo = document.querySelector("#prestamo");
    botonPrestamo.addEventListener('clik', () => {
        prestamo();
    });

    var check1 = document.querySelector("#check1")

    if (check1.addEventListener('click', () => {
        document.querySelector("#input1").disabled = false;
    })) {
        
    }

    if (check2.addEventListener('click', () => {
        document.querySelector("#input2").disabled = false;
    })) {
        
    }

    //Creamos el div
    var divNuevo = document.createElement("div");
    divNuevo.id = "divNuevo";
    contenedorDos.append(divNuevo);
}

var prestamoBolas = 0;

function prestamo() {
    // Procedemos a prestamo
    var tr = document.querySelectorAll("#tr");
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].lastElementChild.childNodes[0].checked) {
            var nombre = tr[i].childNodes[0].innerText;
            var precio = tr[i].childNodes[1].innerText;
            precioTotal += Number(precio);
            arrayBolas[i - 1].cambiarUsada();
            document.getElementById("usada").innerHTML = arrayBolas[i - 1].usada
        }
    }
    //Mostramos el mensaje
    var div = document.querySelector("#divNuevo");
    div.innerHTML = "Préstamo: " + prestamoBolas;

    //Cookie
    c = setCookie(nombre, prestamoBolas);
}

window.addEventListener('load', () => {
    console.log("DOM LOAD!");

    var botonAdministrador = document.querySelector("#entrarAdmin");

    botonAdministrador.addEventListener('click', () => {
        modoAdministrador();
    });

    var botonCliente = document.querySelector("#entrarUsuario");

    botonCliente.addEventListener('click', () => {
        modoCliente();
    });
});