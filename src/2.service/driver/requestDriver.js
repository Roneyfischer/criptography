import Criptography from "../../3.controller/class/Criptography.js";

const requestDriver = async function (reqBody) {
  return await new Criptography()[`${reqBody.type}`](
    reqBody.alg,
    reqBody.pwdOrHash,
    reqBody.data, 
    reqBody.dataTypeOutput,
    reqBody.iv
  );
};

export default requestDriver;

//A função deste arquivo é direcionar adequadamente a requisição.
//Se houve pedido de encriptação argon2, direciona para argon2; se houve pedido de encripatação AES-25 direciona para AES, etc.
//Separei das routes para manter a organização e maior indepedência entre as funções.
//esta página poderia ser feita com IF, porém haveriam diversos IFs, dificultando a leitura, a compreensão e a organização,
//bem como a implementação de novas funções na classe Criptography, pois ixigiria a criação de um novo IF a cada nova função
//da forma como está estrutuada, não é preciso criar uma lógica IF, bastando apenas criar a nova função em src/3.controller/class/Criptography.js
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// A função acima nstancia um obj de Criptography, acessando a função nomeada no "reqBody.type"
//ao obter a função primária, executa "()", passando "data" e "pwdOrHash"
//Há pelo menos três formas de aplicar esta 'função'.
//A primeira é a mais extensa:
//   const criptographyFunction = await criptography[`${reqBody.type}`]
//   const resultCriptographyFunction = await criptographyFunction(
// reqBody.data,
// reqBody.pwd
//   );
//
//A segunda forma é colocar tudo em uma linha e atribuir à uma nova variável.
//A terceira é colocar tudo em uma linha e direcionar diretamente ao "return", sem nova variável, como está implementado.
//Optei por esta modalidade para diminuir o código.
///////////////////////////////////////////////////////////////////////////////////////
