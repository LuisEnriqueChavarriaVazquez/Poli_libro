var driver = new Driver({
    allowClose: false,
    showButtons: true,         
    closeBtnText: 'Cerrar',      
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',   
    keyboardControl: true,
});

//Accedemos al boton de ayuda
let buttonHelp2 = document.getElementById('buttonHelp2');
//Boton del menu lateral
let a12tutorialButton2 = document.getElementById('a12tutorialButton');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a12tutorialButton',
    onNext: () => {
        a12tutorialButton2.click();
    },
    popover: {
      title: 'Boton de menu',
      description: 'Dando click al boton del menú también puede acceder a la opciones anteriormente descritas.',
      position: 'right'
    }
  },
  {
    element: '#mobile-demo',
    popover: {
      title: 'Menu lateral',
      description: 'El menú lateral es una excelente opción en caso de trabajar con dispositivos móviles.',
      position: 'right'
    },
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp2.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})