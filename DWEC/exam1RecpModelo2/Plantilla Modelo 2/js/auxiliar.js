'use strict'

window.addEventListener('load', () => {

    function Menu(id, platos, precio, bebida = '') {
        this.id = id;
        this.platos = platos;
        this.precio = precio;
        this.bebida = bebida;

        this.cambiarBebida = function (nuevaBebida) {
            this.bebida = nuevaBebida;
        };
    }

    var sopa = new Menu (1, ["Sopa", "Pollo", "Yogurt"], 10.25);
    var ensalada = new Menu (2, ["Ensalada", "Ternera", "Flan"], 10.95);

    // Almacenamos los menus en un array
    var arrayMenus = [sopa, ensalada];

    // Capturamos buttons y div2
    var botonAdmin = document.querySelector("#entrarAdmin");
    var botonEnter = document.querySelector("#entrarCliente");
    var contenedorDos = document.querySelector("#contenedorDos");

    botonAdmin.addEventListener('click', () => {

        var form = document.createElement('form');
        form.id = 'form';

        // Creamos input y label para ID
        var label1 = document.createElement('label');
        label1.for = 'id';
        label1.innerHTML = 'Id: ';
        var input1 = document.createElement('input');
        input1.type = 'number';
        input1.name = 'id';
        input1.id = 'id';

        //Creamos un salto
        var salto1 = document.createElement('br');

        // Creamos input y label para PRIMER PLATO
        var label2 = document.createElement('label');
        label2.for = 'plato1';
        label2.innerHTML = 'Primer plato: ';
        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'plato1';
        input2.id = 'plato1';

        // Creamos un salto
        var salto2 = document.createElement('br');

        // Creamos input y label para SEGUNDO PLATO
        var label3 = document.createElement('label');
        label3.for = 'plato2';
        label3.innerHTML = 'Segundo plato: ';
        var input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = 'plato2';
        input3.id = 'plato2';

        //Creamos un salto
        var salto3 = document.createElement('br');

        // Creamos input y label para POSTRE
        var label4 = document.createElement('label');
        label4.for = 'postre';
        label4.innerHTML = 'Postre: ';
        var input4 = document.createElement('input');
        input4.type = 'text';
        input4.name = 'postre';
        input4.id = 'postre';

        // Creamos un salto
        var salto4 = document.createElement('br');

        // Creamos input y label para PRECIO
        var label5 = document.createElement('label');
        label5.for = 'precio';
        label5.innerHTML = 'Precio: ';
        var input5 = document.createElement('input');
        input5.type = 'number';
        input5.name = 'precio';
        input5.id = 'precio';

        // Creamos un salto
        var salto5 = document.createElement('br');

        // Creamos el boton añadir y volver
        var botonAdd = document.createElement('button');
        botonAdd.type = 'submit';
        botonAdd.innerHTML = 'Añadir';
        botonAdd.id = 'añadir';
        var botonBack = document.createElement('button');
        botonBack.id = 'volver';
        botonBack.innerHTML = 'Volver';

        // Insertamos lo creado
        contenedorDos.appendChild(form);
        form.appendChild(label1);
        form.appendChild(input1);
        form.appendChild(salto1);
        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(salto2);
        form.appendChild(label3);
        form.appendChild(input3);
        form.appendChild(salto3);
        form.appendChild(label4);
        form.appendChild(input4);
        form.appendChild(salto4);
        form.appendChild(label5);
        form.appendChild(input5);
        form.appendChild(salto5);
        form.appendChild(botonAdd);
        form.appendChild(botonBack);



        // Deshabilitado de botones
        botonAdmin.disabled = true;
        botonEnter.disabled = true;
        botonAdd.disabled = true;


        // Capturamos el evento click sobre el boton Volver
        botonVolver.addEventListener('click', () => {

            // Limpiamos el contenedorDos
            contenedorDos.innerHTML = ' ';

            // Habilitacion de botones
            botonAdmin.disabled = false;
            botonEnter.disabled = false;
        });
    });

    botonEnter.addEventListener('click', () => {

        // Creamos tabla
        var tabla = document.createElement('table');
        var tHead = document.createElement('thead');
        var tr = document.createElement('tr');
        var tBody = document.createElement('tbody');
        var botonPrestamo = document.createElement('button');
        botonPrestamo.type = 'submit';
        botonPrestamo.innerHTML = 'Prestamo';
        botonPrestamo.id = 'prestamo';
        var botonBack = document.createElement('button');
        botonBack.id = 'volver';
        botonBack.innerHTML = 'Volver';

        contenedorDos.appendChild(tabla);
        tabla.appendChild(tHead);
        tHead.appendChild(tr);

        var keysThead = Object.keys(sopa);
        keysThead.length = keysThead.length - 2;
        keysThead.push('Seleccion');
        for (let i = 0; i < keysThead.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = keysThead[i].toUpperCase();
            tr.appendChild(th);
        }

        tabla.appendChild(tBody);

        for (let i = 0; i < arrayMenus.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = arrayMenus[i].id;
            var td2 = document.createElement("td");
            td2.innerHTML = arrayMenus[i].platos;
            var td3 = document.createElement("td");
            td3.innerHTML = arrayMenus[i].precio;

            var check = document.createElement("input");
            check.type = 'checkbox';
            check.name = 'checkbox';
            check.classname = 'checkbox';

            tBody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(check);
        }

        contenedorDos.appendChild(botonPrestamo);
        contenedorDos.appendChild(botonBack);

        botonAdmin.disabled = true;
        botonEnter.disabled = true;
        botonPrestamo.disabled = true;

        botonBack.addEventListener('click', () => {

            contenedorDos.innerHTML = ' ';

            botonAdmin.disabled = false;
            botonEnter.disabled = true;
        });

        var checkboxs = document.querySelectorAll(".checkbox");

        var contador = 0;
    })
});