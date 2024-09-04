window.addEventListener('load', function() {
    // Mantén la pantalla de carga visible por un tiempo definido (por ejemplo, 2 segundos)
    setTimeout(function() {
        // Oculta la pantalla de carga
        document.querySelector('.loading-screen').style.display = 'none';
        // Muestra el contenido principal
        document.querySelector('.content').style.display = 'block';
    }, 2000); // Temporizador de 2 segundos
});
