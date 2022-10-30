//este arquivo contém a classe de criptografia.
//escolhi trabalhar com classe e não diretamente com objeto para fins didáticos (uso de classes)

import cryptoOperator from "../../2.service/busnessRoule/cryptoOperator.js";

const alg = "aes-128-ccm";

class Criptography {
  //SETTERS and  GETTERS:

  get getEncryptedData() {
    return this.encryptedData;
  }

  set setEncryptedData(data) {
    this.encryptedData = data;
  }

  //ARGON2
  async encryptArgon2(data) {
    return await cryptoOperator.encryptArgon2(data);
  }

  async verifyArgon2(data, longHash) {
    return await cryptoOperator.verifyArgon2(data, longHash);
  }

  //AES:
  encryptAes(alg, pwd, data, dataTypeOutput, iv) {
    console.log(alg, pwd, data, dataTypeOutput, iv)
        return cryptoOperator.encryptAes(alg, pwd, data, dataTypeOutput, iv);
  }

  decryptAes(alg, pwd, data, dataTypeOutput, iv) {
    console.log(alg, pwd, data, dataTypeOutput, iv)

    return cryptoOperator.decryptAes(alg, pwd, data, dataTypeOutput, iv );
  }
}

export default Criptography;
