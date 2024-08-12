let contatos = require('./contatos');

function listarUsuarios() {
    for (let i = 0; i < contatos.length; i++) {
    const contato = contatos[i];
    console.log(`
        ID: ${contato.id},
        Nome: ${contato.nome},
        Email: ${contato.email},
    `);
    
    for (let j = 0; j < contato.telefones.length; j++) {
        console.log(`        Telefone: ${j+1}. ${contato.telefones[j]}`);
        }
        console.log(''); 
    };
};

    module.exports = listarUsuarios;