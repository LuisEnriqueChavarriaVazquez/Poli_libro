/* Script para el manejo del drag and drop */
$( function() {
  $( ".conceptosCaja" ).draggable({
    revert: "invalid",
    // drag: function( event, ui ) {
    //   $( this )
    //   .hide();
    // }
  });

  $( ".definicionCaja" ).droppable({
    drop: function( event, ui ) {
      $(this)
        //Modificamos la caja que contiene el icono de like
        .find('div')
        .addClass( "clgreyl3" )
        .removeClass('clgreyl1');

        //Obtenemos el valor del concepto
        let valorConceptoTemp = $(this).attr('valorConcepto');
        console.log('valorConceptoTemp: ', valorConceptoTemp);

        //Obtenemos el valor de la descripcion
        let valorDefinicionTemp = ui.draggable;
        let numeroDePreguntaDragAndDrop = valorDefinicionTemp.attr('valorDef') 
        valorDefinicionTemp.hide();
        valorDefinicionTemp = valorDefinicionTemp.text().trim();
        console.log('valorDefinicionTemp: ', valorDefinicionTemp);

        //Recolectamos el concepto y la definicion dado
        collectAnswers(valorConceptoTemp, valorDefinicionTemp, numeroDePreguntaDragAndDrop);

        //Limita la cantidad de elementos a 1
        let hijos = $(this).siblings();
        if(hijos.length > 0){
          //console.log(hijos); //Nombre del concepto
          //console.log(hijos.prevObject); //Nombre del concepto
          $(this).droppable('disable');
        }

        $( this )
          //En cuanto soltamos el elemento modificamos el contenedor
          .addClass( "rightDropped" )
          .removeClass( "ui-droppable " )
          .find( "p" )
          .html( valorDefinicionTemp );
          M.toast({html: 'Definición vinculada a concepto'});

        $(this)
          //Modificamos el estilo del icono cuando el elemento fue soltado
          .find('span')
          .html('thumb_up');
    },
  });
});

//Funcion de recolección de respuestas
let respuestasDragAndDrop = [[],[]];
function collectAnswers(concepto, definicion, numeroPregunta){
  let temporalAnswerObject = "";
  //Dependiendo del tipo de pregunta
  if(numeroPregunta == "preguntaDragAndDrop_0"){
    temporalAnswerObject = {concepto, definicion};
    respuestasDragAndDrop[0].push(temporalAnswerObject);
  }else{
    temporalAnswerObject = {concepto, definicion};
    respuestasDragAndDrop[1].push(temporalAnswerObject);
  }
  console.log(respuestasDragAndDrop);
}


//Listado de conceptos
let questionsDragAndDrop = [
  [
    {
        concepto: "Concepto 1.1",
        definicion: "Lorem ipsum dolorignissimos. Minus molestias idofficia ipsum corrupti impedit.",
    },
    {
        concepto: "Concepto 1.2",
        definicion: "Ullam dignissimos. Minus molestias idofficia ipsum corrupti impedit. ullam dignissimos. Minus molestias.",
    },
    {
        concepto: "Concepto 1.3",
        definicion: "Illum quos perspiciatis, voluptatum veritatis error nihil laboriosam earum voluptatem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 1.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
  ],
  [
    {
        concepto: "Concepto 2.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 2.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 2.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 2.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
  ],
  [
    {
        concepto: "Concepto 3.1",
        definicion: "Lorem ipsum dolor sit amet consect sdm,dsmsdm sd,msd,msd, offcorrupti impedit.",
    },
    {
        concepto: "Concepto 3.1",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 3.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 3.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
  ],
  [
    {
        concepto: "Concepto 4.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 4.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 4.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 4.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
  ],
  [
    {
        concepto: "Concepto 5.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 5.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 5.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 5.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
  ]
];

//Mezclamos el array de opciones
let suffledquestionsDragAndDrop = shuffle(questionsDragAndDrop);

//Contenedor de las preguntas de drag and drop
let contenedor_preguntas_drag = document.getElementById('contenedor_preguntas_two');
for(var h = 0; h < 2; h++){
    contenedor_preguntas_drag.innerHTML += `
    <section class="conceptsDefinitionContainer clgreyl3 border1">
    
      <!--Numero y enunciado de la pregunta-->
      <h5 class="preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
    
      <section class="conceptosCajaContainer">
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][0].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][1].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][2].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][3].concepto}</p>
        </div>
      </section>
    
      <section class="definicionCajaContainerFather">
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][0].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][0].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][1].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][1].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][2].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][2].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][3].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][3].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
      </section>
    
      <!--Boton para revisar la pregunta-->
      <div class="evaluateQuestionContainer">
        <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' onclick="checkDragAndDrop('preguntaDragAndDrop_${h}')">Revisar
          conceptos<i class="material-icons right">done</i></a>
        <!--Retroalimentacion de la pregunta-->
        <div id="retroalimentacion"></div>
      </div>
    
    </section>
    `
};

function checkDragAndDrop(numeroPregunta){

  if(numeroPregunta = 'preguntaDragAndDrop_0'){
    console.log(respuestasDragAndDrop[0]);

  }else{
    console.log(respuestasDragAndDrop[1]);

  }
}