document.getElementById("nombre").textContent = informacionPersonal.nombre;
        document.getElementById("foto").src = informacionPersonal.foto;
        document.getElementById("biografia").textContent = informacionPersonal.biografia;
        const olPasatiempos = document.getElementById("pasatiempos");
        informacionPersonal.pasatiempos.forEach(pasatiempo => {
            const li = document.createElement("li");
            li.textContent = pasatiempo;
            olPasatiempos.appendChild(li);
        });

        const ulInformacionContacto = document.getElementById("informacion-contacto");
        informacionPersonal.informacionContacto.forEach(info => {
            const li = document.createElement("li");
            li.textContent = info;
            ulInformacionContacto.appendChild(li);
        });
