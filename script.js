let visitas = 0;


/* ================= LOGIN ================= */

function mostrarLogin() {

    document.getElementById("login").style.display = "flex";

    document.getElementById("pagina").style.display = "none";

}


function iniciarSesion() {

    let usuario =
    document.getElementById("usuarioLogin").value;

    let password =
    document.getElementById("passwordLogin").value;

    let mensaje =
    document.getElementById("mensajeLogin");


    if(usuario === "santiago" && password === "1234") {

        mensaje.innerHTML =
        "✅ Inicio de sesión correcto";

        document.getElementById("login").style.display =
        "none";

        document.getElementById("pagina").style.display =
        "block";

        contarVisita();

    }

    else {

        mensaje.innerHTML =
        "❌ Usuario o contraseña incorrectos.";

    }

}


/* ================= MENÚ ================= */

function mostrarMenu() {

    let menu =
    document.getElementById("menu");


    if(menu.style.display === "none" ||
       menu.style.display === "") {

        menu.style.display = "block";

    }

    else {

        menu.style.display = "none";

    }

}


/* ================= VISITAS ================= */

function contarVisita() {

    visitas++;

    document.getElementById("contador").innerHTML =
    "👥 Visitas: " + visitas;

}


/* ================= MENSAJE ================= */

function actualizarMensaje() {

    document.getElementById("mensaje").innerHTML =
    "✅ Información actualizada correctamente";

}


/* ================= MODO OSCURO ================= */

function modoOscuro() {

    document.body.classList.toggle("dark");

}


/* ================= FORMULARIO ================= */

function validarFormulario() {

    let nombre =
    document.getElementById("nombre").value;


    if(nombre == "") {

        alert("Debe completar el nombre.");

        return false;

    }


    alert("✅ Información enviada correctamente.");

    return false;

}


/* ================= DATOS CURIOSOS ================= */

function mostrarDato() {

    let datos = [

    "Las Islas Galápagos inspiraron la teoría de la evolución de Charles Darwin.",

    "Quito fue una de las primeras ciudades declaradas Patrimonio Cultural de la Humanidad.",

    "El Ecuador posee cuatro regiones naturales: Costa, Sierra, Amazonía e Insular.",

    "El Chimborazo es el punto más cercano al Sol debido a la forma de la Tierra.",

    "La Amazonía ecuatoriana alberga miles de especies de flora y fauna.",

    "Ecuador es uno de los países con mayor biodiversidad por kilómetro cuadrado del mundo.",

    "Ecuador es conocido por su cacao fino de aroma y por la producción de chocolate.",

    "Las Islas Galápagos poseen especies únicas que no se encuentran en otros lugares del mundo.",

    "Quito está ubicada en la región Sierra y es una de las ciudades más importantes del Ecuador.",

    "Ecuador posee playas, montañas, selvas y las Islas Galápagos dentro de su territorio."

    ];


    let numero =
    Math.floor(Math.random() * datos.length);


    document.getElementById("dato").innerHTML =
    datos[numero];

}


/* ================= REGIONES ================= */

let regionAbierta = null;


function cambiarCosta() {

    let texto =
    document.getElementById("textoCosta");


    if(regionAbierta === "costa") {

        texto.style.display = "none";

        regionAbierta = null;

        return;

    }


    cerrarRegiones();


    texto.innerHTML =
    "La Costa ecuatoriana se ubica al oeste del país y es conocida por sus hermosas playas y clima cálido. Entre sus principales destinos turísticos están Salinas, Montañita, Atacames y Manta. Su cultura está influenciada por tradiciones montubias y afroecuatorianas. La gastronomía destaca por el encebollado, ceviche, bolón de verde y mariscos. Es una región ideal para el turismo de playa y aventura.";


    texto.style.display = "block";

    regionAbierta = "costa";

}


function cambiarSierra() {

    let texto =
    document.getElementById("textoSierra");


    if(regionAbierta === "sierra") {

        texto.style.display = "none";

        regionAbierta = null;

        return;

    }


    cerrarRegiones();


    texto.innerHTML =
    "La Sierra ecuatoriana está atravesada por la Cordillera de los Andes y cuenta con impresionantes volcanes como el Cotopaxi y el Chimborazo. Aquí se encuentran ciudades históricas como Quito y Cuenca. Su cultura conserva muchas tradiciones indígenas y mestizas. Los platos típicos más conocidos son el hornado, la fritada, el locro de papa y las humitas. Es una región rica en historia, naturaleza y arquitectura.";


    texto.style.display = "block";

    regionAbierta = "sierra";

}


function cambiarAmazonia() {

    let texto =
    document.getElementById("textoAmazonia");


    if(regionAbierta === "amazonia") {

        texto.style.display = "none";

        regionAbierta = null;

        return;

    }


    cerrarRegiones();


    texto.innerHTML =
    "La Amazonía es una de las regiones con mayor biodiversidad del mundo. Está formada por extensas selvas, ríos y comunidades indígenas que mantienen vivas sus costumbres ancestrales. Entre los lugares más visitados están Tena, Puyo y Cuyabeno. Su gastronomía incluye el maito, pescado amazónico y la yuca. Es ideal para quienes disfrutan de la naturaleza y el ecoturismo.";


    texto.style.display = "block";

    regionAbierta = "amazonia";

}


function cambiarInsular() {

    let texto =
    document.getElementById("textoInsular");


    if(regionAbierta === "insular") {

        texto.style.display = "none";

        regionAbierta = null;

        return;

    }


    cerrarRegiones();


    texto.innerHTML =
    "La Región Insular está formada por las Islas Galápagos, uno de los lugares más famosos del Ecuador. Sus especies únicas inspiraron a Charles Darwin en su teoría de la evolución. Aquí se pueden observar tortugas gigantes, iguanas marinas y lobos marinos. Es Patrimonio Natural de la Humanidad y uno de los destinos turísticos más importantes del planeta.";


    texto.style.display = "block";

    regionAbierta = "insular";

}


function cerrarRegiones() {

    document.getElementById("textoCosta").style.display =
    "none";

    document.getElementById("textoSierra").style.display =
    "none";

    document.getElementById("textoAmazonia").style.display =
    "none";

    document.getElementById("textoInsular").style.display =
    "none";

}


/* ================= RECOMENDADOR ================= */

function recomendarRegion(){

    let opcion =
    document.getElementById("preferencia").value;


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


/* ================= CALIFICACIÓN ================= */

function calificar(valor){

    document.getElementById("calificacionTexto").innerHTML =

    "⭐ Gracias por calificarnos con " +
    valor +
    " estrellas.";

}


function utilidad(valor){

    document.getElementById("utilidadTexto").innerHTML =

    "✅ Respuesta registrada: " +
    valor;

}


function recomendar(valor){

    document.getElementById("recomendarTexto").innerHTML =

    "👍 Gracias por tu opinión: " +
    valor;

}


/* ================= QUIZ ================= */

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

    let pregunta =
    preguntas[preguntaActual];


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


    document.getElementById("opciones").innerHTML =
    html;

}


function responder(opcion){

    if(opcion === preguntas[preguntaActual].correcta){

        puntos++;

    }


    preguntaActual++;


    if(preguntaActual < preguntas.length){

        mostrarPregunta();

    }

    else{

        document.getElementById("pregunta").innerHTML =
        "🎉 Quiz Finalizado";


        document.getElementById("opciones").innerHTML =
        "";


        document.getElementById("puntaje").innerHTML =

        "🏆 Obtuviste " +
        puntos +
        " de " +
        preguntas.length +
        " puntos.";

    }

}
