//Validacion si no existe
if (localStorage.getItem("intentos") === null) {
    localStorage.setItem('intentos', 0);
}

//Contenedor
let intentosActuales = document.getElementById('intentosActuales');

function contarIntento(){
    let intentosGuardados = localStorage.getItem('intentos');
    localStorage.setItem('intentos', parseInt(intentosGuardados) + 1);
    intentosActuales.innerText = localStorage.getItem('intentos');
}

///Trigger de inicio
let botonParaIniciarIntentos = document.getElementById('v-pills-evaluacion-tab');
botonParaIniciarIntentos.addEventListener('click', () => {
    contarIntento();
});