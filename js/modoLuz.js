//Botones para los cambios de color
let modOscuro = document.getElementById('modOscuro');
let modLuminoso = document.getElementById('modLuminoso');
let modSepia = document.getElementById('modSepia');

//Identificador para acceder a la ruta del color (ruta actual y futura)
let rutaColor = document.getElementById('colorAdaptable');

//Verifcamos que la ruta no este en memoria
let rutaSaved = localStorage.getItem('rutaSavedOn');
if (rutaSaved === null){
    localStorage.setItem('rutaSavedOn', 'css/colors/standarColors.css');
}

//Validamos que los botones existan
if(modOscuro !== null && modLuminoso !== null && modSepia !== null){
    
    //Definimos el color guardado en memoria
    rutaColor.setAttribute('href', rutaSaved);

    //Boton para el modo oscuro
    modOscuro.addEventListener('click', () => {
        M.toast({html: 'Modo oscuro activo'});
        localStorage.setItem('rutaSavedOn', 'css/colors/standarDark.css');
        rutaColor.setAttribute('href', 'css/colors/standarDark.css');
    });

    //Boton para el modo con color normal
    modLuminoso.addEventListener('click', () => {
        M.toast({html: 'Modo luminoso activo'});
        localStorage.setItem('rutaSavedOn', 'css/colors/standarColors.css');
        rutaColor.setAttribute('href', 'css/colors/standarColors.css');
    });

    //Boton para los colores en sepia
    modSepia.addEventListener('click', () => {
        M.toast({html: 'Modo sepia activo'});
        localStorage.setItem('rutaSavedOn', 'css/colors/standarSepia.css');
        rutaColor.setAttribute('href', 'css/colors/standarSepia.css');
    });
    
}else{

    //En caso de que no haya botones solo agregamos el color guardado en memoria
    rutaColor.setAttribute('href', rutaSaved);

}

