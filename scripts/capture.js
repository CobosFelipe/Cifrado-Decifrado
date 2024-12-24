import { encryptedKey, decryptedKey } from "./keys.js"
import { AESCipher } from "./crypto.js"

const cipher = new AESCipher("MzQyNHg2NiEyQUKoiFxaUA==");

const btnSend = document.getElementById("send");

function captureType() {
  const btnId = document.getElementById("option-button");
  const keys = document.getElementById("keys").value;
  const before = document.getElementById("data-before").value || "";
  const after = document.getElementById("data-after");
  
  if (before == "" || before == undefined) {
    Swal.fire({
      title: "¿Está seguro?",
      text: "No ha ingresado data para cifrar/decifrar",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Volver a intentarlo",
    });
    return
  } else if (keys === "Seleccione una clave") {
    Swal.fire({
      title: "¿Está seguro?",
      text: "No ha seleccionado una clave de cifrado",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Volver a intentarlo",
    });
  }

  if (btnId.textContent.includes("Encrypt")) {
    let key = encryptedKey(keys)
    console.log(key);
    console.log(before);
    let decryptedData = cipher.decrypt(
      before,
      key.clave,
      key.iv
    )
    after.value = decryptedData
  } else if (btnId.textContent.includes("Decrypt")) {
    let key = decryptedKey(keys)
    console.log(key);
    console.log(before);
  } else {
    Swal.fire({
      title: "¿Está seguro?",
      text: "No ha seleccionado un tipo de cifrado",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Volver a intentarlo",
    });
  }
}

btnSend.addEventListener("click", captureType);
