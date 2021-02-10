'use strict'

//Creamos el objeto Producto con las propiedades
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    //Creamos un metodo para cambiar el stock
    this.cambiarStock = () => {
        this.stock -= 1;
    };
}

var langostino = new Producto("Langostinos", 20, 3);
var manzanilla = new Producto("Manzanilla", 10, 3);
var arrayProductos = [langostino, manzanilla];


//Funcion modoAdministrador para el boton Administrador
function modoAdministrador() {

    // Cogemos el boton Administrador, entrar y el contenedorDos
    var botonEntrar = document.querySelector("#entrarCliente");
    var botonAdministrador = document.querySelector("#entrarAdmin");
    var contenedorDos = document.querySelector("#contenedorDos");

    //Creamos los elementos del formulario
    var label1 = document.createElement("label");
    //Asignamos valores a "for" y rellenamos el label
    label1.for = "nombre";
    label1.innerHTML = "Nombre: ";
    // Hacemos append a contenedorDos con label1 para ponerlo
    contenedorDos.append(label1);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "nombre";
    input1.name = "nombre";
    contenedorDos.append(input1);

    //Creamos un salto para separar y lo ponemos
    var salto = document.createElement("br");
    contenedorDos.append(salto);


    var label2 = document.createElement("label");
    label2.for = "precio";
    label2.innerHTML = "Precio: ";
    contenedorDos.append(label2);
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "precio";
    input2.name = "precio";
    contenedorDos.append(input2);

    //Creamos un salto para separar y lo ponemos
    var salto = document.createElement("br");
    contenedorDos.append(salto);

    var label3 = document.createElement("label");
    label3.for = "stock";
    label3.innerHTML = "Stock: ";
    contenedorDos.append(label3);
    var input3 = document.createElement("input");
    input3.type = "number";
    input3.id = "stock";
    input3.name = "stock";
    contenedorDos.append(input3);

    //Creamos un salto para separar y lo ponemos
    var salto = document.createElement("br");
    contenedorDos.append(salto);

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

    //??
    var prueba = document.querySelector("#stock");
    prueba.addEventListener('blur', validar);

    //Validaciones
    function validarNombre() {
        var nombre = document.querySelector("#nombre").value;
        if (nombre == "" || nombre == null || nombre.length == 0) {
            alert("El nombre no puede estar vacio");
            return false;
        }
        return true;
    }

    function validarPrecio() {
        var precio = document.querySelector("#precio");
        var valorPrecio = precio.value;
        precio.pattern = "^\\d{2}[.]\\d{2}$";
        if (valorPrecio == "" || valorPrecio == null || valorPrecio.length == 0) {
            alert("El precio no puede ser vacio");
            return false;
        }
        if (precio.checkValidity()) {
            if (precio.validity.patternMismatch) {
                return false;
            }
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
        if (validarNombre() && validarPrecio() && validarStock()) {
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
    var botonEntrar = document.querySelector("#entrarCliente");
    var botonAdministrador = document.querySelector("#entrarAdmin");

    contenedorDos.innerHTML = "";
    botonEntrar.disabled = false;
    botonAdministrador.disabled = false;
}

function anadir2() {
    var valorNombre2 = document.querySelector("#nombre").value;
    var valorPrecio2 = document.querySelector("#precio").value;
    var valorStock2 = document.querySelector("#stock").value;

    var nuevo = new Producto(valorNombre2, valorPrecio2, valorStock2);
    arrayProductos.push(nuevo);
}

function modoCliente() {
    var botonEntrar = document.querySelector("#entrarCliente");
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
    th.innerHTML = "Nombre";
    thead.append(th);
    var th = document.createElement("th");
    th.innerHTML = "Precio";
    thead.append(th);
    var th = document.createElement("th");
    th.innerHTML = "Stock";
    thead.append(th);

    //Creacion de tbody
    var tbody = document.createElement("tbody");
    table.append(tbody);

    //Creacion de tr
    var tr = document.createElement("tr");
    tbody.append(tr);

    //Creacion de td
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[0].nombre;
    tr.append(td);
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[0].precio;
    tr.append(td);
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[0].stock;
    tr.append(td);
    var td = document.createElement("td");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check";
    td.append(check);
    tr.append(td);

    //Creacion de tr
    var tr = document.createElement("tr");
    tbody.append(tr);

    //Creacion de td
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[1].nombre;
    tr.append(td);
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[1].precio;
    tr.append(td);
    var td = document.createElement("td");
    td.innerHTML = arrayProductos[1].stock;
    tr.append(td);
    var td = document.createElement("td");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check";
    td.append(check);
    tr.append(td);

    //Creacion de boton comprar y volver
    var botonComprar = document.createElement("button");
    botonComprar.id = "comprar";
    botonComprar.disabled = true;
    botonComprar.innerHTML = "Comprar";
    contenedorDos.append(botonComprar);

    var botonVolver = document.createElement("input");
    botonVolver.type = "button";
    botonVolver.id = "volver";
    botonVolver.value = "Volver";
    contenedorDos.append(botonVolver);

    var botonVolver = document.querySelector("#volver");
    volver.addEventListener('click', () => {
        volverInicio();
    });

    var botonComprar = document.querySelector("#comprar");
    botonComprar.addEventListener('clik', () => {
        comprar();
    });

    //Comprobamos si hay algun check seleccionado
    var inputs = document.querySelectorAll(".check")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', () => {
            document.querySelector("#comprar").disabled = false;
        });
    }

    //Creamos el div
    var divNuevo = document.createElement("div");
    divNuevo.id = "divNuevo";
    contenedorDos.append(divNuevo);
}

var precioTotal = 0;

function comprar() {
    // Procedemos a comprar
    var tr = document.querySelectorAll("#tr");
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].lastElementChild.childNodes[0].checked) {
            var nombre = tr[i].childNodes[0].innerText;
            var precio = tr[i].childNodes[1].innerText;
            precioTotal += Number(precio);
            arrayProductos[i - 1].cambiarStock();
            document.getElementById("stock").innerHTML = arrayProductos[i - 1].stock
        }
    }
    //Mostramos el mensaje
    var div = document.querySelector("#divNuevo");
    div.innerHTML = "Total a pagar: " + precioTotal;

    //Cookie
    c = setCookie(nombre, precioTotal);
}