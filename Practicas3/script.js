document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Obtén el tema actual del almacenamiento local (si existe)
    const currentTheme = localStorage.getItem("theme");

    // Función para cambiar el tema y el texto del botón
    function toggleTheme() {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            themeToggle.textContent = "Cambiar a Tema Claro";
            localStorage.setItem("theme", "dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            themeToggle.textContent = "Cambiar al Tema Oscuro";
            localStorage.setItem("theme", "light-theme");
        }
    }

    // Establece el texto del botón según el tema actual
    if (currentTheme === "dark-theme") {
        themeToggle.textContent = "Cambiar a Tema Claro";
    } else {
        themeToggle.textContent = "Cambiar al Tema Oscuro";
    }

    // Escucha el evento de clic en el botón para cambiar el tema y el texto
    themeToggle.addEventListener("click", toggleTheme);
});