const nombreUsuario =  sessionStorage.getItem('nombre');
const elementosMenu = document.querySelectorAll(".menu__elemento")
const menuNombreUsuario = document.querySelector(".menu__nombre-usuario")
const arrayGuardado = sessionStorage.getItem('selecciones');
let selecciones;
const  puntosAcertados = document.querySelector(".menu__acertados");
const  preguntasHechas = document.querySelector(".menu__puntos");
const puntosObtenidos = sessionStorage.getItem('puntosObtenidos');
menuNombreUsuario.textContent= nombreUsuario;

elementosMenu.forEach(elemento =>{
    elemento.addEventListener("click",()=>{
        arrayGuardado?selecciones = JSON.parse(arrayGuardado):selecciones = [];
        selecciones.unshift(elemento.id)
        sessionStorage.setItem('selecciones', JSON.stringify(selecciones));
        location.href = "juego.html"
    }
    )
})

function desactivarElemento(){
    let array = JSON.parse(arrayGuardado)
    elementosMenu.forEach(elemento =>{
        if(array.includes(elemento.id)){
            elemento.classList.add("desabilitado")
        }
    })

    if(array.length == 6){
        location.href = "final.html"
    }
}

function aggPuntos(){
    switch (JSON.parse(arrayGuardado).length) {
        case 1:preguntasHechas.textContent = "5";break;
        case 2:preguntasHechas.textContent = "10";break;
        case 3:preguntasHechas.textContent = "15";break;
        case 4:preguntasHechas.textContent = "20";break;
        case 5:preguntasHechas.textContent = "25";break;
        case 6:preguntasHechas.textContent = "30";break;
    }
    puntosAcertados.textContent = puntosObtenidos;
}

desactivarElemento()
aggPuntos()