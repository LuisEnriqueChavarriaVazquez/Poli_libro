//Botones para los cambios de color
let modOscuro = document.getElementById('modOscuro');
let modLuminoso = document.getElementById('modLuminoso');
let modSepia = document.getElementById('modSepia');

//Identificador para acceder a la ruta del color
let rutaColor = document.getElementById('colorAdaptable');

modOscuro.addEventListener('click', () => {
    M.toast({html: 'Modo oscuro activo'});
    rutaColor.setAttribute('href', 'css/colors/standarDark.css');
});

modLuminoso.addEventListener('click', () => {
    M.toast({html: 'Modo luminoso activo'});
    rutaColor.setAttribute('href', 'css/colors/standarColors.css');
});

modSepia.addEventListener('click', () => {
    M.toast({html: 'Modo sepia activo'});
    rutaColor.setAttribute('href', 'css/colors/standarSepia.css');
});

