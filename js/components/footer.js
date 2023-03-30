function inyectFooter(){
    let footer = `
    <footer class="footerDesign clgreyl2 clborder">
        <div class="footerContainerOne">
        <p class="textoFooter clbktx">
            Recurso Didáctico Digital Unidad X: métodos de evaluación de proyectos de inversión de la UA Finanzas
            Empresariales por M. en A. Eduardo Rodríguez Flores, M. en C. Josefina Hernández Jaime & Dra. Yasmín Ivette
            Jiménez Galán se distribuye bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0
            Internacional.
        </p>
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text'
            href='https://github.com/LuisEnriqueChavarriaVazquez/Poli_libro'>Repositorio del polilibro<i
            class="material-icons right">code</i></a>
        <div class="iconCreativeContainer">
            <div class="iconCreative"></div>
        </div>
        </div>
        <div class="footerContainerTwo">
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' href='#!'>Manual<i
            class="material-icons right">help</i></a>
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' href='/contacto'>Contacto<i
            class="material-icons right">alternate_email</i></a>
        </div>
    </footer>
    `;
    let footerListener = document.getElementById('footerListener');
    footerListener.innerHTML = footer;
}

inyectFooter();