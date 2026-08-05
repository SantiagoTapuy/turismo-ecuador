let visitas = 0;

function bienvenida() {
    alert("¡Bienvenido al sistema de Turismo Ecuador!");
    contarVisita();
}

function contarVisita() {
    visitas++;
    document.getElementById("contador").innerHTML =
    "👥 Visitas: " + visitas;
}

function actualizarMensaje() {
    document.getElementById("mensaje").innerHTML =
    "✅ Información actualizada correctamente";
}

function modoOscuro() {
    document.body.classList.toggle("dark");
}

function validarFormulario() {
    let nombre =
    document.getElementById("nombre").value;

    if(nombre==""){
        alert("Debe completar el nombre.");
        return false;
    }

    alert("✅ Información enviada correctamente.");
    return false;
}

/* DATOS CURIOSOS */

function mostrarDato() {

    let datos = [

    "Las Islas Galápagos inspiraron la teoría de la evolución de Charles Darwin.",

    "Quito fue una de las primeras ciudades declaradas Patrimonio Cultural de la Humanidad.",

    "El Ecuador posee cuatro regiones naturales: Costa, Sierra, Amazonía e Insular.",

    "El Chimborazo es el punto más cercano al Sol debido a la forma de la Tierra.",

    "La Amazonía ecuatoriana alberga miles de especies de flora y fauna.",

    "Ecuador es uno de los países con mayor biodiversidad por kilómetro cuadrado del mundo."

    ];

    let numero =
    Math.floor(Math.random() * datos.length);

    document.getElementById("dato").innerHTML =
    datos[numero];
}
/* INFORMACIÓN DE REGIONES */

function cambiarCosta(){

    document.getElementById("textoCosta").innerHTML =

    "La Costa ecuatoriana se ubica al oeste del país y es conocida por sus hermosas playas y clima cálido. Entre sus principales destinos turísticos están Salinas, Montañita, Atacames y Manta. Su cultura está influenciada por tradiciones montubias y afroecuatorianas. La gastronomía destaca por el encebollado, ceviche, bolón de verde y mariscos. Es una región ideal para el turismo de playa y aventura.";

}

function cambiarSierra(){

    document.getElementById("textoSierra").innerHTML =

    "La Sierra ecuatoriana está atravesada por la Cordillera de los Andes y cuenta con impresionantes volcanes como el Cotopaxi y el Chimborazo. Aquí se encuentran ciudades históricas como Quito y Cuenca. Su cultura conserva muchas tradiciones indígenas y mestizas. Los platos típicos más conocidos son el hornado, la fritada, el locro de papa y las humitas. Es una región rica en historia, naturaleza y arquitectura.";

}

function cambiarAmazonia(){

    document.getElementById("textoAmazonia").innerHTML =

    "La Amazonía es una de las regiones con mayor biodiversidad del mundo. Está formada por extensas selvas, ríos y comunidades indígenas que mantienen vivas sus costumbres ancestrales. Entre los lugares más visitados están Tena, Puyo y Cuyabeno. Su gastronomía incluye el maito, pescado amazónico y la yuca. Es ideal para quienes disfrutan de la naturaleza y el ecoturismo.";

}

function cambiarInsular(){

    document.getElementById("textoInsular").innerHTML =

    "La Región Insular está formada por las Islas Galápagos, uno de los lugares más famosos del Ecuador. Sus especies únicas inspiraron a Charles Darwin en su teoría de la evolución. Aquí se pueden observar tortugas gigantes, iguanas marinas y lobos marinos. Es Patrimonio Natural de la Humanidad y uno de los destinos turísticos más importantes del planeta.";

}

/* RECOMENDADOR */

function recomendarRegion(){

    let opcion = document.getElementById("preferencia").value;

    if(opcion=="Playa"){

        document.getElementById("resultado").innerHTML =

        "🌊 COSTA: Te recomendamos visitar Salinas, Montañita, Manta y Atacames. Disfrutarás de hermosas playas, clima cálido y gastronomía como el encebollado, ceviche y bolón de verde.";

    }

    else if(opcion=="Montañas"){

        document.getElementById("resultado").innerHTML =

        "⛰️ SIERRA: Te recomendamos visitar Quito, Cuenca, Baños y el Chimborazo. Encontrarás volcanes, paisajes andinos y platos típicos como hornado, fritada y locro de papa.";

    }

    else if(opcion=="Selva"){

        document.getElementById("resultado").innerHTML =

        "🌿 AMAZONÍA: Te recomendamos visitar Tena, Puyo, Coca y Cuyabeno. Descubrirás una gran biodiversidad, comunidades indígenas y comida tradicional como el maito.";

    }

    else{

        document.getElementById("resultado").innerHTML =

        "🐢 INSULAR: Te recomendamos visitar las Islas Galápagos. Podrás observar tortugas gigantes, iguanas marinas, playas únicas y una fauna reconocida mundialmente.";

    }

}
/* CALIFICACIÓN */

function calificar(valor){
    document.getElementById("calificacionTexto").innerHTML =
    "⭐ Gracias por calificarnos con " + valor + " estrellas.";
}

function utilidad(valor){
    document.getElementById("utilidadTexto").innerHTML =
    "✅ Respuesta registrada: " + valor;
}

function recomendar(valor){
    document.getElementById("recomendarTexto").innerHTML =
    "👍 Gracias por tu opinión: " + valor;
}

/* QUIZ INTERACTIVO */

let preguntaActual = 0;
let puntos = 0;

const preguntas = [

{
pregunta:"¿En qué región se encuentran las Islas Galápagos?",
opciones:["Insular","Costa","Sierra","Amazonía"],
correcta:"Insular"
},

{
pregunta:"¿Cuál es la capital del Ecuador?",
opciones:["Quito","Guayaquil","Cuenca","Loja"],
correcta:"Quito"
},

{
pregunta:"¿Qué región posee la selva amazónica?",
opciones:["Amazonía","Costa","Sierra","Insular"],
correcta:"Amazonía"
},

{
pregunta:"¿Cuál es un plato típico de la Costa?",
opciones:["Encebollado","Hornado","Maito","Cuy"],
correcta:"Encebollado"
},

{
pregunta:"¿Cuántas regiones tiene el Ecuador?",
opciones:["4","3","5","6"],
correcta:"4"
}

];

function iniciarQuiz(){

    preguntaActual = 0;
    puntos = 0;

    mostrarPregunta();

}

function mostrarPregunta(){

    let pregunta = preguntas[preguntaActual];

    document.getElementById("pregunta").innerHTML =
    pregunta.pregunta;

    let html = "";

    pregunta.opciones.forEach(function(opcion){

        html +=
        '<button onclick="responder(\'' +
        opcion +
        '\')">' +
        opcion +
        '</button>';

    });

    document.getElementById("opciones").innerHTML = html;

}

function responder(opcion){

    if(opcion === preguntas[preguntaActual].correcta){
        puntos++;
    }

    preguntaActual++;

    if(preguntaActual < preguntas.length){

        mostrarPregunta();

    }else{

        document.getElementById("pregunta").innerHTML =
        "🎉 Quiz Finalizado";

        document.getElementById("opciones").innerHTML = "";

        document.getElementById("puntaje").innerHTML =
        "🏆 Obtuviste " +
        puntos +
        " de " +
        preguntas.length +
        " puntos.";

    }

}