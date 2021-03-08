$(function () {

    function obtenerListadoUsuarios() {
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json"
        })
            .done(mostrarInformacionUsuarios)
    }

    function mostrarInformacionUsuarios(datos) {
        let cuerpo = $("#tbody");

        for (usuario of datos) {
            let id = usuario.id;
            let email = usuario.email;
            let ciudad = usuario.address.city;

            let fila = $("<tr>");

            crearTd(id, fila);
            crearTd(email, fila);
            crearTd(ciudad, fila);

            
            cuerpo.append(fila);
        }

        $("tr").hover(cambiaFondoFila, devuelveFondoFila);
        $("tr").click(obtenerToDos);

        $("#thead").fadeIn("fast", () => {
            mostrarCuerpoTabla(cuerpo)
        })
    }

    function mostrarCuerpoTabla(cuerpo) {
        $("#tabla").append(cuerpo)
        $("#tabla").fadeIn(3000);
    }

    function crearTd(contenido, contenedor) {
        let td = $("<td>").text(contenido);
        contenedor.append(td);
    }
    
    function cambiaFondoFila() {
        $("tr:even").css("background-color","gray");
        $("tr:odd").css("background-color","green")
    }
    
    function devuelveFondoFila() {
        $(this).css("background-color","white");
    }

    function obtenerToDos() {
        let td = $(this).children();
        let id = td.first().text();
        
        let url = `https://jsonplaceholder.typicode.com/users/${id}/todos`;

        $.ajax({
            type: "GET",
            url: url,
            dataType: "json"
        })
            .done((datos) => {
                $("#tabla").fadeOut("fast");
                mostrarToDos(datos);
                mostrarInputs(datos);
            })
    }

    function mostrarToDos(datos) {
        let contador = datos.length;
        let tercerToDo = datos[2].title;

        alert("El usuario tiene " + contador + " To-Dos que hacer");
        alert("Su tercer To-Do es: " + tercerToDo)
    }

    function mostrarInputs(datos) {
        let div = $("#contenido");
        div.text("")
        div.hide();

        let inputTitulo = $("<input type='text' id='titulo'>");
        let inputBool = $("<input type='text' id='bool'>");
        let button = $("<button id='crear' disabled>");
        button.text("Crear to-do");

        div.append(
            inputTitulo,
            inputBool,
            button
        );

        div.fadeIn("fast");

        $("input").blur(validarCampos);

        let id = datos[0].userId;
        $("#crear").click(() => {
            crearToDo(id);
        });
    }
    
    function validarCampos() {
        $("#crear").attr("disabled", true);

        let titulo = $("#titulo").val();
        let bool = $("#bool").val().toLowerCase();

        if (titulo != "" && (bool == "si" || bool == "no")) {
            $("#crear").attr("disabled", false);
        }
    }

    function crearToDo(id) {
        let titulo = $("#titulo").val();
        let bool = $("#bool").val().toLowerCase();
        let completed = false;

        if (bool == "si") {
            completed = true;
        }

        let datosEnviar = {
            userId: id,
            title: titulo,
            completed: completed
        };

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/todos",
            dataType: "json",
            data: datosEnviar
        })
            .done((datos) => {
                alert("ID to-do: " + datos.id + " e ID usuario: " + datos.userId);
                $("#tabla").fadeIn("fast");
            })
    }

    $("#tabla").hide();

    obtenerListadoUsuarios();
});