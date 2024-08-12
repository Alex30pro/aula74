let contatos = require("./contatos");

function adicionarContato(contato) {
    contato.id = contatos.length + 1;

    let jaExiste = contatos.find(cont => cont.email === contato.email);
    if (jaExiste) {
        console.error('Já existe um email com esse nome cadastrado! Tente um diferente.');
    } else {
    contatos.push(contato);
    console.log('Usuário adicionado com sucesso!');
    }
}

module.exports = adicionarContato;