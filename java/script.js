function verificarEdad() {
    let anioNacimientoInput = document.getElementById("anioNacimiento");
    let anioNacimiento = anioNacimientoInput.value;

    if (isNaN(anioNacimiento) || anioNacimiento === "" || anioNacimiento.length !== 4) {
        alert("Ingrese un año de nacimiento válido (formato: YYYY).");
        return;
    }

    // Obtener el año actual
    const anioActual = new Date().getFullYear();

    // Calcular la edad
    const edad = anioActual - parseInt(anioNacimiento, 10);

    if (edad >= 18) {
        alert("¡Bienvenido! Eres mayor de 18 años y puedes acceder al sitio.");
                window.location.href = "./pages/home.html";
    } else {
        alert("Lo siento, debes ser mayor de 18 años para acceder al sitio.");

    }
}