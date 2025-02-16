const inputNombre = document.getElementById("inputNombre");
const botonIniciar = document.getElementById("botonIniciar");

botonIniciar.addEventListener("click",()=>{
    if(inputNombre.value == ""){
        alert("No puedes Iniciar el juego sin nombre :)")
    }else{
        
        sessionStorage.setItem('nombre', inputNombre.value);
        location.href = "menu.html"
    }
})


