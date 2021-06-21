$(function() {   
    let l = console.log

    //let idUsuarios = ["1", "2", "3"]
    let idUsuarios = []

    crearUsuario = (email, calle, queHacerConElNuevoUsuario) => {

        let usuarioNuevo = { 
            email: email,
            address: {
                street: calle
            }
        }
        //console.log(usuarioNuevo)
        // --Hace la llamada POST, pero como 'Content-Type' envía el correspondiente a un formulario--
        //$.post("https://jsonplaceholder.typicode.com/users", usuarioNuevo)

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            data: JSON.stringify(usuarioNuevo),
            contentType: "application/json",
            dataType: "json"
        }).done((respuesta) => {
            queHacerConElNuevoUsuario(respuesta.id)
        })

        //console.log(usuarioNuevo)
        //console.log(JSON.stringify(usuarioNuevo))
    }

//    crearUsuario("adrian@toloko.com", "avenida huelva")


    crearUsuarios = () => {
        crearUsuario("adrian@gmail.com", "calle las dunas", (id) => {
            let idNuevoUsuario = id + 1
            idUsuarios.push(idNuevoUsuario.toString())

            // Ya sé que la primera llamada ha terminado
            crearUsuario("enrique@gmail.com", "calle la plata", (id) => {
                let idNuevoUsuario = id + 2
                idUsuarios.push(idNuevoUsuario.toString())

                // Ya sé que la segunda llamada ha terminado
                crearUsuario("antonio@gmail.com", "calle ni idea", (id) => {
                    let idNuevoUsuario = id + 3
                    idUsuarios.push(idNuevoUsuario.toString())

                    console.log(idUsuarios)
                })
            })
        })
    }
    
    crearUsuarios()   
   
    
    //let otroInput = document.createElement("input")     
    //body.append(botonConsultar, otroInput)      
    body.append(botonConsultar)      
    botonConsultar.click(() => {
        //l("hola")
        //console.log(otroInput.value)    
        let inputUsuario = $("<input>").attr("id", "idUsuario")
        let botontUsuario = $("<button>").text("Consultar información usuario con ID").prop("disabled", true)
        let divUsuario = $("<div>")     
        divUsuario.hide()   
        body.append(divUsuario)
        divUsuario.append(inputUsuario, botontUsuario)                

        divUsuario.fadeIn(300)
   
        function validarInput() {
            let textoInput = inputUsuario.val()   
            //let idContenidoEnArray = idUsuarios.includes(parseInt(textoInput))
            let idContenidoEnArray = idUsuarios.includes(textoInput)

            if ((textoInput == "") || (idContenidoEnArray)){
                botontUsuario.prop("disabled", true)
            } else {
                botontUsuario.prop("disabled", false)
            }
        
            /*console.log(idContenidoEnArray)
            console.log(textoInput)
            console.log(idUsuarios)*/
        }
    
        inputUsuario.blur(validarInput)

        botontUsuario.click(consultarUsuario)
    })

    function consultarUsuario(event) {
        console.log()
        //let inputUsuarioBuscado = $("#idUsuario")[0]

        let botonClick = event.target

        let divPadre = $(botonClick).parent()[0]
        let inputId = divPadre.firstChild

        let idUsuario = inputId.value
        
        $.getJSON("https://jsonplaceholder.typicode.com/users/" + idUsuario)
            .done((respuesta) => {
                let tabla = $("<table>")

                let cabecera = crearFila("ID", "DATO", false)
                tabla.append(cabecera)

                let fila1 = crearFila(idUsuario, respuesta.name)
                tabla.append(fila1)

                let fila2 = crearFila(idUsuario, respuesta.address.zipcode)
                tabla.append(fila2)

                let fila3 = crearFila(idUsuario, respuesta.address.geo.lat)
                tabla.append(fila3)

                $("body").append(tabla)

                /*$("tr").dblclick((evento) => {
                    let fila = $(evento.target).parent()
                    $(fila.children()[0]).toggleClass("gris")
                })*/

                $("tr:even").hover(
                    (celda) => {
                        $(celda.target).parent().addClass("rojo")
                    },
                    (celda) => {
                        $(celda.target).parent().removeClass("rojo")
                    }
                )

                $("tr:odd").hover(
                    (celda) => {
                        $(celda.target).parent().addClass("verde")
                    },
                    (celda) => {
                        $(celda.target).parent().removeClass("verde")
                    }
                )
            })

    }

    function crearFila(id, dato, esFilaNormal = true) {
        let fila = $("<tr>")
        let celda1 = $(esFilaNormal ? "<td>" : "<th>").text(id)
        let celda2 = $(esFilaNormal ? "<td>" : "<th>").text(dato)
        fila.append(celda1, celda2)

        if (esFilaNormal) {
            fila.dblclick(() => {
                $(fila.children()[0]).toggleClass("gris")
            })

            /*fila.hover(
                () => {
                    fila.addClass("negrita")
                },
                () => {
                    fila.removeClass("negrita")
                }
            )*/
        }

        return fila
    }


  });