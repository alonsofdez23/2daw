$(function() {
    function obtenerListadoUsuarios() {
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json"
        })
            .done(mostrarInformacionUsuarios)
    }

    function mostrarInformacionUsuarios(datos) {
        console.log(datos)
        let cuerpo = $("#tbody");

        let tabla = $("table");

        for (usuario of datos) {
            let id = usuario.id;
            let nombre = usuario.name;
            let cpostal = usuario.address.zipcode;

            let fila = $("<tr>");

            crearTd(id, fila);
            crearTd(nombre, fila);
            crearTd(cpostal, fila);

            
            cuerpo.append(fila);
        }

        tabla.fadeIn("slow")
    }

    function crearTd(contenido, contenedor) {
        let td = $("<td>").text(contenido);
        contenedor.append(td);
    }

    function crearUsuario(email, calle) {
        let cuerpo = $("#tbody");


    }

    function mostrarInputs(datos) {
        let div = $("#contenido");
        div.text("")
        div.hide();

        let input = $("<input type='text' id='input'>");
        let button = $("<button id='crear' disabled>");
        button.text("Usuarios");

        div.append(
            input,
            button
        );

        div.fadeIn("fast");

        $("input").blur(validarCampos);
    }

    function validarCampos() {
        $("#crear").attr("disabled", true);

        let input = $("#input").val();

        if (input != "") {
            $("#crear").attr("disabled", false);
        }
    }

    function cambiaFondoFila() {
        console.log("hola")
        let fila = $("tr")

        if (fila.css("background-color", "white")) {
            fila.css("background-color", "gray")
        } else {
            fila.css("background-color", "white")
        }
    }

    function cambiaTexto() {
        let fila = $("tr")

        fila.css("font-weight", "bold")
    }

    $("tr").dblclick(cambiaFondoFila);
    $("tr").hover(cambiaTexto);
    
    $("#consultar").click(mostrarInputs);
    
    $("#tabla").hide();
    
    obtenerListadoUsuarios();
});