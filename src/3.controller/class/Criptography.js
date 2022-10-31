//este arquivo contém a classe de criptografia.
//escolhi trabalhar com classe e não diretamente com objeto para fins didáticos (uso de classes)

import cryptoOperator from "../../2.service/busnessRoule/cryptoOperator.js";



class Criptography {
  

  constructor(reqBody) {    
    
    const {alg, pwd, data, dataTypeOutput, iv} = reqBody
  
  }

  //SETTERS and  GETTERS:

  get getEncryptedData() {
    return this.encryptedData;
  }

  set setEncryptedData(data) {
    this.encryptedData = data;
  }

  //ARGON2
  async encryptArgon2(reqBody) {
    const {alg, pwdOrHash, data, dataTypeOutput, iv} = reqBody      
    return await cryptoOperator.encryptArgon2(data);
  }

  async verifyArgon2(reqBody) {
    const {alg, pwdOrHash, data, dataTypeOutput, iv} = reqBody
    return await cryptoOperator.verifyArgon2(data, pwdOrHash);
  }

  //AES:
  async encryptAes(reqBody) {
    const {alg, pwdOrHash, data, dataTypeOutput, iv} = reqBody
    return await cryptoOperator.encryptAes(alg, pwdOrHash, data, dataTypeOutput, iv);
  }

  async decryptAes(reqBody) {
    const {alg, pwdOrHash, data, dataTypeOutput, iv} = reqBody  
    return await cryptoOperator.decryptAes(alg, pwdOrHash, data, dataTypeOutput, iv );
  }
}

export default Criptography;
