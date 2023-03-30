//Identificador de texto dinamico
let textoDinamicoIdentificador = document.getElementsByClassName('textoDinamicoIdentificador');

//Clases tamaños
let textoReadingElementsH1 = document.getElementsByClassName('textoReadingH1');
let textoReadingElementsH3 = document.getElementsByClassName('textoReadingH3');
let textoReadingElementsH2 = document.getElementsByClassName('textoReadingH2');

//Arrays de tamaños
let textoReadingElementsH2Arr = [...textoReadingElementsH2];
let textoReadingElementsH1Arr = [...textoReadingElementsH1];
let textoReadingElementsH3Arr = [...textoReadingElementsH3];

//Cantidad de textos
let totalTextosDinamicos = textoReadingElementsH2.length;

//Botones para el tamaño del texto
let textSizeOne = document.getElementsByClassName('textSizeOne');
let textSizeTwo = document.getElementsByClassName('textSizeTwo');
let textSizeThree = document.getElementsByClassName('textSizeThree');

//Conversion de array
let textSizeOneArr = [...textSizeOne];
let textSizeTwoArr = [...textSizeTwo];
let textSizeThreeArr = [...textSizeThree];

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
for(var i = 0; i < textSizeOne.length; i++){
    textSizeOne[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        reemplazoH2H3porH1();
    })
}

//Tamaño H2
for(var i = 0; i < textSizeTwo.length; i++){
    textSizeTwo[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        reemplazoH1H3porH2();
    })
}

//Tamaño H3
for(var i = 0; i < textSizeThree.length; i++){
    textSizeThree[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        reemplazoH1H2porH3();
    })
}


//Estado de los botones
let stateCero = 0;
let stateOne = 0;
let stateTwo = 0;
let stateThree = 0;
let stateFour = 1;
let stateFive = 0;

//Para los botones en bold e italic y el space line
//Bold
$('.textChangeBold').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateCero == 0){
        stateCero = 1;
        $('.textChangeBold').addClass('containerSizeTextButton');
    }else{
        stateCero = 0;
        $('.textChangeBold').removeClass('containerSizeTextButton');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textBoldOwn')
});

//Italic
$('.textChangeItalic').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateOne == 0){
        stateOne = 1;
        $('.textChangeItalic').addClass('containerSizeTextButton');
    }else{
        stateOne = 0;
        $('.textChangeItalic').removeClass('containerSizeTextButton');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textItalicOwn')
});

//SpaceLine
$('.textChangeSpaceLine').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateTwo == 0){
        stateTwo = 1;
        $('.textChangeSpaceLine').addClass('containerSizeTextButton');
    }else{
        stateTwo = 0;
        $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textSpaceLineOwn')
});

//Underline
$('.textChangeUnderline').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateThree == 0){
        stateThree = 1;
        $('.textChangeUnderline').addClass('containerSizeTextButton');
    }else{
        stateThree = 0;
        $('.textChangeUnderline').removeClass('containerSizeTextButton');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textLineSubOwn')
});

//Highlight
$('.textChangeHighlight').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateFour == 0){
        stateFour = 1;
        $('.textChangeHighlight').addClass('containerSizeTextButton');
        $(".idFacto").addClass('textoResaltadoFacto');
    }else{
        stateFour = 0;
        $('.textChangeHighlight').removeClass('containerSizeTextButton');
        $(".idFacto").removeClass('textoResaltadoFacto');
    }
});


//Align texts
$('.textAlignLeft').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateFive == 0){
        stateFive = 1;
        $('.textAlignLeft').addClass('containerSizeTextButton');
    }else{
        stateFive = 0;
        $('.textAlignLeft').removeClass('containerSizeTextButton');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textAlignLeftOwn')
});
