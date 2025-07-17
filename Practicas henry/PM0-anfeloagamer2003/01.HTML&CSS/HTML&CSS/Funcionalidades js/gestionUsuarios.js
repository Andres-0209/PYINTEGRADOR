const perfiles = [
  { usuario: "Alice", codigoAcceso: "1234", rol: "bajo", antiguedad: 12 },
  { usuario: "Bob", codigoAcceso: "5678", rol: "medio", antiguedad: 24 },
  { usuario: "Charlie", codigoAcceso: "9101", rol: "alto", antiguedad: 35 },
  { usuario: "Diana", codigoAcceso: "1122", rol: "admin", antiguedad: 48 },
  { usuario: "Eve", codigoAcceso: "334", rol: "bajo", antiguedad: 6 },
  { usuario: "Frank", codigoAcceso: "5566", rol: "medio", antiguedad: 12 },
  { usuario: "Grace", codigoAcceso: "7788", rol: "alto", antiguedad: 18 },
  { usuario: "Hank", codigoAcceso: "9900", rol: "admin", antiguedad: 30 },
  { usuario: "Ivy", codigoAcceso: "1235", rol: "bajo", antiguedad: 36 },
  { usuario: "Jack", codigoAcceso: "5679", rol: "medio", antiguedad: 48 },
  { usuario: "Karen", codigoAcceso: "9102", rol: "alto", antiguedad: 6 },
  { usuario: "Leo", codigoAcceso: "1123", rol: "admin", antiguedad: 24 }
];

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById("perfil-output");

  document.getElementById("btn-ver").addEventListener("click", () => {
    const opcion = document.getElementById("opcion-vista").value.toLowerCase();
    output.innerHTML = "";

    if (!opcion) {
      output.textContent = "Por favor, ingresa una opción válida.";
      return;
    }

    const filtrados = perfiles.filter(p =>
      p.usuario.toLowerCase().includes(opcion)
    );

    if (filtrados.length === 0) {
      output.textContent = "No se encontraron perfiles.";
      return;
    }

    filtrados.forEach(p => {
      const item = document.createElement("p");
      item.textContent = `${p.usuario} - ${p.codigoAcceso} - ${p.rol} - ${p.antiguedad}`;
      output.appendChild(item);
    });
  });

  document.getElementById("btn-antiguedad").addEventListener("click", () => {
    output.innerHTML = "";
    const ordenados = [...perfiles].sort((a, b) => b.antiguedad - a.antiguedad);

    ordenados.forEach(p => {
      const item = document.createElement("p");
      item.textContent = `${p.usuario} - ${p.codigoAcceso} - ${p.rol} - ${p.antiguedad}`;
      output.appendChild(item);
    });
  });

  document.getElementById("btn-admins").addEventListener("click", () => {
    output.innerHTML = "";
    const admins = perfiles.filter(p => p.rol.toLowerCase() === "admin");

    if (admins.length === 0) {
      output.textContent = "No hay administradores.";
      return;
    }

    admins.forEach(p => {
      const item = document.createElement("p");
      item.textContent = `${p.usuario} - ${p.codigoAcceso} - ${p.rol} - ${p.antiguedad}`;
      output.appendChild(item);
    });
  });

  document.getElementById("btn-actualizar").addEventListener("click", () => {
    const nombre = document.getElementById("input-usuario").value.trim();
    const nuevoCodigo = document.getElementById("input-nuevo-codigo").value.trim();

    output.innerHTML = "";

    if (!nombre) {
      output.textContent = "⚠️ El nombre de usuario no puede estar vacío.";
      return;
    }

    const perfil = perfiles.find(p => p.usuario.toLowerCase() === nombre.toLowerCase());
    if (!perfil) {
      output.textContent = "❌ Usuario no encontrado.";
      return;
    }

    if (!/^\d{4}$/.test(nuevoCodigo)) {
      output.textContent = "⚠️ El código debe ser de 4 dígitos numéricos.";
      return;
    }

    perfil.codigoAcceso = nuevoCodigo;
    output.textContent = `✅ Código actualizado correctamente para ${perfil.usuario}`;
  });
});

