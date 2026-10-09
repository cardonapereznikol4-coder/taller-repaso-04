// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// [Comentario obligatorio: Explica aquí con tus palabras qué hace getElementById y por qué le pasamos 'btn-toggle-tema']
const btnTema = document.getElementById('btn-toggle-tema');

// [Comentario obligatorio: Explica por qué seleccionamos el body directamente con document.body]
const body = document.body;

// 2. MANEJO DE EVENTOS[cite: 2]
// [Comentario obligatorio: Explica qué es el evento 'click' y qué papel juega la función anónima que le pasamos]
btnTema.addEventListener('click', function() {
    
    // [Comentario obligatorio: Explica qué hace exactamente el método classList.toggle('tema-oscuro')]
    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Oscuro";
    }
});


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR[cite: 2]
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {
    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
} else {
    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}

// 3. INYECCIÓN EN EL DOM[cite: 2]
// [Comentario obligatorio: Explica la diferencia entre textContent e innerHTML y por qué usamos textContent aquí]
textoSaludo.textContent = mensaje;