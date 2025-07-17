
let codigoGuardado = '';
let intentosRestantes = 0;


const guardarBtn = document.getElementById("guardarBtn");
const validarBtn = document.getElementById("validarBtn");


const inputCodigo = document.getElementById("codigoSecreto");
const inputIntentos = document.getElementById("intentos");
const inputValidar = document.getElementById("validarCodigo");
const mensaje = document.getElementById("mensaje");


guardarBtn.addEventListener("click", function () {
  const codigo = inputCodigo.value.trim();
  const intentos = parseInt(inputIntentos.value);

  if (codigo.length !== 4 || isNaN(intentos) || intentos < 1 || intentos > 5) {
    mensaje.textContent = "INGRESA UN CÓDIGO DE 4 DÍGITOS Y ENTRE 1 A 5 INTENTOS.";
    mensaje.style.color = "red";
    return;
  }

  codigoGuardado = codigo;
  intentosRestantes = intentos;
  mensaje.textContent = "CÓDIGO GUARDADO CORRECTAMENTE.";
  mensaje.style.color = "green";

  
  inputValidar.value = "";
});


validarBtn.addEventListener("click", function () {
  if (codigoGuardado === "") {
    mensaje.textContent = "PRIMERO DEBES GUARDAR UN CÓDIGO.";
    mensaje.style.color = "red";
    return;
  }

  const codigoIngresado = inputValidar.value.trim();

  if (codigoIngresado === codigoGuardado) {
    mensaje.textContent = "¡CÓDIGO CORRECTO! ACCESO CONCEDIDO.";
    mensaje.style.color = "green";
  } else {
    intentosRestantes--;
    if (intentosRestantes > 0) {
      mensaje.textContent = `CÓDIGO INCORRECTO. TE QUEDAN ${intentosRestantes} INTENTO(S).`;
      mensaje.style.color = "orange";
    } else {
      mensaje.textContent = "SE AGOTARON LOS INTENTOS. CAJA BLOQUEADA.";
      mensaje.style.color = "red";
      validarBtn.disabled = true;
    }
  }
});