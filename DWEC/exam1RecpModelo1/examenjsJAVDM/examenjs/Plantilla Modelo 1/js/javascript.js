// Constructor y creación del objeto Producto
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.cambiarStock = function() {
        this.stock -= 1;
    }
}

var langostino = new Producto("Langostinos", 20, 3);
var manzanilla = new Producto("Manzanilla", 10, 3);
var arrayProd = [langostino, manzanilla];

// Llamado de eventos iniciales
document.getElementById("entrarAdmin").addEventListener('click', admin);
document.getElementById("entrarCliente").addEventListener('click', cliente);

function admin(elEvento) {
    var evento = elEvento || window.event;
    // Creación del formulario en modo administrador
    var contenedor = document.getElementById("contenedorDos");
    var br = document.createElement("br");

    var label1 = document.createElement("label");
    label1.for = "nombre";
    label1.innerHTML = "Nombre: ";
    contenedor.appendChild(label1);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "nombre";
    input1.name = "nombre";
    contenedor.appendChild(input1);
    contenedor.appendChild(br);

    br = document.createElement("br");
    var label2 = document.createElement("label");
    label2.for = "precio";
    label2.innerHTML = "Precio: ";
    contenedor.appendChild(label2);
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "precio";
    input2.name = "precio";
    contenedor.appendChild(input2);
    contenedor.appendChild(br);
    
    br = document.createElement("br");
    var label3 = document.createElement("label");
    label3.for = "stock";
    label3.innerHTML = "Stock: ";
    contenedor.appendChild(label3);
    var input3 = document.createElement("input");
    input3.type = "number";
    input3.id = "stock";
    input3.name = "stock";
    contenedor.appendChild(input3);
    contenedor.appendChild(br);

    var button1 = document.createElement("input");
    button1.type = "button";
    button1.id = "añadir";
    button1.value = "Añadir";
    button1.disabled = true;
    contenedor.appendChild(button1);
    var button2 = document.createElement("input");
    button2.type = "button";
    button2.id = "volver";
    button2.value = "Volver";
    contenedor.appendChild(button2);

    // Desactivación de botones 
    document.getElementById("entrarCliente").disabled = "disabled";
    document.getElementById("entrarAdmin").disabled = "disabled";

    // Llamada a eventos
    document.getElementById("volver").addEventListener('click', volver);
    document.getElementById("añadir").addEventListener('click', añadir);

    // Validación de datos
    document.getElementById("stock").addEventListener('blur', validar);

    function validarNombre() {
        var nom = document.getElementById("nombre").value;
        if (nom == "" || nom == null || nom.length == 0 ) {
            alert("El nombre no puede estar vacío");
            return false;
        }
        return true;
    }

    function validarPrecio() {
        var pricE = document.getElementById("precio");
        var pric = pricE.value;
        pricE.pattern = "^\\d{2}[.]\\d{2}$"
        if (pric == "" || pric == null || pric.length == 0 ) {
            alert("El precio no puede ser vacío");
            return false;
        }
        if (!pricE.checkValidity()) {
            if (pricE.validity.patternMismatch) {
                return false;
            }
        }
        return true;
    }

    function validarStock() {
        var stcE = document.getElementById("stock");
        var stc = stcE.value;
        stcE.min = "0";
        if (stc == "" || stc == null || stc.length == 0 ) {
            alert("El stock no puede ser vacío");
            return false;
        }
        if (!stcE.checkValidity()) {
            if (stcE.validity.rangeUnderflow) {
                return false;
            }
        }
        return true;
    }
    function validar(elEvento) {
        if (validarNombre() && validarPrecio() && validarStock()) {
            document.getElementById("añadir").disabled = false;
        }
    }
}

function añadir(elEvento) {
    var evento = elEvento || window.event;
    // Añade un nuevo producto al array
    var nom = document.getElementById("nombre").value;
    var price = document.getElementById("precio").value;
    var stock = document.getElementById("stock").value;

    var nuevo = new Producto(nom, price, stock);
    arrayProd.push(nuevo);
}

function volver(elEvento) {
    var evento = elEvento || window.event;

    // Volvemos a la pagina de inicio sin perder datos
    document.getElementById("contenedorDos").innerHTML = "";
    document.getElementById("entrarCliente").disabled = false;
    document.getElementById("entrarAdmin").disabled = false;
}
function cliente(elEvento) {
    var evento = elEvento || window.event;

    // Desactivación de botones 
    document.getElementById("entrarCliente").disabled = "disabled";
    document.getElementById("entrarAdmin").disabled = "disabled";

    // Creación de la tabla de productos
    var tabla = "<table><thead><th>NOMBRE</th><th>PRECIO</th><th>STOCK</th><th>SELECCIÓN</th></thead><tbody>";
    for (i = 0; i < arrayProd.length; i++) {
        tabla += "<tr><td>" + arrayProd[i].nombre + "</td><td>" +
            arrayProd[i].precio + "</td><td id='stockT'>" + arrayProd[i].stock +
            "</td><td><input type='checkbox' class='selecc'></td></tr>"
    }
    tabla += "</tbody></table> <button id='comprar' disabled>Comprar</button><input type='button' value='Volver' id='volver'>";

    document.getElementById("contenedorDos").innerHTML = tabla;

    // Llamada a eventos
    document.getElementById("volver").addEventListener('click', volver);
    document.getElementById("comprar").addEventListener('click', comprar);

    // Comprueba que hay algún checkbox seleccionado
    var inputs = document.getElementsByClassName("selecc");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', () => document.getElementById("comprar").disabled = false)
    }
    
    // Crea el div
    var div = document.createElement("div");
    div.id = "res";
    document.getElementById("contenedorDos").appendChild(div);
}

var precioT = 0;

function comprar(elEvento) {
    var evento = elEvento || window.event;
    
    // Procedemos a comprar
    var tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].lastElementChild.childNodes[0].checked) {
            var nom = tr[i].childNodes[0].innerText;
            var precio = tr[i].childNodes[1].innerText;
            precioT +=  Number(precio);
            arrayProd[i - 1].cambiarStock();
            document.getElementById("stockT").innerHTML = arrayProd[i - 1].stock
        } 
    }
    
    // Muestra el mensaje
    var div = document.getElementById("res");
    div.innerHTML = "Total a pagar: " + precioT;
    
    // Incorpora la cookie
    y = setCookie(nom, precioT);
}