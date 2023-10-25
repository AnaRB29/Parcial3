function validarFormulario() {
    // Validación del campo de texto
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
      alert("Por favor, ingresa un nombre.");
      return false;
    }

    // Validación del campo de correo electrónico
    const correo = document.getElementById("correo").value;
    const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!correo.match(correoPattern)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }

    // Validación de la selección de opciones
    const seleccion = document.getElementById("seleccion").value;
    if (seleccion === "0") {
      alert("Por favor, selecciona una opción.");
      return false;
    }

    // Validación del campo de contraseña
    const contrasena = document.getElementById("contrasena").value;
    if (contrasena.length < 8) {
      alert("La contraseña debe contener al menos 8 caracteres.");
      return false;
    }

    // Simulación de envío de datos (puedes reemplazar esto con tu lógica de envío real)
    alert("Enviando datos...");
    setTimeout(function() {
      alert("Formulario enviado con éxito.");
    }, 2000); // Simulación de 2 segundos

    return false; // Evita el envío real del formulario
  }