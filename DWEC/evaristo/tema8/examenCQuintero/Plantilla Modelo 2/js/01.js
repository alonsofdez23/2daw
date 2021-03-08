$(function () {

    //Capturamos la tabla y hacemos que aparezca a fundido rapido
    var encabezado = $("#encabezado");
    encabezado.css("display", "none");
    encabezado.fadeIn("fast");

    // Peticion del listado de usuarios
    $.ajax({
            type: "GET",
            dataType: "json",
            url: "https://jsonplaceholder.typicode.com/users",
        })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("Todo OK!");
            }
            //Capturamos la tabla
            var tabla = $("#tabla");
            //Creeamos el tbody con los datos solicitados
            var tbody = $("<tbody>");
            //Introducimos tbody en la tabla
            tabla.append(tbody);
            //Introducimos los datos de los usuarios en la tabla dinamicamente
            for (let i = 0; i < data.length; i++) {
                var tr = $("<tr>");
                tbody.append(tr);
                var td1 = $("<td>");
                td1.text(data[i].id);
                tr.append(td1);
                var td2 = $("<td>");
                td2.text(data[i].email);
                tr.append(td2);
                var td3 = $("<td>");
                td3.text(data[i].address.city);
                tr.append(td3);
            }
            //Oculto y muestro el tbody
            tbody.css("display", "none");
            tbody.fadeIn(3000, esPar());

            function esPar() {
                var trPares = $("tr:even");
                trPares.id = "pares";
            }

            tbody.on('click', 'tr td', (x) => {
                //console.log(x.target); Se que los tiros van por el target, pero me he liado.
                //Me invento el id
                var idfalso = 1;
                $.ajax({
                        //data: {
                        //    "userId": idfalso
                        //},
                        type: "GET",
                        dataType: "json",
                        url: "https://jsonplaceholder.typicode.com/users/1/todos",

                    })
                    .done(function (data2, textStatus2, jqXHR2) {
                        if (console && console.log) {
                            console.log("Todo OK!");
                        }

                        //console.log(data2);
                        var todosTotal = data2.length;
                        var tituloTercer = data2[2].title;
                        alert("El numero total de todos es: " + todosTotal + " y el titulo del tercer to-do es: " + tituloTercer);
                    })
                $("table").hide("slow"); //Lee la linea 91

                var idGeneral = $("#general");
                var label1 = $("<label>");
                label1.text("Titulo: ");
                var input1 = $("<input>");
                var label2 = $("<label>");
                label2.text("¿Completada?");
                var input2 = $("<input>");
                var botonCrear = $("<button>");
                //botonCrear.attr("disabled", "true");
                botonCrear.text("Crear to-do");


                idGeneral.append(label1);
                idGeneral.append(input1);
                idGeneral.append(label2);
                idGeneral.append(input2);
                idGeneral.append(botonCrear);

                botonCrear.click(() => {
                    //El ajax esta comentado, para poder volver a ver la tabla
                    //y hacer click en algun otro, reinicia la pagina.

                    //Capturamos el valor de los inputs
                    var titulo = input1.val();
                    var completado = input2.val();

                    //Esto seria el ajax si supiera obtener bien el id del usuario de la tabla
                    /*$.ajax({
                            type: "POST",
                            typeData: "json",
                            url: "https://jsonplaceholder.typicode.com/todos",
                            data: {
                                "id": idquehayqueenviar,
                                "title": titulo,
                                "completed": completado(boolean)
                            }
                        })
                        .done(function (data2, textStatus2, jqXHR2) {
                            alert("El id del nuevo todo, el id del usuario").
                            $("table").show("slow");
                        })*/

                });



            });


        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("La solicitud ha falaldo: " + textStatus);
            }
        })
});