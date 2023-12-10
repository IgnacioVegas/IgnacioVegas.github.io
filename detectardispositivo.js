window.onload = function () {
    var botonMovil = document.getElementById('boton-movil');
    var imagenDesktop = document.getElementById('imagen-desktop');

    // Verificar el tipo de dispositivo al cargar la página
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Si es un dispositivo móvil, mostrar el botón
        botonMovil.classList.remove('hidden');
    } else {
        // Si es un PC de escritorio, mostrar la imagen
        imagenDesktop.classList.remove('hidden');
    }
};
