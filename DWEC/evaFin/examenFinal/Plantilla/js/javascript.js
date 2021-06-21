$(function() {

    crearUsuario = (email, calle, doNewUser) => {
        let newUser = {
            email: email,
            address: {
                street: calle
            }
        }

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            data: JSON.stringify(newUser),
            contentType: "application/json",
            dataType: "json"
        }).done((response) => {
            doNewUser(response.id)
        })
    }

    let idUsers = [];

    crearUsuarios = () => {
        crearUsuario("alonso@gmail.com", "Calle Alonso", (id) => {
            let idNewUser = id + 0
            idUsers.push(idNewUser.toString())

            crearUsuario("mize@gmail.com", "Calle Mize", (id) => {
                let idNewUser = id + 1
                idUsers.push(idNewUser.toString())

                crearUsuario("aaron@gmail.com", "Calle Aaron", (id) => {
                    let idNewUser = id + 2
                    idUsers.push(idNewUser.toString())
                })
            })
        })
    }

    crearUsuarios();

    let buttonConsultar = $("<button>").text("Consultar")
    let body = $("body")

    body.append(buttonConsultar)

    buttonConsultar.click(() => {
        let inputUser = $("<input>")
        inputUser.attr("id", "idUser")

        let buttonUser = $("<button>")
        buttonUser.text("Usuarios")
        buttonUser.prop("disabled", true)

        let divUser = $("<div>")

        divUser.hide()
        body.append(divUser)
        divUser.append(inputUser, buttonUser)                

        divUser.fadeIn("fast")

        function validarInput() {
            let textInput = inputUser.val()

            let idsArray = idUsers.includes(textInput)

            if ((textInput == "") || (idsArray == true)) {
                buttonUser.prop("disabled", true)
            } else {
                buttonUser.prop("disabled", false)
            }
        }

        inputUser.blur(validarInput)
        buttonUser.click(consultarUsuario)
    })

    function consultarUsuario(event) {
        let buttonClick = event.target

        let divPadre = $(buttonClick).parent()[0]
        let inputId = divPadre.firstChild

        let idUser = inputId.value
        
        $.getJSON(`https://jsonplaceholder.typicode.com/users/${idUser}`)
            .done((response) => {
                /* 
                * Intenté hacer uso del DOM a través de JS Vanilla, sin embargo
                * me causaba algunos errores, por lo tanto recurrí a la librería
                * de JQuery para no generar la tabla de mala manera.
                */

                let tabla = $("<table>")

                let cabecera = crearFila("ID", "DATO", false)
                tabla.append(cabecera)

                let fila1 = crearFila(idUser, response.name)
                tabla.append(fila1)

                let fila2 = crearFila(idUser, response.address.zipcode)
                tabla.append(fila2)

                let fila3 = crearFila(idUser, response.address.geo.lat)
                tabla.append(fila3)

                $("body").append(tabla)

                $("tr").hover(
                    (celda) => {
                        $(celda.target).parent().addClass("bold")
                    },
                    (celda) => {
                        $(celda.target).parent().removeClass("bold")
                    }
                )
            })
    }

    function crearFila(id, datos, tdRow = true) {
        let fila = $("<tr>")
        let celda1 = $(tdRow ? "<td>" : "<th>").text(id)
        let celda2 = $(tdRow ? "<td>" : "<th>").text(datos)
        fila.append(celda1, celda2)

        if (tdRow == true) {
            fila.dblclick(() => {
                $(fila.children()[0]).toggleClass("gris")
            })
        }

        return fila
    }
})