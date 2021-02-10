'use strict'

window.addEventListener('load', () => {

    /*Creamos la funcion constructora del objeto */
    function Libro(id, titulo, autor, prestamo, fechaEntrega) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.prestamo = prestamo;
        this.fechaEntrega = fechaEntrega;

        /* Creamos el metodo para cambiar fechaEntrega*/
        this.fechaEntrega = () => {
            fechaNueva = new Date();
            var unaSemanaMas = fechaNueva.getDate() + 7;
            fechaNueva.setDate(unaSemanaMas);
            this.fechaEntrega = fechaNueva
        };
    }


    /*Creamos los libros*/
    var quijote = new Libro(1, "Quijote", "Cervantes", false);
    var platero = new Libro(2, "Platero", "JuanRa", false);
    /*Almacenamos los libros en un array*/
    var arrayLibros = [
        quijote,
        platero
    ];

    /*Capturamos botones y div 2*/
    var botonAdministrador = document.querySelector("#entrarAdmin");
    var botonEntrar = document.querySelector("#entrarCliente");
    var contenedorDos = document.querySelector("#contenedorDos");

    /*Capturamos el evento click sobre el boton administrador*/
    botonAdministrador.addEventListener('click', () => {

        /*Creamos el formulario*/
        var form = document.createElement('form');
        form.id = 'form';

        /*Creamos input y label para ID*/
        var label1 = document.createElement('label');
        label1.for = 'id';
        label1.innerHTML = 'Introduce el ID: ';
        var input1 = document.createElement('input');
        input1.type = 'number';
        input1.name = 'id';
        input1.id = 'id';

        /*Creamos un salto*/
        var salto1 = document.createElement('br');

        /*Creamos input y label para TITULO*/
        var label2 = document.createElement('label');
        label2.for = 'titulo';
        label2.innerHTML = 'Introduce el TITULO: ';
        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'titulo';
        input2.id = 'titulo';

        /*Creamos un salto*/
        var salto2 = document.createElement('br');

        /*Creamos input y label para AUTOR*/
        var label3 = document.createElement('label');
        label3.for = 'autor';
        label3.innerHTML = 'Introduce el AUTOR: ';
        var input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = 'autor';
        input3.id = 'autor';

        /*Creamos un salto*/
        var salto3 = document.createElement('br');

        /*Creamos el boton añadir y volver*/
        var botonAñadir = document.createElement('button');
        botonAñadir.type = 'submit';
        botonAñadir.innerHTML = 'Añadir';
        botonAñadir.id = 'añadir';
        var botonVolver = document.createElement('button');
        botonVolver.id = 'volver';
        botonVolver.innerHTML = 'Volver';

        /*Metemos todo lo creado*/
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
        form.appendChild(botonAñadir);
        form.appendChild(botonVolver);



        /*Deshabilitado de botones*/
        botonAdministrador.disabled = true;
        botonEntrar.disabled = true;
        botonAñadir.disabled = true;


        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });


        /*Validacion formulario*/
        var todosCampos = document.querySelector('#form').elements;


        for (let i = 0; i < todosCampos.length; i++) {
            console.log(todosCampos[i]);

        }




    });

    /*Capturamos el evento click sobre el boton Entrar*/
    botonEntrar.addEventListener('click', () => {

        /*Creamos los elementos de la tabla*/
        var tabla = document.createElement('table');
        var tHead = document.createElement('thead');
        var tr = document.createElement('tr');
        var tBody = document.createElement('tbody');
        var botonPrestamo = document.createElement('button');
        botonPrestamo.type = 'submit';
        botonPrestamo.innerHTML = 'Prestamo';
        botonPrestamo.id = 'prestamo';
        var botonVolver = document.createElement('button');
        botonVolver.id = 'volver';
        botonVolver.innerHTML = 'Volver';

        /*Metemos todo lo creado, teniendo en cuenta que el thead y el tbody se 
        rellena por un for*/
        contenedorDos.appendChild(tabla);
        tabla.appendChild(tHead);
        tHead.appendChild(tr);
        /*Aqui realizamos el for para el thead*/
        var keysThead = Object.keys(quijote);
        keysThead.length = keysThead.length - 2;
        keysThead.push('Seleccion');
        for (let i = 0; i < keysThead.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = keysThead[i].toUpperCase();
            tr.appendChild(th);
        }
        /*Seguimos*/
        tabla.appendChild(tBody);
        /*Aqui realizamos el foreach para el tbody*/
        for (let i = 0; i < arrayLibros.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = arrayLibros[i].id;
            var td2 = document.createElement("td");
            td2.innerHTML = arrayLibros[i].titulo;
            var td3 = document.createElement("td");
            td3.innerHTML = arrayLibros[i].autor;
            var check = document.createElement("input");
            check.type = 'checkbox';
            check.name = 'checkbox';
            check.className = 'checkbox';
            tBody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(check);
        }
        /*Seguimos*/
        contenedorDos.appendChild(botonPrestamo);
        contenedorDos.appendChild(botonVolver);

        /*Deshabilitado de botones*/
        botonAdministrador.disabled = true;
        botonEntrar.disabled = true;
        botonPrestamo.disabled = true;

        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });



        /*Capturamos los checkboxs*/
        var checkboxs = document.querySelectorAll(".checkbox");

        /*Creamos contador para comprobar si selecciona mas de 1 libro*/
        var contador = 0;
        /*Comprobaciones de checkboxs*/
        for (let i = 0; i < checkboxs.length; i++) {
            checkboxs[i].addEventListener('change', function () {
                if (this.checked) {
                    contador++;
                    console.log(contador);
                    console.log('El checkbox ' + i + ' ha cambiado');
                } else if (!this.checked) {
                    console.log('El checkbox ' + i + ' ha vuelto a cambiar');
                    contador--;
                    console.log(contador);
                }
                if (contador != 1) {
                    botonPrestamo.disabled = true;
                } else if (contador == 1) {
                    botonPrestamo.disabled = false;
                    //Capturar el que esta cheked
                    console.log(checkboxs[i]);
                    botonPrestamo.addEventListener('click', () => {

                    });

                }
                if (contador == 2) {
                    alert('No puedes seleccionar mas de 2 libros');
                }
            });

        }






    });



});