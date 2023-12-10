
// Función para detectar el tipo de dispositivo
function detectarDispositivo() {
    var esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return esMovil ? 'movil' : 'desktop';
}

// Función para mostrar u ocultar elementos según el tipo de dispositivo
function manejarVisualizacion() {
    var tipoDispositivo = detectarDispositivo();

    if (tipoDispositivo === 'movil') {
        // Mostrar el botón para dispositivos móviles
        document.getElementById('botonMovil').style.display = 'block';
    } else {
        // Mostrar la imagen para escritorio
        document.getElementById('imagenDesktop').style.display = 'block';
    }
}

// Llamar a la función al cargar la página
manejarVisualizacion();
