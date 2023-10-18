document.addEventListener("DOMContentLoaded", function () {
    const pasatiempos = informacionPersonal.pasatiempos;
    const actividadesFavoritas = [];

    const mostrarPasatiemposButton = document.getElementById("mostrarPasatiempos");
    const actividadesFavoritasList = document.getElementById("actividades-favoritas");
    const nuevaActividadButton = document.getElementById("nuevaActividad");

    mostrarPasatiemposButton.addEventListener("click", function () {
        const pasatiemposList = document.getElementById("pasatiempos");
        pasatiemposList.style.display = "block";
    });

    nuevaActividadButton.addEventListener("click", function () {
        const nuevaActividad = prompt("Ingresa una nueva actividad favorita:");
        if (nuevaActividad) {
            actividadesFavoritas.push(nuevaActividad);
            actualizarActividadesFavoritas();
        }
    });

    function actualizarActividadesFavoritas() {
        actividadesFavoritasList.innerHTML = "";
        for (const actividad of actividadesFavoritas) {
            const actividadItem = document.createElement("li");
            actividadItem.textContent = actividad;
            actividadesFavoritasList.appendChild(actividadItem);
        }
    }

    
        const cambiarColorButton = document.getElementById("cambiarColor");
        const body = document.body;

        cambiarColorButton.addEventListener("click", function () {
            if (body.classList.contains("rosa-fondo")) {
                body.classList.remove("rosa-fondo");
                body.classList.remove("rosa-texto");
            } else {
                body.classList.add("rosa-fondo");
                body.classList.add("rosa-texto");
            }
        });

        

});