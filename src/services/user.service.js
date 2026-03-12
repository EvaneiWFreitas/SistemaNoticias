import User from "../models/User.js";

const createService = (body) => {
  return User.create(body);
};

//FUNÇÃO BUSCA TODOS OS USUÁRIOS.
const findAllService = () => User.find();

//FUNÇÃO PARA BUSCAR O USUÁRIO PELO ID.
const findByIdService = (id) => User.findById(id);

//FUNÇÃO PARA EDITAR DADOS DO USUARIO.
const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background,
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background },
  );

export default{
  createService,
  findAllService,
  findByIdService,
  updateService,
};
