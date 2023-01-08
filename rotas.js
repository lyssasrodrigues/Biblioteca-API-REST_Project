//ROTAS DAS FUNCOES E METODOS

const express= require ("express");
const rotas = express.Router();

const BibliotecaControle= require('./Biblioteca_controle'); //para o arquivo rotas enxergar o arquivo Biblioteca_controle
 
//Rota para ver/buscar todos os livros:

rotas.get ('/livros', BibliotecaControle.buscartodos);

//Rota para ler/buscar so um livro:

rotas.get ('/livro/:id', BibliotecaControle.buscarum);

//Rota para criar/inserir livros:

rotas.post ('/livros', function (req,res){
    BibliotecaControle.inserir
});

//Rota para atualizar/alterar livros:

rotas.put ('/livro/:id', BibliotecaControle.alterar);

//Rota para deletar livros: 

rotas.delete ('/livros/:id', BibliotecaControle.deletar);

//Vai exportar as rotas quando elas forem executadas:

module.exports= rotas; 
