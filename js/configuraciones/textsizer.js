//Identificador de texto dinamico
let textoDinamicoIdentificador = document.getElementsByClassName('textoDinamicoIdentificador');

//Clases tamaños
// let textoReadingElementsH1 = document.getElementsByClassName('textoReadingH1');
// let textoReadingElementsH3 = document.getElementsByClassName('textoReadingH3');
// let textoReadingElementsH2 = document.getElementsByClassName('textoReadingH2');

//Arrays de tamaños
// let textoReadingElementsH2Arr = [...textoReadingElementsH2];
// let textoReadingElementsH1Arr = [...textoReadingElementsH1];
// let textoReadingElementsH3Arr = [...textoReadingElementsH3];

//Cantidad de textos
// let totalTextosDinamicos = textoReadingElementsH2.length;

//Botones para el tamaño del texto
// let textSizeOne = document.getElementsByClassName('textSizeOne');
// let textSizeTwo = document.getElementsByClassName('textSizeTwo');
// let textSizeThree = document.getElementsByClassName('textSizeThree');

//Conversion de array
// let textSizeOneArr = [...textSizeOne];
// let textSizeTwoArr = [...textSizeTwo];
// let textSizeThreeArr = [...textSizeThree];

//Reemplazo de textos
function reemplazoH2H3porH1(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH3');
        });

        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H1");
}


function reemplazoH1H2porH3(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH1');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H3");
}

function reemplazoH1H3porH2(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });

        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });

    }
}

//Cambios en los botones cuando son presionados (Estilos)
//Tamaño H1
// for(var i = 0; i < textSizeOne.length; i++){
//     textSizeOne[i].addEventListener('click', () => {
//         textSizeOneArr.map(e => {
//             e.classList.add('activeButtonText');
//         });

//         textSizeTwoArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         textSizeThreeArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         reemplazoH2H3porH1();
//     })
// }

//Tamaño H2
// for(var i = 0; i < textSizeTwo.length; i++){
//     textSizeTwo[i].addEventListener('click', () => {
//         textSizeOneArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         textSizeTwoArr.map(e => {
//             e.classList.add('activeButtonText');
//         });

//         textSizeThreeArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         reemplazoH1H3porH2();
//     })
// }

//Tamaño H3
// for(var i = 0; i < textSizeThree.length; i++){
//     textSizeThree[i].addEventListener('click', () => {
//         textSizeOneArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         textSizeTwoArr.map(e => {
//             e.classList.remove('activeButtonText');
//         });

//         textSizeThreeArr.map(e => {
//             e.classList.add('activeButtonText');
//         });

//         reemplazoH1H2porH3();
//     })
// }


//Estado de los botones
let stateCero = 0;
let stateOne = 0;
let stateTwo = 0;
let stateThree = 0;
let stateFour = 0;
let stateFive = 0;

//Para los botones en bold e italic y el space line
//Bold
$('#adjustFont_1').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateCero == 0){
        stateCero = 1;
        $('#adjustFont_1 i').addClass('activeButtonText');
        $('#adjustFont_1').addClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Texto en negritas activo.'});
    }else{
        stateCero = 0;
        $('#adjustFont_1 i').removeClass('activeButtonText');
        $('#adjustFont_1').removeClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Texto en negritas apagado.'});
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textBoldOwn');
});

//Italic
$('#adjustFont_2').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateOne == 0){
        stateOne = 1;
        $('#adjustFont_2 i').addClass('activeButtonText');
        $('#adjustFont_2').addClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Texto en italica activo.'});
    }else{
        stateOne = 0;
        $('#adjustFont_2 i').removeClass('activeButtonText');
        $('#adjustFont_2').removeClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Texto en italica apagado.'});
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textItalicOwn')
});

//Underline
$('#adjustFont_3').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateTwo == 0){
        stateTwo = 1;
        $('#adjustFont_3 i').addClass('activeButtonText');
        $('#adjustFont_3').addClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Subrayado activo.'});
    }else{
        stateTwo = 0;
        $('#adjustFont_3 i').removeClass('activeButtonText');
        $('#adjustFont_3').removeClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Subrayado apagado.'});
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textLineSubOwn')
});

//SpaceLine
$('#adjustFont_8').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateThree == 0){
        stateThree = 1;
        $('#adjustFont_8 i').addClass('activeButtonText');
        $('#adjustFont_8').addClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Espaciado activo.'});
    }else{
        stateThree = 0;
        $('#adjustFont_8 i').removeClass('activeButtonText');
        $('#adjustFont_8').removeClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Espaciado apagado.'});
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textSpaceLineOwn')
});


//Align texts
$('#adjustFont_7').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateFive == 0){
        stateFive = 1;
        $('#adjustFont_7 i').addClass('activeButtonText');
        $('#adjustFont_7').addClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Justificado apagado.'});
    }else{
        stateFive = 0;
        $('#adjustFont_7 i').removeClass('activeButtonText');
        $('#adjustFont_7').removeClass('shadow6');
        //Texto mensaje
        M.toast({html: 'Justificado activo.'});
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textAlignLeftOwn')
});

//Highlight
$('#adjustFont_6').click( function() {
    $(this).toggleClass('activeButtonText');

    if(stateFour == 0){
        stateFour = 1;
        $('#adjustFont_6 i').addClass('activeButtonText');
        $('#adjustFont_6').addClass('shadow6');
        $('.keyWord').addClass('textWordHelp');
        //Texto mensaje
        M.toast({html: 'Palabras clave apagadas.'});
    }else{
        stateFour = 0;
        $('#adjustFont_6 i').removeClass('activeButtonText');
        $('#adjustFont_6').removeClass('shadow6');
        $('.keyWord').removeClass('textWordHelp');
        //Texto mensaje
        M.toast({html: 'Palabras clave activas.'});
    }
});


