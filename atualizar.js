let contatos = require("./contatos");

function atualizarContato(id, novoContato){

    const index = contatos.findIndex(contato => contato.id === id);

    let emailTemporario = contatos[index].email
    contatos[index].email = ''
    
    let jaExisteNovo = contatos.find(novoCont => novoCont.email === novoContato.email);

    if (jaExisteNovo) {
        console.error('Já existe um email com esse nome cadastrado! Tente um diferente.');
        contatos[index].email = emailTemporario
    } else {
            
        if (index !== -1) {
            contatos[index] = {id: contatos[index].id, nome: novoContato.nome, email: novoContato.email, telefones: novoContato.telefones};
        } else {
            console.log('Usuário não encontrado');
        };
        console.log('Usuário atualizado com sucesso');
    }
    

};

module.exports = atualizarContato;