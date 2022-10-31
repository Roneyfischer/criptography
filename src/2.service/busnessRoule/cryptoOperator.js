//este arquivo contém as funções de criptografia e descriptografia propriamente ditas
//estas funções são chamadas na classe Criptography
import argon2, { hash } from "argon2";
const { createHmac } = await import("node:crypto");
import nodeCrypto from "node:crypto";
import errorHandling from "./errorHandling/errorHandling.js"

//
//ARGON2
//

const encryptArgon2 = async function (data) {
  try{
  const hash = await argon2.hash(data, {
    type: argon2.argon2i,
    hashLength: 512,
    timeCost: 450,
    memoryCost: 65536,
  });
  console.log(hash);
  return `Encryption was successful. Your data is: ${hash}`;
} catch(error){return errorHandling(error)}
};

const verifyArgon2 = async function (data, longHash) {
  try {
    if (await argon2.verify(longHash, data)) {
      return "String match";
    } else {
      return "String did not match";
    }
  } catch (error) {return errorHandling(error) }
};



//
//AES
//

const encryptAes = async function (alg, pwd, data, dataTypeOutput) {
  // const alg = "aes-256-cbc"
  try {
  const iv = Buffer.from(nodeCrypto.randomBytes(16));
  let key = nodeCrypto.createHash("sha256").update(pwd).digest("base64").substr(0, 32);

  const cipherText = nodeCrypto.createCipheriv(alg, Buffer.from(key), iv);

  const encrypted = cipherText.update(data);

  const finalEncrypted = Buffer.concat([
    encrypted,
    cipherText.final(),
  ]).toString(dataTypeOutput);

  return `data encrypted: ${finalEncrypted}; iv: ${iv.toString("hex")}`;
} catch(error){return errorHandling(error)}
};


const decryptAes = async function (alg, pwd, data, dataTypeOutput, iv) {
  
  try {
  
  let key = nodeCrypto.createHash("sha256").update(pwd).digest("base64").substr(0, 32);

  const decipherText =  nodeCrypto.createDecipheriv(alg, Buffer.from(key), Buffer.from(iv, "hex"));

  const decrypted = decipherText.update(Buffer.from(data, 'hex'));
  
  const finalDecrypted = Buffer.concat([decrypted,  decipherText.final()]).toString(dataTypeOutput);
  
  
  return  `Data decrypted: ${finalDecrypted}`;
  } catch(error){return errorHandling(error)}

};

export default { encryptArgon2, verifyArgon2, encryptAes, decryptAes };
