document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const container = document.getElementById("container");

    // Obtén el tema actual del almacenamiento local (si existe)
    const currentTheme = localStorage.getItem("theme");

    // Establece el tema guardado en el almacenamiento local o el predeterminado
    if (currentTheme) {
        container.classList.add(currentTheme);
    } else {
        container.classList.add("light-theme");
    }

    // Función para cambiar el tema
    function toggleTheme() {
        if (container.classList.contains("light-theme")) {
            container.classList.remove("light-theme");
            container.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            container.classList.remove("dark-theme");
            container.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    }

    // Escucha el evento de clic en el botón para cambiar el tema
    themeToggle.addEventListener("click", toggleTheme);
});