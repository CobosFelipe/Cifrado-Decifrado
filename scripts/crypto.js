import CryptoJS from "crypto-js";

class AESCipher {
  constructor(key) {
    this.key = CryptoJS.enc.Base64.parse(key); // Decodificar la llave base64
  }

  encrypt(raw, keyBase64, ivBase64) {
    const key = CryptoJS.enc.Base64.parse(keyBase64);
    const iv = CryptoJS.enc.Base64.parse(ivBase64);
    const rawData = JSON.stringify(raw);
    const encrypted = CryptoJS.AES.encrypt(rawData, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString(); // Devuelve en formato base64
  }

  decrypt(enc, keyBase64, ivBase64) {
    const key = CryptoJS.enc.Base64.parse(keyBase64);
    const iv = CryptoJS.enc.Base64.parse(ivBase64);
    const decrypted = CryptoJS.AES.decrypt(enc, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }
}

const cipher = new AESCipher("MzQyNHg2NiEyQUKoiFxaUA==");