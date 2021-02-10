'use strict'

window.addEventListener('load', () => {

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
    var pera = new Producto("Pera", 30, 3);
    var arrayProductos = [langostino, manzanilla, pera]


    //Capturamos div
    var principal = document.getElementById("principal2");

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
    keys.pop();
    for (let i = 0; i < keys.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = keys[i].toUpperCase();
        tr1.append(th);
    }

    //Creamos tbody
    var tbody = document.createElement("tbody");
    tabla.append(tbody);

    //Bucle para meter los valores de cada objeto
    for (let i = 0; i < arrayProductos.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = arrayProductos[i].nombre;
        var td2 = document.createElement("td");
        td2.innerHTML = arrayProductos[i].precio;
        var td3 = document.createElement("td");
        td3.innerHTML = arrayProductos[i].stock;
        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }




});