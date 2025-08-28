// Variables globales
let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");
let piezas = [
    "split-1.png", "split-2.png", "split-3.png", "split-4.png",
    "split-5.png", "split-6.png", "split-7.png", "split-8.png",
    "split-9.png", "split-10.png", "split-11.png", "split-12.png",
    "split-13.png", "split-14.png", "split-15.png", ""];
let estado = [];

// Cronometro
let cronometro = null;
let timeoutPerdida = null;
let tiempo = 300;
const tiempoMaximo = 300;
let cronometroElem = document.getElementById("tiempo");
let juegoTerminado = false; 

// Cronometro compacto
function actualizarCronometro(reset = false) {
    if (reset) {
        clearInterval(cronometro);
        clearTimeout(timeoutPerdida); 
        cronometro = null;
        timeoutPerdida = null;
        tiempo = 300;
        cronometroElem.textContent = "05:00";
        juegoTerminado = false;
        return;
    }

    if (cronometro || juegoTerminado)
        return;

    cronometro = setInterval(() => {
        if (juegoTerminado) {
            clearInterval(cronometro);
            return;
        }

        tiempo--;
        const min = String(Math.floor(tiempo / 60)).padStart(2, "0");
        const seg = String(tiempo % 60).padStart(2, "0");
        cronometroElem.textContent = `${min}:${seg}`;

        if (tiempo <= 0) { 
            clearInterval(cronometro);
            cronometro = null;
            juegoTerminado = true;
            alert("!!!Que paso mi bro no llego a tiempo para compeltar el pollo Gladeador");
            reiniciar();
        }
    }, 1000);
}

// Funcion para mezclar piezas
function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Dibujar el puzzle
function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            let img = document.createElement("img");
            img.src = "../Images/" + valor;
            img.alt = valor;
            img.style.width = "100%";
            img.style.height = "100%";
            celda.appendChild(img);
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

// Intentar mover pieza
function mover(indice) {
    if (juegoTerminado)
    return; 
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);

    // Iniciar el cronometro en el primer movimiento
    if (tiempo === 300 && !cronometro && !juegoTerminado) {
        actualizarCronometro();
        // Programar la pérdida por timeout
        timeoutPerdida = setTimeout(() => {
            if (!juegoTerminado) {
                juegoTerminado = true;
                clearInterval(cronometro);
                cronometro = null;
                alert("!!!Que paso mi bro no llego a tiempo para compeltar el pollo Gladeador");
                reiniciar();
            }
        }, 300000);
    }

    // Verificar si es adyacente
    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
            (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

// Verificar si gano
function verificar() {
    if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        juegoTerminado = true; 
        clearInterval(cronometro); 
        clearTimeout(timeoutPerdida); 
        cronometro = null;
        timeoutPerdida = null;
        alert("🎉 ¡Felicidades! Uniste los chakras del pollo GLADEADOR esoooooo 👻🐔🐔🐔🐔🐔🐔👻🐓🐓🐓🐓🐓👻");
    }
}

// Reiniciar juego
function reiniciar() {
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();
    actualizarCronometro(true);
}

// Funciones de navegación
function irAlIndex() {
    alert("Regresando al Menu principal...");
    window.location.href = "../index.jsp";
}

function otroPuzzle1() {
    alert("Cargando el otro puzzle...");
    window.location.href = "../Index/rompecabezas2.jsp";
}

function otroPuzzle2() {
    alert("Cargando el otro puzzle...");
    window.location.href = "../Index/rompecabezas3.jsp";
}

// Inicializar el juego
reiniciar();

function mostrarResuelto() {
    estado = [...piezas];
    juegoTerminado = false; 
    clearInterval(cronometro);
    clearTimeout(timeoutPerdida);
    cronometro = null;
    timeoutPerdida = null;
    tiempo = 300;
    cronometroElem.textContent = "05:00";
    dibujar();
    alert("Puzzle mostrado en orden correcto. Puedes hacer un movimiento para probar la victoria.");
}