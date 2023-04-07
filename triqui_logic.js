const cuadrados = document.querySelectorAll('.cuadrado');
let juagadorActual = 'X';
const jugadores = ['X', 'O'];
let puntajeX = 0;
let puntajeO = 0;
cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        if (cuadrado.textContent === '') {
            cuadrado.textContent = juagadorActual;
            cuadrado.setAttribute('jugador-data', juagadorActual);
            valideGanador();
            juagadorActual = juagadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
        }
    });
});

const botonReseteo = document.querySelector('#reinicio-btn');
botonReseteo.addEventListener('click', () => {
    reseteoJuego();
    const etiquetaPuntaje = document.querySelector('#puntaje');
    etiquetaPuntaje.textContent = 'Jugador X:0 vs O:0';
});

function valideGanador(){
    const combinacionGanadores = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for ( let i = 0; i < combinacionGanadores.length; i++){
        const [a, b, c] = combinacionGanadores[i];
        const cuadradoA = cuadrados[a];
        const cuadradoB = cuadrados[b];
        const cuadradoC = cuadrados[c];
        
        if ( cuadradoA.textContent === juagadorActual &&
            cuadradoB.textContent === juagadorActual &&
            cuadradoC.textContent === juagadorActual){
                const etiquetaGanador = document.querySelector('#etiqueta_ganador');
                etiquetaGanador.textContent = `El ganador fue ${juagadorActual}! Felicitaciones.`;
                puntaje(juagadorActual);
                setTimeout(() => {
                    reseteoJuego()
                }, 3000);
                return;
            }
     }
}

function puntaje(juagadorActual) {
    if (juagadorActual === 'X') {
        puntajeX++;
    } else {
        puntajeO++;
    }
    const etiquetaPuntaje = document.querySelector('#puntaje');
    etiquetaPuntaje.textContent = `Jugador X:${puntajeX} vs O:${puntajeO}`;
    return;
}

function reseteoJuego() {
    cuadrados.forEach(cuadrado => {
        cuadrado.textContent = '';
        cuadrado.removeAttribute('jugador-data');
    });
    juagadorActual = 'X';
    const etiquetaGanador = document.querySelector('#etiqueta_ganador');
    etiquetaGanador.textContent = "No ha ganado nadie hasta el momento.";
    return;
}