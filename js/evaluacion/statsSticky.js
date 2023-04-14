//Boton para mostrar las estidisticas al momento de contestar las preguntas
let buttonStats = document.getElementById('stats-button-exam');
let menuStickyUnity = document.getElementById('menuStickyUnity');

let scrollDownButtonStats, scrollUpButtonStats;
window.onscroll = function () {
    scrollDownButtonStats = window.scrollY;
    scrollUpButtonStats = window.scrollX;

    if(scrollDownButtonStats >= 145){
        menuStickyUnity.classList.add('tabsFixed');
        buttonStats.classList.remove('scale-out');
    }else{
        buttonStats.classList.add('scale-out');
        menuStickyUnity.classList.remove('tabsFixed');
    }
};

//Hacer aparecer el menu de las estadísticas cuando esta abajo.
let contenedorStatsIdentificador = document.getElementById('contenedorStatsIdentificadorFixed');
console.log('contenedorStatsIdentificador: ', contenedorStatsIdentificador);
buttonStats.addEventListener('click', () => {
    contenedorStatsIdentificador.classList.toggle('scale-out');
});


