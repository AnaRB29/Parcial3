const catImageLoader = {
    apiUrl: 'https://cataas.com/cat',

    cargarImagen: function() {
        fetch(this.apiUrl)
            .then(response => response.url)
            .then(url => {
                const imagen = document.createElement('img');
                imagen.src = url;

                const imagenContainer = document.getElementById('imagenContainer');
                imagenContainer.innerHTML = '';
                imagenContainer.appendChild(imagen);
            })
            .catch(error => {
                console.error('Error al cargar la imagen:', error);
            });
    }
};

const eventHandler = {
    init: function() {
        const botonCargarImagen = document.getElementById('cargarImagen');
        botonCargarImagen.addEventListener('click', function() {
            catImageLoader.cargarImagen();
        });
    }
};

eventHandler.init();