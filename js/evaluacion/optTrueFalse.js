let questionsTF = [
    {
        enunciado: "Enunciado de pregunta True/False 0",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 1",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 2",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 3",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 4",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 5",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 6",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 7",
        respuesta: "F",
    }
];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(id, respuesta, idRetroalimentacion, contenedorButtonsTF){
    //Obtenemos el valor de la respuesta del cliente
    let valueAnswerUser = document.getElementById(id);
    valueAnswerUser = valueAnswerUser.innerText;

    //Accedemos al contenedor de la retroalimentacion
    let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
    let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

    //Validamos que sean correctas
    if(valueAnswerUser == respuesta){
        retroalimentacionContainer.classList.add('mensajeCorrecta');
        retroalimentacionContainer.textContent = "Correcto, la respuesta es: " + respuesta;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        retroalimentacionContainer.textContent = "Incorrecto, la respuesta es: " + respuesta;
    }

    //Eliminamos los botones de la pregunta
    contenedorButtonsTF_value.setAttribute('style', 'display: none;')

    
}

////////////////////////////////////////////////////////////////////////
//Mezclador de arrays
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // Mientras tengamos elementos para mezclar
    while (currentIndex != 0) {
  
      // Escoje a uno de los elementos
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Intercambialo con el elemento actual
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function printQuestionsTrueFalse(){
    let containerTrueFalse = document.getElementById('contenedor_preguntas');

    let suffledquestionsTF = shuffle(questionsTF);

    for(var i = 0; i < 7; i++){
        containerTrueFalse.innerHTML +=  `
            <section id="">
                <form class="cardPregunta clgreyl2 border1">
                    <!--Numero y enunciado de la pregunta-->
                    <div class="titleQuestionContainer clgreyl3">
                        <h5 class="preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                        <p class="preguntaEnunciado clgreyl2 clbktx border1 textoStandar">${suffledquestionsTF[i].enunciado}</p>
                        <p class="clbktx textoStandar">Pulsa el boton derecho o izquierdo</p>
                    </div>

                    <!--Opciones de la pregunta-->
                    <section class="optionsQuestionContainerTF clgreyl3" id="questionTFButtonsContainer_${i}">
                        <div class="buttonTrue shadow2 waves-effect cl5 clwtx" id="questionTF_${i}_buttonTrue" onclick="checkTFanswer('questionTF_${i}_buttonTrue','${suffledquestionsTF[i].respuesta}','questionTF_${i}_retroalimentacion','questionTFButtonsContainer_${i}')">
                            V
                        </div>
                        <div class="buttonFalse shadow2 waves-effect cl4 clwtx" id="questionTF_${i}_buttonFalse" onclick="checkTFanswer('questionTF_${i}_buttonFalse','${suffledquestionsTF[i].respuesta}','questionTF_${i}_retroalimentacion','questionTFButtonsContainer_${i}')">
                            F
                        </div>
                    </section>


                    <!--Boton para revisar la pregunta-->
                    <div class="evaluateQuestionContainer">
                        <!--Retroalimentacion de la pregunta-->
                        <div id="questionTF_${i}_retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
    }
}

printQuestionsTrueFalse();