const numPregunta = document.querySelector(".titulo__num-pregunta")
const tituloPregunta = document.querySelector(".juego__pregunta")
const  botonePreguntas= document.querySelectorAll(".preguntas__botones")
const opcionA = document.getElementById("opcionA")
const opcionB = document.getElementById("opcionB")
const opcionC = document.getElementById("opcionC")
const opcionD = document.getElementById("opcionD")
const botonEnviar = document.getElementById("botonSiguiente");
const arrayGuardado = sessionStorage.getItem('selecciones');
let puntosObtenidos = sessionStorage.getItem('puntosObtenidos');
let numeroPregunta = 0, categoria , preguntaCorrecta,preguntasAcertadas = 0;


//Datos de las preguntas
const historia =[
    {
    numero : 1,
    titulo : "¿Quién fue el primer presidente de los Estados Unidos?",
    opcion1:"Thomas Jefferson",
    opcion2:"George Washington",
    opcion3:"Abraham Lincoln",
    opcion4:"Benjamin Franklin",
    correcta:"George Washington"
    },
    {
        numero : 2,
        titulo : "¿En qué año comenzó la Primera Guerra Mundial?",
        opcion1: "1914",
        opcion2: "1918",
        opcion3: "1939",
        opcion4: "1945",
        correcta:"1914"
    },
    {
        numero : 3,
        titulo : "¿Qué civilización construyó las pirámides de Giza?",
        opcion1:"Los romanos",
        opcion2:"Los griegos",
        opcion3:"Los egipcios",
        opcion4:"Los mayas",
        correcta:"Los egipcios"
    },
    {
        numero : 4,
        titulo : '¿Quién escribió "El Manifiesto Comunista" junto a Friedrich Engels?',
        opcion1:"Vladimir Lenin",
        opcion2:"Karl Marx",
        opcion3:"Joseph Stalin",
        opcion4:"Leon Trotsky",
        correcta:"Karl Marx"
    },
    {
        numero : 5,
        titulo : "¿Qué evento marcó el final de la Edad Media en Europa?",
        opcion1:"La caída del Imperio Romano de Occidente",
        opcion2:"La Revolución Francesa",
        opcion3:"El descubrimiento de América en 1492",
        opcion4:"La caída de Constantinopla en 1453",
        correcta:"La caída de Constantinopla en 1453"
    }
]
const programacion =[
    {
    numero : 1,
    titulo : "¿Qué lenguaje de programación es conocido por su uso en ciencia de datos y machine learning?",
    opcion1:"Swift",
    opcion2:"Java",
    opcion3:"Python",
    opcion4:"C++",
    correcta:"Python"
    },
    {
        numero : 2,
        titulo : "¿Qué significa HTML?",
        opcion1:"HyperText Machine Language",
        opcion2:"HyperText Markup Language",
        opcion3:"High-Level Text Management Language",
        opcion4:"Hyperlink and Text Management Language",
        correcta:"HyperText Markup Language"
    },
    {
        numero :3 ,
        titulo : "¿Qué significa CSS en desarrollo web?",
        opcion1:"Computer Style Sheets",
        opcion2:"Cascading Style Sheets",
        opcion3:"Creative Style System  ",
        opcion4:"Code Styling Syntax",
        correcta:"Cascading Style Sheets"
    },
    {
        numero : 4,
        titulo : "¿Cuál de los siguientes es un paradigma de programación?",
        opcion1:"Compilación",
        opcion2:"Depuración",
        opcion3:"Orientación a objetos",
        opcion4:"Ejecución",
        correcta:"Orientación a objetos"
    },
    {
        numero : 5,
        titulo : "¿Qué estructura de control se utiliza para repetir un bloque de código un número específico de veces?",
        opcion1:"if-else",
        opcion2:"switch",
        opcion3:"for",
        opcion4:"while",
        correcta:"for"
    },

]
const deporte =[
    {
    numero : 1,
    titulo : "¿Cual es el deporte donde se puede hacer un hat-trick?",
    opcion1:"Fútbol",
    opcion2:"Baloncesto",
    opcion3:"Tenis",
    opcion4:"Béisbol",
    correcta:"Fútbol"
    },
    {
    numero : 2,
    titulo : "¿Cuál es el evento deportivo más visto a nivel mundial?",
    opcion1:"Super Bowl",
    opcion2:"Juegos Olímpicos",
    opcion3:"Final de la Copa del Mundo de Fútbol",
    opcion4:"Wimbledon",
    correcta:"Final de la Copa del Mundo de Fútbol"
    },
    {
    numero : 3,
    titulo : '¿En qué deporte se utiliza el término "home run"?',
    opcion1:"Fútbol americano",
    opcion2:"Béisbol",
    opcion3:"Hockey",
    opcion4:"Rugby",
    correcta:"Béisbol"
    },
    {
    numero : 4,
    titulo : "¿Cuál es el deporte nacional de Japón?",
    opcion1:"Sumo",
    opcion2:"Karate",
    opcion3:"Béisbol",
    opcion4:"Judo",
    correcta:"Sumo"
    },
    {
    numero : 5,
    titulo : "¿Cuál es la distancia de un maratón oficial?",
    opcion1:"38.5 kilómetros",
    opcion2:"40.2 kilómetros",
    opcion3:"42.195 kilómetros",
    opcion4:"45 kilómetros",
    correcta:"42.195 kilómetros"
    }
]
const general =[
    {
    numero : 1,
    titulo : "¿Cuál es el planeta más grande del sistema solar?",
    opcion1:"Tierra",
    opcion2:"Marte",
    opcion3:"Júpiter",
    opcion4:"Saturno",
    correcta:"Júpiter"
    },
    {
    numero : 2,
    titulo : "¿Quién pintó la Mona Lisa?",
    opcion1:"Vincent van Gogh",
    opcion2:"Pablo Picasso",
    opcion3:"Leonardo da Vinci",
    opcion4:"Claude Monet",
    correcta:"Leonardo da Vinci"
    },
    {
    numero : 3,
    titulo : "¿Cuál es el océano más grande del mundo?",
    opcion1:"Océano Atlántico",
    opcion2:"Océano Índico",
    opcion3:"Océano Pacífico",
    opcion4:"Océano Ártico",
    correcta:"Océano Pacífico"
    },
    {
    numero : 4,
    titulo : "¿En qué país se encuentra la Torre Eiffel?",
    opcion1:"Italia",
    opcion2:"España",
    opcion3:"Francia",
    opcion4:"Alemania",
    correcta:"Francia"
    },
    {
    numero : 5,
    titulo : "¿Cuál es el animal más rápido del mundo?",
    opcion1:"Guepardo",
    opcion2:"Halcón peregrino",
    opcion3:"Pez vela",
    opcion4:"León",
    correcta:"Halcón peregrino"
    }]
const geografia = [
    {
    numero : 1,
    titulo : "¿Cuál es el río más largo del mundo?",
    opcion1:"Amazonas",
    opcion2:"Nilo",
    opcion3:"Yangtsé",
    opcion4:"Misisipi",
    correcta:"Amazonas"
    },
    {
    numero : 2,
    titulo : "¿Qué país tiene la mayor población del mundo?",
    opcion1:"India",
    opcion2:"Estados Unidos",
    opcion3:"China",
    opcion4:"Indonesia",
    correcta:"China"
    },
    {
    numero : 3,
    titulo : "¿Cuál es el país más grande del mundo por superficie?",
    opcion1:"Canadá",
    opcion2:"China",
    opcion3:"Rusia",
    opcion4:"Estados Unidos",
    correcta:"Rusia"
    },
    {
    numero : 4,
    titulo : "¿En qué continente se encuentra el desierto del Sahara?",
    opcion1:"Asia",
    opcion2:"África",
    opcion3:"América",
    opcion4:"Australia",
    correcta:"África"
    },
    {
    numero : 5,
    titulo : "¿Cuál es la capital de Canadá?",
    opcion1:"Toronto",
    opcion2:"Vancouver",
    opcion3:"Ottawa",
    opcion4:"Montreal",
    correcta:"Ottawa"
    }]
const peliculas = [
    {
    numero : 1,
    titulo : '¿Qué actor interpretó a Jack Dawson en "Titanic"?',
    opcion1:"Brad Pitt",
    opcion2:"Leonardo DiCaprio",
    opcion3:"Tom Cruise",
    opcion4:"Matt Damon",
    correcta:"Leonardo DiCaprio"
    },
    {
    numero : 2,
    titulo : "¿Qué película de Disney está basada en la historia de Hamlet?",
    opcion1:"El Rey León",
    opcion2:"Frozen",
    opcion3:"Mulán",
    opcion4:"La Sirenita",
    correcta:"El Rey León"
    },
    {
    numero : 3,
    titulo : '¿Qué película tiene la famosa frase "Yo soy tu padre"?',
    opcion1:"Star Wars: El Imperio Contraataca",
    opcion2:"Star Wars: Una nueva esperanza",
    opcion3:"Star Wars: El retorno del Jedi",
    opcion4:"Star Wars: La amenaza fantasma",
    correcta:"Star Wars: El Imperio Contraataca"
    },
    {
    numero : 4,
    titulo : "¿Quién interpretó a Tony Stark (Iron Man) en el Universo Cinematográfico de Marvel?",
    opcion1:"Chris Hemsworth",
    opcion2:"Robert Downey Jr",
    opcion3:"Chris Evans",
    opcion4:"Mark Ruffalo",
    correcta:"Robert Downey Jr"
    },
    {
    numero : 5,
    titulo : "¿Qué película animada de Pixar trata sobre un niño que viaja al mundo de los muertos?",
    opcion1:"Coco",
    opcion2:"Inside Out",
    opcion3:"Up",
    opcion4:"Toy Story",
    correcta:"Coco"
    }]

function buscarCategoria(){
    if(arrayGuardado){
        let selecciones = JSON.parse(arrayGuardado)
        
        switch (selecciones[0]) {
            case "historia":cargarDatos(historia[0]);categoria = historia; break;
            case "programacion" :cargarDatos(programacion[0]);categoria = programacion; break;
            case "deporte" :cargarDatos(deporte[0]);categoria = deporte; break;
            case "general" :cargarDatos(general[0]);categoria = general; break;
            case "geografia" :cargarDatos(geografia[0]); categoria = geografia; break;
            case "peliculas" :cargarDatos(peliculas[0]);categoria = peliculas;break;
        }
    }
}

function cargarDatos(datos){

    botonePreguntas.forEach(boton=>{
        boton.classList.remove('correcto', 'incorrecto','desabilitar-elemento');
    })

    numPregunta.textContent = datos.numero;
    tituloPregunta.textContent = datos.titulo;
    opcionA.textContent = datos.opcion1;
    opcionB.textContent = datos.opcion2;
    opcionC.textContent = datos.opcion3;
    opcionD.textContent = datos.opcion4;
    preguntaCorrecta = datos.correcta;

    botonePreguntas.forEach(boton =>{
        boton.addEventListener("click", aggEventoBotones)
    })
}

function aggEventoBotones(e){

    if(e.target.innerText == preguntaCorrecta){
        e.currentTarget.classList.add("correcto")
        preguntasAcertadas ++;
    }else{
        e.currentTarget.classList.add("incorrecto")
    }

    botonePreguntas.forEach((b) => {
        if (b.textContent == preguntaCorrecta) {
            b.classList.add('correcto');
        } else {
            b.classList.add('incorrecto');
        }
        b.classList.add("desabilitar-elemento");
    });

}

botonEnviar.addEventListener("click",()=>{
    numeroPregunta ++;
    if(numeroPregunta < 5){
        cargarDatos(categoria[numeroPregunta])
    }else{
        puntosObtenidos?puntosObtenidos = preguntasAcertadas + parseInt(puntosObtenidos):puntosObtenidos = preguntasAcertadas;
        console.log(puntosObtenidos)    
        sessionStorage.setItem('puntosObtenidos', JSON.stringify(puntosObtenidos));
        location.href ="menu.html"
    }
})

buscarCategoria()


