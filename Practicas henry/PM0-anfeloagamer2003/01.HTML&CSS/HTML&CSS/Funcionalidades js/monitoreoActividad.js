let actividades = [];
let contadorId = 0;

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".monitor-form");
  const output = document.querySelector(".monitor-output");

  
  forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const descripcion = forms[0].querySelectorAll("input")[0].value.trim();
    const riesgo = forms[0].querySelectorAll("input")[1].value.trim().toLowerCase();

    if (!descripcion || !riesgo) {
      output.innerHTML = "DEBES INGRESAR DESCRIPCIÓN Y RIESGO.";
      return;
    }

    actividades.push({ id: contadorId++, descripcion, riesgo });
    mostrarActividades(output, actividades);
    forms[0].reset();
  });


  forms[1].addEventListener("submit", (e) => {
    e.preventDefault();
    const idEliminar = parseInt(forms[1].querySelector("input").value);
    const existe = actividades.some((act) => act.id === idEliminar);

    if (!existe) {
      output.innerHTML = `NO EXISTE NINGUNA ACTIVIDAD CON ID ${idEliminar}.`;
    } else {
      actividades = actividades.filter((act) => act.id !== idEliminar);
      mostrarActividades(output, actividades);
    }

    forms[1].reset();
  });

  
  forms[2].addEventListener("submit", (e) => {
    e.preventDefault();
    const riesgoBuscar = forms[2].querySelector("input").value.trim().toLowerCase();
    const filtradas = actividades.filter((act) => act.riesgo === riesgoBuscar);

    if (filtradas.length === 0) {
      output.innerHTML = `NO HAY ACTIVIDADES CON RIESGO "${riesgoBuscar.toUpperCase()}".`;
    } else {
      mostrarActividades(output, filtradas);
    }

    forms[2].reset();
  });

  
  forms[3].addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarActividades(output, actividades);
  });
});

function mostrarActividades(output, lista) {
  if (lista.length === 0) {
    output.innerHTML = "NO HAY ACTIVIDADES PARA MOSTRAR.";
    return;
  }

  output.innerHTML = "";
  lista.forEach((act) => {
    output.innerHTML += `Id: ${act.id} - Descripción: ${act.descripcion}, Riesgo: ${act.riesgo}<br>`;
  });
}
