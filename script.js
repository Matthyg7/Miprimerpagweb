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

let nombres = "Matthy";
let ciudad = "Cordoba";
let gusto = "futbol";

function cambiarTexto(nombres, ciudad, gusto) {
    let contenido = `Hola! mi nombre es ${nombres} soy de ${ciudad},
                     me gusta mucho el ${gusto}, la tecnologia,
                     los juegos Online y poner en practica todo
                     lo que voy aprendiendo en el camino de el
                     desarrollo de sitios web.`;

    return contenido;
}
let parrafo = document.querySelector(".cont p");
parrafo.innerText = cambiarTexto(nombres, ciudad, gusto);

//navbar

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}
//formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parraf = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parraf.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parraf.innerHTML = warnings;
    } else {
        parraf.innerHTML = "Enviado";
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