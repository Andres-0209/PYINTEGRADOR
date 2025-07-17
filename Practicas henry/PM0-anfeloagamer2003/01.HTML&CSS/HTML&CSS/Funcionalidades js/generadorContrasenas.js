function checkLongitud(longitud) {
  return longitud >= 3 && longitud <= 10;
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas) {
  let letras = "abcdefghijklmnopqrstuvwxyz";
  let numeros = "0123456789";
  let especiales = "!@#$%^&*()_+{}[]<>?";
  let letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let disponibles = letras;
  let obligatorios = [];

  
  if (incluirEspeciales) {
    disponibles += especiales;
    obligatorios.push(especiales.charAt(Math.floor(Math.random() * especiales.length)));
  }
  if (incluirNumeros) {
    disponibles += numeros;
    obligatorios.push(numeros.charAt(Math.floor(Math.random() * numeros.length)));
  }
  if (incluirMayusculas) {
    disponibles += letrasMayusculas;
    obligatorios.push(letrasMayusculas.charAt(Math.floor(Math.random() * letrasMayusculas.length)));
  }

  let contrasena = obligatorios.join("");

  
  for (let i = contrasena.length; i < longitud; i++) {
    const index = Math.floor(Math.random() * disponibles.length);
    contrasena += disponibles.charAt(index);
  }

 
  contrasena = contrasena.split('').sort(() => Math.random() - 0.5).join('');

  return contrasena;
}

document.querySelector(".generator-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const longitud = parseInt(document.getElementById("longitud").value);
  const incluirEspeciales = document.getElementById("especiales").checked;
  const incluirNumeros = document.getElementById("numeros").checked;
  const incluirMayusculas = document.getElementById("mayusculas").checked;

  if (!checkLongitud(longitud)) {
    alert("La longitud debe ser entre 3 y 10.");
    return;
  }

  const resultado = generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas);
  document.getElementById("resultado").innerText = "Contraseña generada: " + resultado;
});
