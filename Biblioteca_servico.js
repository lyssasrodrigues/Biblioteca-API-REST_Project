//PROMISES PARA CADA UMA DAS FUNCOES/METODOS/ROTAS (CONEXAO COM A BASE DE DADOS)

const db= require ('./db')//é ela que chama a conexao com o banco de dados

//Promise da funcao ver/buscar todos os livros da biblioteca:

module.exports= {
  buscartodos: () => {
    return newPromise((aceito, rejeitado) => {

        db.query('SELECT * FROM livros',(error,results)=>{
          if (error) {rejeitado(error); return};
        aceito(results);
          });
    });
  },

  //Promise da funcao buscar/ler um livro:

  buscarum: (id)=> {
    return newPromise((aceito, rejeitado) => {

    db.query ('SELECT * FROM books WHERE id=?', [id], (error, results)=>{
        if (error) {rejeitado(error); return; }
          if (results.length>0){
            aceito(results[0]);
           }else{
            aceito(false);
        }
        });
    });
  },

  //Promise da funcao inserir/criar um livro:

   inserir: (titulo, autor)=> {    //nao coloca o id porque ele é auto incrementado no banco de dados
    return newPromise((aceito, rejeitado) => {
    db.query ('INSERT INTO livros(titulo, autor) VALUES (?,?)',
     [titulo,autor], 
     (error, results)=> {
      if (error) {rejeitado(error); return; }
      aceito (results.insertId);
        }
    );
        });
  },

  //Promise da funcao alterar/atualizar os livros da biblioteca:

  alterar: (id, titulo, autor)=> {      
    return newPromise((aceito, rejeitado) => {
    db.query ('UPDATE livros SET titulo = ?, autor = ? WHERE id= ?',
    [titulo,autor, id], 
     (error, results)=> {
      if (error) { rejeitado(error); return; }
      aceito (results);
        }
    );
        });
  },   

  //Promise da funcao deletar um livro:

  deletar: () => {
    return newPromise((aceito, rejeitado) => {

        db.query('DELETE FROM livros WHERE id=?',[id], (error,results)=>{
          if (error) {rejeitado(error); return};
        aceito(results);
          });
    });
  },
};