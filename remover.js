let contatos = require('./contatos');

function removerUsuario(index,confirmacao){

    if(confirmacao.toLowerCase() == 'n'){

        return false
        
    } else{

        index = contatos.findIndex(verificar => verificar.id === index)

        contatos.splice(index,1)

        return true
    }
}

module.exports = removerUsuario;    