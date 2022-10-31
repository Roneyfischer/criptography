

//Aqui, também seria possível exibir diretamente o erro,
//porém, esta é uma função que pode facilmente ser implementada com novos erros.
//Assim, embora fique mais complexa para criação, a manutenção e implementação ficam facilitadas.

async function errorHandling(error, reqBody) {
    
    const errorMessage = error.message
    var messageErrorReplaced = errorMessage.replace(/ /g, "_")
    return errorList[messageErrorReplaced] ? errorList[messageErrorReplaced](reqBody): errorList["generalErrorReturn"](errorMessage);

    }


const errorList = {

   criptographyObj_is_not_a_function (reqBody) {   
        console.log(`The request 'type' (${reqBody.type}) don't exist.`)
        return `The requisition 'type' (${reqBody.type}) don't not exist.`
    },

    generalErrorReturn(errorMessage){       
        console.log(`Unexpected error: (${errorMessage})`)
        return `Unexpected error: (${errorMessage})`} 
}

export default errorHandling