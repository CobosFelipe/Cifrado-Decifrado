//Aqui van las claves de cifrado

let claves = {}

export function encryptedKey(key) {
  if (key === "encrypt1") {
    claves = {
      clave: LLAVE_AES_ENCRYPT_CORRESPONSALIA_OTROS,
      iv: IV_AES_ENCRYPT_CORRESPONSALIA_OTROS,
    }
    return claves
  }
  else if (key === "encrypt2") {
    claves = {
      clave: REACT_APP_LLAVE_AES_DECRYPT_DAV,
      iv: REACT_APP_IV_AES_DECRYPT_DAV
    }
    return claves
  }
  else if (key === "encrypt3") {
    claves = {
      clave: LLAVE_AES_ENCRYPT_CONRED,
      iv: IV_AES_ENCRYPT_CONRED
    }
    return claves
  }
}

export function decryptedKey(key) {
  if (key === "decrypt1") {
    claves = {
      clave: LLAVE_AES_ENCRYPT_CORRESPONSALIA_OTROS,
      iv: IV_AES_ENCRYPT_CORRESPONSALIA_OTROS
    }
    return claves
  }
  else if (key === "decrypt2") {
    claves = {
      clave: REACT_APP_LLAVE_AES_DECRYPT_DAV,
      iv: REACT_APP_IV_AES_DECRYPT_DAV
    }
    return claves
  }
  else if (key === "decrypt3") {
    claves = {
      clave: LLAVE_AES_ENCRYPT_CONRED,
      iv: IV_AES_ENCRYPT_CONRED
    }
    return claves
  }
}