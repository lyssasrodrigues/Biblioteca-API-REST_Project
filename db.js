//CONECTANDO O NODE JS COM O BANCO DE DADOS MYSQL:



const mysql= require ('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Criando a conexao:
connection.connect((error)=>{
    if(error) throw error;
    console.log("Conectando ao banco de dados: ${process.env.DB_NAME")
})
module.exports= connection;