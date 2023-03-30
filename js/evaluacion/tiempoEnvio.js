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

//Trigger de inicio
let botonParaIniciarCronometro = document.getElementById('v-pills-evaluacion-tab');
botonParaIniciarCronometro.addEventListener('click', () => {
    runTime();
});