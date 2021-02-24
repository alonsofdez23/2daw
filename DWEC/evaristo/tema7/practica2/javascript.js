$(function() {
    // Ponemos el número
    $("#text").on('keyup', function (e) {
        var text = $("#text").val();
        if (!isNaN(text) && parseInt(text) >= 1 && parseInt(text) <= 5) {
            $("#b1")[0].disabled = false;
        } else {
            $("#b1")[0].disabled = true;
        }
    });

    $("#b1").on('click', function (e) {
        // Aparecen los círculos
        $("#div").fadeOut('fast', function () {
            var num = $("#text").val();
            var div = $("<div id='div2'>");
            var enca = $("<h1 id='enc'>");
            enca.text(num);
            div.append(enca);
            var b = $("<input type='button' value='Añadir' id='b2'>")
            div.append(b);
            var divD = $("<div id='divD'>");
            for (let i = 0; i < parseInt(num); i++) {
                var circle = $("<div class='circle'>");
                divD.append(circle);
            }
            div.append(divD);
            $("body").append(div);

            // Añadir círculos
            if (num == "5") {
                $("#b2")[0].disabled = true;
            } else {
                $("#b2").on('click', function (e) {
                    var dentro = $("#divD");
                    dentro.fadeOut('fast', function () {
                        var circle = $("<div class='circle'>");
                        circle.hover(cambiaColor);
                        circle.on('click', cambiaOpacidad);
                        // circle.on('mouseout', daOpacidad);
                        dentro.append(circle);
                    });
                    dentro.fadeIn('fast', function () {
                        num = parseInt(num) + 1;
                        $("#enc").text(num);
                        if (num == 5) {
                            $("#b2")[0].disabled = true; 
                        }
                    });
                });
            }
            // Comportamiento círculos
            $(".circle").hover(cambiaColor);

            function cambiaColor() {
                $(this).toggleClass("brown");
            }

            $(".circle").on('click', cambiaOpacidad);

            function cambiaOpacidad() {
                $(this).toggleClass("opacity");
                $(this).on('click', function (e) {
                    if (num != "1") {
                        $(this).fadeOut('fast', function (e) {
                            num = parseInt(num) - 1;
                            $("#enc").text(num);
                        })
                    } else {
                        alert("No se puede eliminar todos los círculos")
                    }
                })
            }

            // $(".circle").on('mouseout', daOpacidad);

            // function daOpacidad() {
            //     $(this).animate({
            //         opacity: "1"
            //     });
            //     preventDefault();
            // }
        });
    })
});