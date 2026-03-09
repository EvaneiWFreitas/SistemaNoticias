const User = require("../models/User");

const createService = (body) => {
    return User.create(body);
};

//FUNÇÃO BUSCA TODOS OS USUÁRIOS
const findAllService = () => User.find();
//FUNÇÃO PARA BUSCAR O USUÁRIO PELO ID
const findByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService,
};