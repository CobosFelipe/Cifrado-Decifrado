//Botones
const btnEncrypt = document.getElementById("encrypt")
const btnDecrypt = document.getElementById("decrypt")
const btnKeys = document.getElementById("option-button")

//Opciones Select
const inputSelect = document.getElementById("keys")

// Función para limpiar el select antes de agregar opciones
function clearSelect() {
  inputSelect.innerHTML = "";
}

// Función para agregar una opción deshabilitada al inicio
function addDisabledOption() {
  const disabledOption = document.createElement("option");
  disabledOption.text = "Seleccione una clave";
  disabledOption.disabled = true;
  disabledOption.selected = true;
  inputSelect.add(disabledOption);
}

// Función para agregar opciones de encriptar
function encryptOptions() {

  btnKeys.innerHTML = `
    <img src="img/cerrar-con-llave.png" alt="encrypt" class="h-4 me-2" />
    Encrypt <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"></svg>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />`
  clearSelect();
  addDisabledOption();
  const options = [
    { id: "encrypt1", text: "Corresponsalia Otros" },
    { id: "encrypt2", text: "Davivienda" },
    { id: "encrypt3", text: "ConRed" },
  ];
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.id = option.id;
    opt.value = option.id;
    opt.text = option.text;
    opt.className = "encrypt"
    inputSelect.add(opt);
  });
}

// Función para agregar opciones de desencriptar
function decryptOptions() {
  btnKeys.innerHTML = `
    <img src="img/tornillo.png" alt="decrypt" class="h-4 me-2" />
    Decrypt <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"></svg>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />`
  clearSelect();
  addDisabledOption();
  const options = [
    { id: "decrypt1", text: "Corresponsalia Otros" },
    { id: "decrypt2", text: "Davivienda" },
    { id: "decrypt3", text: "ConRed" },
  ];
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.id = option.id;
    opt.value = option.id;
    opt.text = option.text;
    opt.className = "decrypt"
    inputSelect.add(opt);
  });
}

//Eventos onclick para ejecutar las funciones
btnEncrypt.addEventListener("click", encryptOptions)
btnDecrypt.addEventListener("click", decryptOptions)
