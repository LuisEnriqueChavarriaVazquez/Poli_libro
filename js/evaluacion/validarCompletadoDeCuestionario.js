
//Ayuda a validar cuando el examen esta completado para hacer aparece la casilla de descarga
function validateExamenCompletado(){
    console.log(contadorPreguntasRespondidas.textContent)
    if(contadorPreguntasRespondidas.textContent < 19){
        $('#contenedorDescargaArchivos').hide();
    }else{
        $('#contenedorDescargaArchivos').show();
        //Retroalimentamos al usuario
        M.toast({html: `En la parte inferior es posible descargar sus resultados.`});
    }
}

validateExamenCompletado();
