$( function() {
    $( ".conceptosCaja" ).draggable({ revert: "invalid" });
 
    $( ".definicionCaja" ).droppable({
      drop: function( event, ui ) {
        $( this )
            //En cuanto soltamos el elemento modificamos el contenedor
            .addClass( "rightDropped" )
            .removeClass( "ui-droppable " )
            .find( "p" )
            .html( "¡Concepto seleccionado!" );
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