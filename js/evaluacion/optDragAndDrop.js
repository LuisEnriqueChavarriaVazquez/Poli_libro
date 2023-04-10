$( function() {
  $( ".conceptosCaja" ).draggable({
    revert: "invalid",
    // drag: function( event, ui ) {
    // $( this )
    // .find( "p" )
    // .html( "¡Concepto seleccionado!" );
    // }
    });

  $( ".definicionCaja" ).droppable({
    drop: function( event, ui ) {
  $( this )
    //En cuanto soltamos el elemento modificamos el contenedor
    .addClass( "rightDropped" )
    .removeClass( "ui-droppable " )
    .find( "p" )
    .html( "¡Definición vinculada a concepto!" );
    M.toast({html: 'Definición vinculada a concepto'})
  $(this)
    //Modificamos el estilo del icono cuando el elemento fue soltado
    .find('span')
    .html('thumb_up')
  $(this)
    //Modificamos la caja que contiene el icono de like
    .find('div')
    .addClass( "clgreyl3" )
    .removeClass('clgreyl1')

    //Obtenemos el valor del concepto
    console.log($(this).attr('valorConcepto'));
    //Obtenemos el valor de la descripcion
    var $el = ui.draggable;
    console.log($el.text())
    //Limita la cantidad de elementos a 1
    let hijos = $(this).siblings();
    if(hijos.length > 0){
    console.log(hijos); //Nombre del concepto
    console.log(hijos.prevObject); //Nombre del concepto
    $(this).droppable('disable');
  }
  },
  });
} );


`
<section class="conceptsDefinitionContainer clgreyl2 border1">

  <!--Numero y enunciado de la pregunta-->
  <div>
    <h5 class="preguntaIdentificador clbktx border1 textoStandar numeracionPregunta"></h5>
    <hr>
  </div>

  <section class="conceptosCajaContainer">
    <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx">
      <p>Concepto 1</p>
    </div>

    <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx">
      <p>Concepto 2</p>
    </div>

    <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx">
      <p>Concepto 3</p>
    </div>

    <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx">
      <p>Concepto 4</p>
    </div>
  </section>

  <section class="definicionCajaContainerFather">
    <div class="definicionCajaContainer clgreyl1 border1">
      <p class="textoStandar clbktx">ciatis repellat. Reiciendis quidem omnisut consequatur temporibus, fuga amet libero
        ad cum quis ea in eveniet.</p>
      <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="">
        <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
        <div class="border1 clgreyl1">
          <span class="material-icons clbktx">swipe_up</span>
        </div>
      </div>
    </div>
    <div class="definicionCajaContainer clgreyl1 border1">
      <p class="textoStandar clbktx">Lorem ipsum dolor sit, ameconsectetur aliquam dignissimos porro explicabo
        perferendis laudantium, ex saepe, placeat accusamus! In reprehenderit iure sed facilis dolore.</p>
      <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="">
        <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
        <div class="border1 clgreyl1">
          <span class="material-icons clbktx">swipe_up</span>
        </div>
      </div>
    </div>
    <div class="definicionCajaContainer clgreyl1 border1">
      <p class="textoStandar clbktx">Lorem ipsum dolor sit amet consect officiis ullam dignissimos. Minus molestias id
        officia ipsum corrupti impedit.</p>
      <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="">
        <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
        <div class="border1 clgreyl1">
          <span class="material-icons clbktx">swipe_up</span>
        </div>
      </div>
    </div>
    <div class="definicionCajaContainer clgreyl1 border1">
      <p class="textoStandar clbktx">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus molestias repellat,
        quam similique saepe illum quos perspiciatis, voluptatum veritatis error nihil laboriosam earum voluptatem
        aliquid, facilis consequatur accusamus excepturi quasi?</p>
      <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="">
        <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
        <div class="border1 clgreyl1">
          <span class="material-icons clbktx">swipe_up</span>
        </div>
      </div>
    </div>
  </section>

  <!--Boton para revisar la pregunta-->
  <div class="evaluateQuestionContainer">
    <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' id="" onclick="">Revisar
      conceptos<i class="material-icons right">done</i></a>
    <!--Retroalimentacion de la pregunta-->
    <div id="retroalimentacion"></div>
  </div>

</section>
`