//Puntaje del usuario
let puntajeTotal = 0;
let preguntasContestadasTotal = 0;

function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt3"
        , "pregunta2_opt1", "pregunta3_opt3"
        , "pregunta4_opt1", "pregunta5_opt2"
        , "pregunta6_opt2", "pregunta7_opt3"
        , "pregunta8_opt2", "pregunta9_opt2"
        , "pregunta10_opt1", "pregunta11_opt1"
        , "pregunta12_opt1", "pregunta13_opt2"
        , "pregunta14_opt3", "pregunta15_opt3"
        , "pregunta16_opt3", "pregunta17_opt2"
        , "pregunta18_opt1", "pregunta19_opt2"
        , "pregunta20_opt3"];

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, "Valor del dinero en el tiempo"
        , "Valor presente", "Valor del dinero en el tiempo"
        , "Flujos de efectivo", "Anualidad"
        , "Interés compuesto", "Principal"
        , "$121,665", "Capitalizarla trimestralmente"
        , "Es falso", "Ordinarias, vencidas o diferidas"
        , "Programa de amortización", "Periodo de Recuperación de la inversión"
        , "Tasa Interna de Rendimiento (TIR)", "índice de rentabilidad  (IR)"
        , "Relación beneficio-costo", "Hay utilidad"
        , "25,454", "TIR mayor que TMAR"
        , "VAN o VPN"];

    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>input:checked").id;

    //Elementos para conteo de puntaje
    let barraPreguntas = document.getElementById('barraPreguntas');
    let contadorPreguntas = document.getElementById('contadorPreguntas');
    let contadorPreguntasRespondidas = document.getElementById('contadorPreguntasRespondidas');

    //Accedemos al contenido de la opcion elejida por el alumno
    var respuestaAlumnoContent = document.getElementById(respuestaAlumnoId);
    respuestaAlumnoContent.classList.add('respuestaAlumnoClassMark');
    
    //Evaluacion de las preguntas
    console.log(respuestaAlumnoId)
    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Correcto</span>` + ", la respuesta es " + `<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[numero]}</span>`;
        retroalimentacion.classList.add('mensajeCorrecta');
        puntajeTotal++;
        preguntasContestadasTotal++;
    } else {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Incorrecto</span>` +", la respuesta es " + `<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[numero]}</span>`;
        retroalimentacion.classList.add('mensajeIncorrecta');
        preguntasContestadasTotal++;
    }

    //Cada que se responda pregunta correcta se actualiza contador
    contadorPreguntas.innerText = puntajeTotal;

    //Cada que contestemos una pregunta se actualiza el contador
    contadorPreguntasRespondidas.innerText = preguntasContestadasTotal;

    //La barra se incrementa de tamaño con cada pregunta
    barraPreguntas.setAttribute('style', 'width:' + preguntasContestadasTotal*10 + '%');

    //Se elimina el boton de la pregunta que ha sido respondida
    let button_evaluation = document.getElementById('button_evaluation_'+numero);
    button_evaluation.setAttribute('style', 'display:none');

    //Se eliminan los inputs de la pregunta
    let opt1_input = document.getElementById('pregunta' + numero + '_opt1');
    let opt2_input = document.getElementById('pregunta' + numero + '_opt2');
    let opt3_input = document.getElementById('pregunta' + numero + '_opt3');
    let opt4_input = document.getElementById('pregunta' + numero + '_opt4');

    opt1_input.setAttribute('disabled', '');
    opt2_input.setAttribute('disabled', '');
    opt3_input.setAttribute('disabled', '');
    opt4_input.setAttribute('disabled', '');
}

const preguntas_aleatorias_indices = [0]
const preguntas = [
    0,
    {
        "enunciado": "Técnica que parte de la premisa de que el dinero actual tiene un valor mayor que el que se recibirá en una fecha futura",
        "opciones": ['Valor presente', 'Valor futuro', 'Valor del dinero en el tiempo'],
    },
    {
        "enunciado": "Técnica que utiliza una tasa de descuento",
        "opciones": ['Valor presente', 'Valor futuro', 'Valor del dinero en el tiempo'],
    },
    {
        "enunciado": "Utiliza la capitalización para encontrar el valor de cada flujo de efectivo al final de la vida de la inversión",
        "opciones": ['Valor presente', 'Valor futuro', 'Valor del dinero en el tiempo'],
    },
    {
        "enunciado": "El valor presente y el valor futuro se determinan a partir de:",
        "opciones": ['Flujos de efectivo','Ingresos', 'Egresos'],
    },
    {
        "enunciado": "Se denomina así a los importes iguales que se repiten durante un periodo determinado de tiempo",
        "opciones": ['Cantidad única', 'Anualidad', 'Principal o capital'],
    },
    {
        "enunciado": "Interés que se gana en un depósito dado y que se vuelve parte del principal al final de un periodo específico",
        "opciones": ['Interés simple', 'Interés compuesto', 'Interés intermedio'],
    },
    {
        "enunciado": "Nombre técnico que recibe la cantidad de dinero sobre la que se pagan intereses",
        "opciones": ['Depósito', 'Inversión', 'Principal'],
    },
    {
        "enunciado": "Supongamos que el día de hoy realizas un depósito de $100,000 en una cuenta bancaria que te dará un interés anual del 4%. Al cabo de 5 años ¿Cuánto dinero recibirás aproximadamente?",
        "opciones": ['$150,000', '$121,665', '$122,000'],
    },
    {
        "enunciado": "En el supuesto de que tengas una inversión ¿Cuál de las siguientes opciones te conviene más?",
        "opciones": ['Capitalizarla anualmente', 'Capitalizarla trimestralmente', 'Capitalizarla semestralmente'],
    },
    {
        "enunciado": "Entre más largo sea el período de capitalización de una inversión se ganan más rendimientos",
        "opciones": ['Es falso', 'Es verdadero', 'Depende de la tasa de interés'],
    },
    {
        "enunciado": "Este tipo de anualidades son las más comunes en finanzas",
        "opciones": ['Ordinarias, vencidas o diferidas', 'Anticipadas', 'Amortizables'],
    },
    {
        "enunciado": "Muestra en forma precisa cómo será pagado un préstamo, determina el pago requerido en cada fecha y especifica qué cantidad se está pagando de intereses y qué cantidad se paga a principal",
        "opciones": ['Programa de amortización','Programa de anualidades', 'Cálculo de anualidades'],
    },
    {
        "enunciado": "Método que también se puede calcular sin tomar en cuenta el valor del dinero en el tiempo",
        "opciones": ['Tasa Interna de Rendimiento ', 'Periodo de Recuperación de la inversión', 'Valor Presente Neto (VPN)'],
    },
    {
        "enunciado": "Es una tasa de descuento que hace posible igualar el valor presente de los ingresos con el valor presente de los egresos",
        "opciones": ['Valor Presente Neto (VPN)', 'Periodo de recuperación', 'Tasa Interna de Rendimiento (TIR)'],
    },
    {
        "enunciado": "Se obtiene dividiendo el valor presente de los flujos netos de efectivo entre la inversión inicial del proyecto",
        "opciones": ['Tasa Promedio de Rentabilidad (TPR)', 'Relación Ventas sobre Utilidad (RVU)', 'Índice de Rentabilidad  (IR)'],
    },
    {
        "enunciado": "Se obtiene dividiendo el valor presente de los beneficios (ingresos) entre el valor presente de los costos",
        "opciones": ['Relación ventas sobre utilidad (RVU)', 'Rentabilidad sobre la inversión inicial (RSI)', 'Relación beneficio-costo'],
    },
    {
        "enunciado": "Si la suma de ingresos actualizados es de $748,710 y la suma de egresos actualizados es de $722,604 ¿Cuál es la relación beneficio-costo?",
        "opciones": ['Hay equilibrio operativo', 'Hay utilidad', 'Hay pérdida'],
    },
    {
        "enunciado": "Por una inversión al cabo de un año recibirás 28,000 pesos; considerando una tasa de descuento del 10% ¿Cuánto dinero tendrás que invertir?",
        "opciones": ['25,454','25,250', '24,330'],
    },
    {
        "enunciado": "Condición en la que se podría aceptar un proyecto de inversión",
        "opciones": ['TIR=TMAR','TIR mayor que TMAR','TIR menor que TMAR'],
    },
    {
        "enunciado": "Se puede definir como el valor monetario que resulta de restar la suma de los flujos descontados (flujos de efectivo del proyecto a valor presente) a la inversión inicial",
        "opciones": ['TMAR','TIR','VAN o VPN']
    }
];

function preguntas_aleatorias() {



    while (preguntas_aleatorias_indices.length < 11) {
        numero = aleatorio(1, preguntas.length-1);
        if (preguntas_aleatorias_indices.includes(numero) == false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }


    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas = "";
    for (i = 1; i < preguntas_aleatorias_indices.length; i++) {
        contenido_preguntas = contenido_preguntas + `
        <div class="card">
        <div class="card-body" id="pregunta${preguntas_aleatorias_indices[i]}">
        <form>
            <h5 class="preguntaIdentificador card-title textoReadingTitle">Pregunta ${i}</h5>
            <p class="preguntaEnunciado textoReading">${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
            <section class="m-3" >
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt1" value="${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt2" value="${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt3" value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}
                    </label>
                </div>
            </section>
            <div id="retroalimentacion">

            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary btnIndividualQuestion" id="button_evaluation_${preguntas_aleatorias_indices[i]}" onclick="pregunta(${preguntas_aleatorias_indices[i]})" type="button">
                    <span class="textoReading">
                    Revisar pregunta
                    </span>
                </button>
            </div>
            </form>
        </div>
    </div>
        `;
    }
    contenedor_preguntas.innerHTML = contenido_preguntas;

}

function aleatorio(a, b) {
    var aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    return aleatorio
}


preguntas_aleatorias();

//Evaluacion de todo (Pendiente)
// let evaluartodo = document.getElementById('evaluartodo');
// evaluartodo.addEventListener('click', () => {
//     let getAllButtonsQuestions = document.getElementsByClassName('btnIndividualQuestion');
//     getAllButtonsQuestionsArr = [...getAllButtonsQuestions]
//     getAllButtonsQuestionsArr.forEach(element => {
//         element.click();
//     });
// })