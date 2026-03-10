const userService = require("../services/user.service");
const mongoose = require("mongoose");

//FUNÇÃO PARA VALIDAR O ID
const validId = (req, res, next) => {
  const id = req.params.id;
  //FAZENDO A VERIFICAÇÃO SE O ID É VÁLIDO.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid id...(id inválido.))" });
  }
  next();
};

//FUNÇÃO PARA VALIDAR O USUÁRIO
const validUser = async (req, res, next) => {
  const id = req.params.id;

  const user = await userService.findByIdService(id);
  if (!user) {
    return res
      .status(400)
      .send({ message: "user not found...(usuário não encontrado)" });
  }
  req.id = id;
  req.user = user;

  next();
};

module.exports = { validId, validUser };
