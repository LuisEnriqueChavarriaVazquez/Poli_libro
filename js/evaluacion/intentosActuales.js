///////////////////////////////////NUMERO DE INTENTOS
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

///////////////////////////////////TIEMPO DE EXAMEN
//Contadores
let tiempoActualHoras = document.getElementById('tiempoActualHoras');
let tiempoActualMinutos = document.getElementById('tiempoActualMinutos');
let tiempoActualSegundos = document.getElementById('tiempoActualSegundos');

//Valores de tiempo
let segundos = 0;
let minutos = 0;
let horas = 0; 

//Cronometro
function runTime(){
    setInterval(() => {
        tiempoActualSegundos.innerText = segundos;
        segundos++;

        if(segundos == 60){
            minutos++;
            tiempoActualMinutos.innerText = minutos;
            segundos = 0;
        }

        if(minutos == 60){
            horas++;
            tiempoActualHoras.innerText = horas;
            minutos = 0;
        }

        //console.log(horas + ":" + minutos + ":" + segundos)

    }, 1000);
}

///Trigger de inicio
document.onreadystatechange = function(event) {
    contarIntento();
    runTime();
};