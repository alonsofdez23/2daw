$(function(){
    function crearTd(contenido, contenedor) {
        let td = $("<td>").text(contenido)
        contenedor.append(td)
    }

    function solicitarInformacion() {
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json"
        })
            .done(mostrarInformacion)
    }

    function mostrarInformacion(respuestaJson) {
        console.log(respuestaJson);
        let usuarios = respuestaJson;

        let tabla = $("table")

        for (usuario of usuarios) {

            let id = usuario.id;
            let email = usuario.email;
            let ciudad = usuario.address;
            
            let fila = $("<tr>")

            crearTd(id, fila);
            crearTd(email, fila);
            crearTd(ciudad, fila);
            
            tabla.append(fila)
        }

        tabla.fadeIn("fast")
    }

    $("table").hide()
    solicitarInformacion();
})