// RETO 1: MODO OSCURO CON PERSISTENCIA
const btnTema = document.getElementById('btn-toggle-tema');
const body = document.body;

if (localStorage.getItem('preferenciaTema') === 'oscuro') {
    body.classList.add('tema-oscuro');
}

btnTema.textContent = body.classList.contains('tema-oscuro')
    ? "☀️ Modo Claro"
    : "🌙 Modo Oscuro";

btnTema.addEventListener('click', function() {
    body.classList.toggle('tema-oscuro');

    const oscuro = body.classList.contains('tema-oscuro');
    btnTema.textContent = oscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    localStorage.setItem('preferenciaTema', oscuro ? 'oscuro' : 'claro');
});


// RETO 2: SALUDO DINÁMICO
const textoSaludo = document.getElementById('saludo-tiempo-real');
const horaActual = new Date().getHours();

textoSaludo.textContent = horaActual >= 6 && horaActual < 12
    ? "¡Buenos días! Espero que tengas una excelente mañana."
    : horaActual >= 12 && horaActual < 18
    ? "¡Buenas tardes! Gracias por visitar mi perfil."
    : "¡Buenas noches! Descubre mi trabajo.";