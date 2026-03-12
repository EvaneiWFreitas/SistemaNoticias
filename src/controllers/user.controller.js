import userService from "../services/user.service.js";

//FUNÇÃO PARA CRIAR USUÁRIO.
const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    //Verificação se os campos existem!
    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).json({
        message:
          "Submit all fields for registration ( Preencha todos os campos para se cadastrar. )",
      });
    }

    const user = await userService.createService(req.body);
    if (!user) {
      return res.status(400).send({
        message: "Error creating User table...(Erro ao criar a tabela User)",
      });
    }

    res.status(201).send({
      message: "User created successfull(Usuário criado com sucesso)",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//FUNÇÃO PARA BUSCAR TODOS OS DADOS DO USUÁRIO.
const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();
    //VERICA SE ESTOU RECEBENDO TODOS OS USUÁRIOS.
    if (users.length === 0) {
      return res.status(400).send({
        message:
          "There are no registered users...(Não há, usuários cadastrados.)",
      });
    }
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//FUNÇÃO PARA BUSCAR UM USUÁRIO PELO ID.
const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//FUNÇÃO PARA EDITAR DADOS DO USUÁRIO.
const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    //Verificação se os campos existem!
    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).json({
        message:
          "Submit at least one field for update...( Envie pelo menos um campo para atualização. )",
      });
    }

    const { id, user } = req;

    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background,
    );
    res.send({
      message: "User successfull updated...(Usuário atualizado com sucesso...)",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default{
  create,
  findAll,
  findById,
  update,
};
