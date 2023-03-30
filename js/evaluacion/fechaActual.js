let fecha;
function obtenerFechaActual(){
    //Obtenemos el input para insertar la fecha
    let fechaActualContainer = document.getElementById('fechaActual');

    //Obtenemos la fecha
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    //Damos formato a la fecha
    fecha = `${day}/${month}/${year}`;

    //Insertamos la fecha en el value
    function insertarFechaActual(fechaDato){
        fechaActualContainer.innerText = fechaDato;
    }
    insertarFechaActual(fecha);
}

obtenerFechaActual();