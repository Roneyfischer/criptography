import Criptography from "./class/Criptography.js";

const requestDriver = async function (reqBody) {
  //instancia um obj de Criptography, acessando a função "reqBody.type"
  //ao obter a função primária, executa "()", passando "data" e "pwd"
  // há duas formas de fazer:
  //   const criptographyFunction = await criptography[`${reqBody.type}`]
  //   const resultCriptographyFunction = await criptographyFunction(
  // reqBody.data,
  // reqBody.pwd
  //   );
  return await new Criptography()[`${reqBody.type}`](
    reqBody.data,
    reqBody.pwdOrHash
  );
};

export default requestDriver;
