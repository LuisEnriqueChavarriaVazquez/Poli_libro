let enunciadosTF = [
    "Enunciado de pregunta True/False 0",
    "Enunciado de pregunta True/False 1",
    "Enunciado de pregunta True/False 2",
    "Enunciado de pregunta True/False 3",
    "Enunciado de pregunta True/False 4",
    "Enunciado de pregunta True/False 5",
    "Enunciado de pregunta True/False 6",
    "Enunciado de pregunta True/False 7",
    "Enunciado de pregunta True/False 8",
    "Enunciado de pregunta True/False 9",
    "Enunciado de pregunta True/False 10",
    "Enunciado de pregunta True/False 11",
    "Enunciado de pregunta True/False 12",
    "Enunciado de pregunta True/False 13",
    "Enunciado de pregunta True/False 14",
    "Enunciado de pregunta True/False 15",
    "Enunciado de pregunta True/False 16",
    "Enunciado de pregunta True/False 17",
    "Enunciado de pregunta True/False 18",
    "Enunciado de pregunta True/False 19",
    "Enunciado de pregunta True/False 20",
    "Enunciado de pregunta True/False 21",
    "Enunciado de pregunta True/False 22",
    "Enunciado de pregunta True/False 23",
    "Enunciado de pregunta True/False 24",
    "Enunciado de pregunta True/False 25",
    "Enunciado de pregunta True/False 26",
    "Enunciado de pregunta True/False 27",
    "Enunciado de pregunta True/False 28",
    "Enunciado de pregunta True/False 29",
    "Enunciado de pregunta True/False 30",
];

let respuestasTF = ["F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","V","F","F"];  

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

    let suffledRespuestas = shuffle(respuestasTF);
    let suffledEnunciados = shuffle(enunciadosTF);

    for(var i = 0; i < 7; i++){
        containerTrueFalse.innerHTML +=  `
            <section id="">
                <form class="cardPregunta clgreyl2 border1">
                    <!--Numero y enunciado de la pregunta-->
                    <div class="titleQuestionContainer clgreyl3">
                        <h5 class="preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Pregunta TF sin numerar</h5>
                        <p class="preguntaEnunciado clgreyl2 clbktx border1 textoStandar">${suffledEnunciados[i]}</p>
                    </div>

                    <!--Opciones de la pregunta-->
                    <section class="optionsQuestionContainerTF clgreyl3">
                        <div class="buttonTrue shadow2 waves-effect clgreyl1 clbktx">
                            V
                        </div>
                        <div class="buttonFalse shadow2 waves-effect clgreyl1 clbktx">
                            F
                        </div>
                    </section>


                    <!--Boton para revisar la pregunta-->
                    <div class="evaluateQuestionContainer">
                        <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text'
                            id=""
                            onclick="">Revisar pregunta<i
                                class="material-icons right">done</i></a>
                        <!--Retroalimentacion de la pregunta-->
                        <div id="retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
    }
}

printQuestionsTrueFalse();