//Botones para los cambios de tono sepia
let modSepia = document.getElementById('modSepia');

//Verifcamos que el valor del tono sepia exista
let sepiaValue = localStorage.getItem('sepiaValue');

//Accedemos a la ETIQUETA HTML
let generalDocument = document.getElementById('generalDocument');

//En caso de que no exista
if (sepiaValue === null){
    localStorage.setItem('sepiaValue', '0.0');
    generalDocument.setAttribute('style', 'filter: sepia(0.0);');
    sepiaValue = localStorage.getItem('sepiaValue');
}


//En caso de que el boton exista se debe actualizar el valor en tiempo real
if(modSepia !== null){
    
    //Debemos poner en la barra el valor actual
    modSepia.value = localStorage.getItem('sepiaValue') * 10;
    
    //Debemos escuchar cuando el usario modifique el valor
    modSepia.addEventListener('change', () => {
        //Obtenemos el valor del input range
        let valorDeUsuarioSepia = modSepia.value;
        valorDeUsuarioSepia = valorDeUsuarioSepia/10;
        //Actualizamos el valor en memoria
        localStorage.setItem('sepiaValue', valorDeUsuarioSepia);
        //Obtenemos el nuevo valor de la memoria
        sepiaValue = localStorage.getItem('sepiaValue');
        //Aplicamos los estilos guardados en memoria
        generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    });

    //Aplicamos los estilos guardados en memoria
    generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    
}else{ //En caso de que el boton de selección de sepia no exista solo se pone el valor en memoria

    //Aplicamos los estilos guardados en memoria
    generalDocument.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');

}