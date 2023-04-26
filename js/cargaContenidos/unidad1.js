const contenidosUnidad = [
    `<div class="clgreyl2 cardDesignFather shadow2 border1">
        <div class="cardDesign clw shadow2 border1">
            <p class="textoTitulo clbktx">Texto título 1</p>
            <!--Card con un ejemplo-->
            <p class="textoStandar clbktx textoDinamicoIdentificador textoReadingH2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, obcaecati recusandae
                dignissimos
                consequuntur itaque assumenda voluptas dicta aspernatur iusto suscipit quas! Quidem iusto beatae
                quaerat
                cupiditate eum fuga omnis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum
                labore <i class="keyWord"> lorem clave de ejemplo
                    minima excepturi incidunt voluptatibus culpa expedita quod explicabo, cumque voluptatum
                    accusamus,</i>
                similique
                laboriosam magnam! Obcaecati harum nemo molestias adipisci quas?
            </p>

            <div class="cardDesign clgreyl2 border1">
                <p class="textoTitulo clbktx">Ejemplo</p>
                <p class="textoStandar clbktx textoDinamicoIdentificador textoReadingH2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, obcaecati recusandae
                    dignissimos
                    consequuntur itaque assumenda voluptas dicta aspernatur iusto suscipit quas! Quidem iusto
                    beatae
                    quaerat
                    cupiditate eum fuga omnis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                    labore
                    minima excepturi incidunt voluptatibus culpa expedita quod explicabo, cumque voluptatum
                    accusamus,
                    similique
                    laboriosam magnam! Obcaecati harum nemo molestias adipisci quas?
                </p>
            </div>
        </div>

        <div class="cardDesign clw shadow2 border1">
            <p class="textoTitulo clbktx">Texto título 1</p>
            <p class="textoStandar clbktx textoDinamicoIdentificador textoReadingH2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, obcaecati recusandae
                dignissimos
                consequuntur itaque assumenda voluptas dicta aspernatur iusto suscipit quas! Quidem iusto beatae
                quaerat
                cupiditate eum fuga omnis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum
                labore <i class="keyWord"> lorem clave de ejemplo
                    minima excepturi incidunt voluptatibus culpa expedita quod explicabo, cumque voluptatum
                    accusamus,</i>
                similique
                laboriosam magnam! Obcaecati harum nemo molestias adipisci quas?
            </p>
        </div>

        <div class="cardDesign clw shadow2 border1">
            <p class="textoTitulo clbktx">Texto título 2</p>
            <p class="textoStandar clbktx textoDinamicoIdentificador textoReadingH2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, obcaecati recusandae
                dignissimos
                consequuntur itaque assumenda voluptas dicta aspernatur iusto suscipit quas! Quidem iusto beatae
                quaerat
                cupiditate eum fuga omnis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum
                labore <i class="keyWord"> lorem clave de ejemplo
                    minima excepturi incidunt voluptatibus culpa expedita quod explicabo, cumque voluptatum
                    accusamus,</i>
                similique
                laboriosam magnam! Obcaecati harum nemo molestias adipisci quas?
            </p>

            <!--Imagen-->
            <div class="imagenDefaultContainer">
                <p class="titleImageMine">Figura 4.2 linea de flujo de efectivo</p>
                <div class="imageZoomedContainer">
                    <img class="materialboxed shadow2 border1 imageZoomed"
                        data-caption="Esta es la descripción de la imagen" src="vectores/vectorEx.png">
                </div>
                <p class="noteImageMine clgreyl1 border1">Hernández, J., Rodríguez, E. & Jiménez, Y. (2023).</p>
            </div>
        </div>
    </div>`,

    `<div class="clgreyl2 cardDesignFather shadow2 border1">
        <div class="cardDesign clw shadow2 border1">
            <p class="textoTitulo clbktx">Texto título A.1</p>
            <!--Card con un ejemplo-->
            <p class="textoStandar clbktx textoDinamicoIdentificador textoReadingH2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, obcaecati recusandae
                dignissimos
                consequuntur itaque assumenda voluptas dicta aspernatur iusto suscipit quas! Quidem iusto beatae
                quaerat
                cupiditate eum fuga omnis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum
                labore <i class="keyWord"> lorem clave de ejemplo
                    minima excepturi incidunt voluptatibus culpa expedita quod explicabo, cumque voluptatum
                    accusamus,</i>
                similique
                laboriosam magnam! Obcaecati harum nemo molestias adipisci quas?
            </p>
        </div>
    </div>`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `Actividades de aprendizaje`,
    `13`,
    `14`,
    `15`,
];


console.log('contenidosUnidad: ', contenidosUnidad.length);

/////////////////////////////////////
//Object delegation para los botones
/////////////////////////////////////

//Accedemos al contenedor de los textos
let contenedorParaElContenidoDeLaUnidad = document.getElementById('lateralUnityContent');

//Cargamos por defecto el contenido para la unidad
(() => {
    contenedorParaElContenidoDeLaUnidad.innerHTML = contenidosUnidad[0];
})();

//Accedemos al contenedor que tiene las opciones para el menu en computadora.
let buttonContaineChargeContent = document.getElementById('lateralUnityMenuSectionContainer');
buttonContaineChargeContent.addEventListener('click', function(event){
    if(event.target.classList.contains('deskOption')){
        console.log(event.target)
        let buttonIndex = event.target.getAttribute('contador');
        contenedorParaElContenidoDeLaUnidad.innerHTML = contenidosUnidad[buttonIndex];
    }
});

//Accedemos al contenedor que tiene las opciones para el menu en celular.
let buttonContaineChargeContentMobile = document.getElementsByClassName('mobileOptionsContainer');
for(var i = 0; i < buttonContaineChargeContentMobile.length; i++){
    buttonContaineChargeContentMobile[i].addEventListener('click', function(event){
        if(event.target.classList.contains('mobileOption')){
            console.log(event.target)
            let buttonIndex = event.target.getAttribute('contador');
            contenedorParaElContenidoDeLaUnidad.innerHTML = contenidosUnidad[buttonIndex];
        }
    });
}
