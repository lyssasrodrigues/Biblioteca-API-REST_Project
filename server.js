//SERVIDOR
/*Passo a passo da criação API REST Api_Biblioteca:
1. Comecei criando as configuraçoes do servidor
2. Criei o banco de dados da API e fiz a conexao com o codigo
3. Criei as rotas e logo depois de cada rota criei a promise de cada uma para conectar 
com a banco de dados 
(A ordem das rotas foi: 1-Buscar todos os livros, 2- buscar um livro/ler, 3-criar/inserir 
um livro, 4- atualizar/alterar e 5-deletar).
*/

require ('dotenv').config({path:'variaveis.env'});//para o arquivo poder ser visto dentro do servidor

const express = require ('express');

const cors = require ('cors');//é uma especificacao que permite acesso a recursos de outros sites mesmo estando em dominios diferentes

const bodyParser = require ('body-parser');//converte o body para outros formatos

const rotas= require('./rotas');//mostrar para o servidor onde estao as rotas

const server= express();

server.use(cors());

server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', rotas); //facilitar para nao ter que ficar colocando /api em todas as rotas

server.listen(process.env.PORT, ()=>{
    console.log('O servidor esta rodando em:http://localhost:${process.env.PORT}');
})

