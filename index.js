const prompt = require('prompt-sync')();

const listarUsuarios = require('./listar');
const adicionarUsuario = require('./adicionar');
const atualizarUsuario = require('./atualizar');
const removerUsuario = require('./remover');
let contatos = require('./contatos');

mainMenu();

function mainMenu(){
    console.log(`
        "Menu de Contatos"
        1 - Listar Usuário
        2 - Adicionar Usuário
        3 - Atualizar Usuário
        4 - Remover Usuário
        5 - Sair
    `);

    const opcao = prompt('Digite o numero da opcao que deseja: ');

    let index

    switch(opcao){
        case '1':
            listarUsuarios();
            mainMenu();
            break;
        case '2':
            const nome = prompt('Digite o nome do usuário: ');
            const email = prompt('Digite o email do usuário: ');
            let telefones = [];
            let adicionarMais = true;

            while (adicionarMais) {
                const telefone = prompt('Digite o número de telefone: ');
                telefones.push(telefone);
                adicionarMais = prompt('Deseja adicionar telefone? (s/n): ').toLowerCase() === 's';
            };

            adicionarUsuario({ nome, email, telefones});
            mainMenu();
            break;
        case '3':
            listarUsuarios();
            index = parseInt(prompt('Número do ID do usuário a atualizar: '));
            const novoNome = prompt('Digite o novo nome do usuário: ');  
            const novoEmail = prompt('Digite o novo email: ');
            let novosTelefones = [];
            let adicionarMaisNovos = true;

            while (adicionarMaisNovos) {
                const novoTelefone = prompt('Digite o número do novo telefone: ');
                novosTelefones.push(novoTelefone);
                adicionarMaisNovos = prompt('Deseja adicionar outro telefone? (s/n): ').toLowerCase() === 's';
            };
            atualizarUsuario(index, { nome: novoNome, email: novoEmail, telefones: novosTelefones });
            mainMenu();
            break;
        case '4':
            listarUsuarios();
            console.log()

            index = parseInt(prompt(' Digite o ID do contato que deseja excluir: '))

            if(contatos.find(verificar => verificar.id == index) == undefined){
                console.log(` Digite um ID válido!`)
                mainMenu()
            };
            console.log()

            confirmacao = prompt('Deseja mesmo excluir esse contato?(Digite s/n): ')
            
            if(removerUsuario(index,confirmacao) == true){
                console.log(` Contato removido com sucesso!`)
            }else{
                console.log(` Exclusão cancelada!`)
            };
            mainMenu();
            break;
        case '5':
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida!');
            mainMenu();         
    };
};