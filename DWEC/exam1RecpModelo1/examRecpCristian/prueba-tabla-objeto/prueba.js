'use strict'

window.addEventListener('load', () => {
    function Producto(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

        //Creamos un metodo para cambiar el stock
        /*
        this.cambiarStock = () => {
            this.stock -= 1;
        };*/
    }

    var langostino = new Producto("Langostinos", 20, 3);
    var manzanilla = new Producto("Manzanilla", 10, 3);
    var arrayProductos = [langostino, manzanilla]

    //Capturamos div
    var principal = document.getElementById("principal");

    //Creamos tabla
    var tabla = document.createElement("table");

    principal.append(tabla);

    //Creamos thead
    var thead = document.createElement("thead");
    tabla.append(thead);

    //Creamos tr1 de thead donde meter los th
    var tr1 = document.createElement("tr");
    thead.append(tr1);

    //Bucle donde meter los objects.keys
    var keys = Object.keys(langostino);
    for (let i = 0; i < keys.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = keys[i].toUpperCase();
        tr1.append(th);

    }

    //Creamos tbody
    var tbody = document.createElement("tbody");
    tabla.append(tbody);

    //Bucle para meter los valores de cada objeto

    arrayProductos.forEach(emp => {
        var tr = document.createElement("tr");

        Object.values(emp).forEach(text => {
            var td = document.createElement("td");
            var textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);

        })
        tbody.appendChild(tr);
    });




});