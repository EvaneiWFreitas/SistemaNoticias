const userService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body
    //Verificação se os campos existem!
    if(!name || !username || !email || !password || !avatar ||!background){
        res.status(400).json({message: "Submit all fields for registration ( Preencha todos os campos para se cadastrar. )"});
    }

    const user = await userService.createService(req.body);
    if(!user){
        return res.status(400).send({message: "Error creating User table...(Erro ao criar a tabela User)"});
    }

    res.status(201).send({
        message: "User created successfull(Usuário criado com sucesso)",
        user:{
          id: user._id,
          name,
          username,
          email,
          avatar,
          background,
        },  
    });
};

//FUNÇÃO PARA BUSCAR TODOS OS DADOS DO USUÁRIO
const findAll = async (req, res) =>{
    const users = await userService.findAllService();
    //VERICA SE ESTOU RECEBENDO TODOS OS USUÁRIOS.
    if(users.length === 0){
        return res.status(400).send({message: "There are no registered users...(Não há, usuários cadastrados.)"})
    }
    res.send(users);
}

//FUNÇÃO PARA BUSCAR UM USUÁRIO PELO ID
const findById = async (req, res) =>{
    const id = req.params.id;
    //FAZENDO A VERIFICAÇÃO SE O ID É VÁLIDO.
    if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).send({message: "Invalid id...(id inválido.))"});
    }

    const user = await userService.findByIdService(id);
    //VERIFICO SE TEM ALGUM USUÁRIO
    if(!user){
        return res.status(400).send({message: "user not found...(usuário não encontrado)"});
    }
    res.send(user);
};

module.exports = {
        create, 
        findAll, 
        findById,
    };