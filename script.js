//alert("Hola este es mi Javascript");
//let nombre = ("Matthy");
//console.log(nombre);

//let contenidoTitulo = "sobre mi";

//let titulo = document.querySelector(".acerca-de-mi h1");
//titulo.innerHTML = contenidoTitulo;

//Condicionales
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if (textoTitulo == "Matias") {
//    titulo.innerHTML = "otro";
//}

//else {
//    console.log("No se cumple");
//}


//funciones

//let nombre = "Matthy";
//let ciudad = "Cosquin";
//let gusto = "futbol";

//function cambiarTexto(nombre, ciudad, gusto) {
//    let contenido = ` Soy ${nombre} tengo 33 años y vivo en ${ciudad},
//    me gusta mucho el ${gusto}, la tecnologia, los juegos Online
//    y aprender sobre las nuevas tecnologias.`;

//    return contenido;
//}
//let parrafo = document.querySelector(".cont .parrafo p");
//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

//navbar

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}
//formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});