function cargarMaterias() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "materias.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var materias = JSON.parse(xhr.responseText);
            var materiasList = document.getElementById("materias-list");

            materias.forEach(function (materia) {
                var materiaItem = document.createElement("li");
                materiaItem.innerHTML = "<strong>Nombre de la Materia:</strong> " + materia.nombreMateria + "<br>" +
                                        "<strong>Nombre del Docente:</strong> " + materia.nombreDocente + "<br>" +
                                        "<strong>Descripción:</strong> " + materia.descripcion + "<br><br>";

                materiasList.appendChild(materiaItem);
            });
        }
    };
    xhr.send();
}
cargarMaterias();