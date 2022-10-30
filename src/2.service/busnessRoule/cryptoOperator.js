//este arquivo contém as funções de criptografia e descriptografia propriamente ditas
//estas funções são chamadas na classe Criptography
import argon2, { hash } from "argon2";
import argon2i from "argon2";
const { createHmac } = await import("node:crypto");
import nodeCrypto from "node:crypto";

//ARGON2
const encryptArgon2 = async function (data) {
  const hash = await argon2.hash(data, {
    type: argon2.argon2i,
    hashLength: 512,
    timeCost: 450,
    memoryCost: 65536,
  });
  console.log(hash);
  return `Encryptation has ben sucess. Your data is: ${hash}`;
};

const verifyArgon2 = async function (data, longHash) {
  try {
    if (await argon2.verify(longHash, data)) {
      return "Password match";
    } else {
      return "Password did not match";
    }
  } catch (err) {
    return `Unexpected error on verify password`;
  }
};

//AES
const encryptAes = async function (
  alg,
  pwd,
  data,
  dataTypeInput,
  dataTypeOutput
) {
  const iv = Buffer.from(nodeCrypto.randomBytes(16));
  let key = nodeCrypto
    .createHash("sha256")
    .update("secret")
    .digest("base64")
    .substr(0, 32);

  const cipherText = nodeCrypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(key),
    Buffer.from(nodeCrypto.randomBytes(16))
  );

  const encrypted = cipherText.update(data);

  const finalEncrypted = Buffer.concat([
    encrypted,
    cipherText.final(),
  ]).toString("hex");

  return `key: ${iv.toString("hex")}; data encrypted: ${finalEncrypted}`;
};

const decryptAes = async function (
  alg,
  pwd,
  data,
  dataTypeInput,
  dataTypeOutput
) {
  const iv = Buffer.from(nodeCrypto.randomBytes(16));
  const decipherText = nodeCrypto.createDecipheriv(alg, pwd, iv);
  const decrypted = decipherText.update(data, dataTypeInput, dataTypeOutput);
  return decrypted;
};

export default { encryptArgon2, verifyArgon2, encryptAes, decryptAes };
