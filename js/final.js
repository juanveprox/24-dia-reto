const nombreUsuario = document.querySelector(".titulo__usuario")
const puntuacionFinal = document.querySelector(".final__puntuacion")
const botonVolverInicio = document.querySelector(".main__boton")
nombreUsuario.textContent = sessionStorage.getItem('nombre')
puntuacionFinal.textContent = sessionStorage.getItem('puntosObtenidos');


botonVolverInicio.addEventListener("click",()=>{
    sessionStorage.clear();
    location.href = "index.html"
})