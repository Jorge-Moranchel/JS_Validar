let btnverificar = document.getElementById("verificar");

function Verificaciones() {
    let correo = document.getElementById("correo").value;
    let contrasenia = document.getElementById("contrasenia").value;
    let mostrarMensaje = document.getElementById("mostrarMensaje");
if (correo === "" || contrasenia === "") {
        mostrarMensaje.innerHTML = "<p>¡Error! Debe completar todos los campos. </p>";
    } else {
        mostrarMensaje.innerHTML = "<p>Felicidades, ¡estás dentro! </p>";
    }
}
btnverificar.addEventListener("click", Verificaciones);