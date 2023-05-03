
//Ayuda a validar cuando el examen esta completado para hacer aparece la casilla de descarga
function validateExamenCompletado(){
    console.log(contadorPreguntasRespondidas.textContent)
    if(contadorPreguntasRespondidas.textContent < 19){
        $('#contenedorDescargaArchivos').hide();
    }else{
        //Mostramo la casilla de descargas en la parte inferior
        $('#contenedorDescargaArchivos').show();

        //Mostramos el boton en el costado derecho para bajar los resultados
        let documentoPruebaFloat = document.getElementById('documentoPruebaFloat');
        documentoPruebaFloat.classList.remove('scale-out');
        //Retroalimentamos al usuario
        M.toast({html: `En la parte inferior es posible descargar sus resultados.`});
    }
}

validateExamenCompletado();
