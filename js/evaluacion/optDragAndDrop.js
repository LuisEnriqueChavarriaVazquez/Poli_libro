$( function() {
    $( ".conceptosCaja" ).draggable({ 
      revert: "invalid",
      // drag: function( event, ui ) {
      //   $( this )
      //       .find( "p" )
      //       .html( "¡Concepto seleccionado!" );
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