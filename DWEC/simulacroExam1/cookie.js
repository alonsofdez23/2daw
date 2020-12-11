function setCookie(cname, cvalue, exdays=1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

  function deleteCookie(cnombre) {
    setCookie(cnombre, '', 0);
}

function usuarioActivo(nombre="", email="", dni="", rango="invitado") {
  this.nombre = nombre;
  this.email = email;
  this.dni = dni;
  this.rango = rango;

  this.cambiaRango = function (rangoNum) {
    return this.rango = rangoNum;
  }
}

function iniciar() {
  var user = new usuario();
  setCookie("nombre", user.nombre);
  setCookie("email", user.email);
  setCookie("dni", user.dni);
  setCookie("rango", user.rango);
}

function login() {
  var contentOne = document.getElementById("contenedorUno");
  var button = contentOne.firstChild;
  contentOne.removeChild(button);

  contentOne.appendChild(button);
  var logout = contentOne.firstChild;
  logout.setAttribute("id", "logout");
  logout.setAttribute("onclick", "volver();");
  logout.innerHTML = "LogOut";

  button = document.createElement("button");
  contentOne.appendChild(button);
  var guardar = document.getElementsByTagName("button")[1];
  guardar.setAttribute("id", "guardar");
  guardar.setAttribute("onclick", "guardar();");
  guardar.innerHTML = "Guardar Datos";

  button = document.createElement("button");
  contentOne.appendChild(button);
  var admin = document.getElementsByTagName("button")[2];
  admin.setAttribute("id", "admin");
  admin.setAttribute("onclick", "administrador();");
  admin.innerHTML = "Modo Administrador";

  var form = document.createElement(form);
  form.setAttribute("id", "form");
  var input1 = "<label for='user'>Usuario:</label><input type='text' name='user' id='user' />";
  var input2 = "<label for='email'>Email:</label><input type='text' name='email' id='email' />";
  var contentTwo = document.getElementById("contenedorDos");
  contentTwo.innerHTML = "";
  contentTwo.appendChild(form);
  document.getElementById("form").innerHTML = input1 + input2;
}

function volver() {
  deleteCookie("nombre");
  deleteCookie("email");
  deleteCookie("dni");
  deleteCookie("rango");
  window.location.href = "index.html";
}

function guardar() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;

  var user = new usuarioActivo(user, email);
  user.cambiaRango("registrado");
  setCookie("nombre", user.nombre);
  setCookie("email", user.email);
  setCookie("rango", user.rango);
}