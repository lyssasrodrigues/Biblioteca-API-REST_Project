//AQUI ESTAO DE FORMA ESPECIFICA AS FUNCOES/METODOS/ROTAS DA API

const Bibliotecaservico = require ('./Biblioteca_servico');//fazer o arquivo biblioteca_controle enxergar o arquivo biblioteca_servico

module.exports= {

    //Funcao para ver/buscar todos os livros:

    buscartodos: async (req, res)=> {   
        let json= {error: '', result: []};//colocando um objeto dentro do json

        let livros= await Bibliotecaservico.buscartodos();
       
        for (let i in livros){
            json.result.push({
               id: livros[i].id,
               descricao: livros[i].titulo
            });
        }
        res.json(json);
    },
    //Funcao para ler/buscar so um livro:

    buscarum: async(req,res)=>{
        let json= {error: '', result: {}}; //(a diferenca para a funcao de cima é que em vez do json retornar um array, vai retornar um objeto)
        let id= req.params.id; //o id vai ser o parametro
        let livro= await Bibliotecaservico.buscarum(id);
        if (livro){
            json.result = livro; //se tiver algum erro retorna no json
        }
        res.json (json); //se nao tiver erro nao retorna nada
    },

    //  Funcao  para criar/inserir livros:

    inserir: async(req,res)=>{
        let json= {error: '', result: {}}; 
        let titulo= req.body.titulo;
        let autor= req.body.autor;

        if (titulo&& autor){
            let BookId = await Bibliotecaservico.inserir(titulo, autor);
            json.result = {
                id: BookId,
                titulo,
                autor
            };
        }else{
            json.error = 'Os campos nao foram enviados';
        }
        res.json (json); //se nao tiver erro nao retorna nada
    },

    //Funcao para alterar/atualizar livros:

    alterar: async(req,res)=>{
        let json= {error: '', result: {}}; 
        let id= req.body.id;
        let titulo= req.body.titulo;
        let autor= req.body.autor;

        if (id && titulo && autor){
            await Bibliotecaservico.alterar(id, titulo, autor);
            json.result = {
                id,
                titulo,
                autor
            };
        }else{
            json.error = 'Os campos nao foram enviados';
        }
        res.json (json); 
    },

    //Funcao para deletar os livros:

    deletar: async (req, res)=> {
        let json= {error: '', result: {}}; 
        await Bibliotecaservico.deletar(req.params.id);
        res.json (json); 
    }
}
