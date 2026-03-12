
import mongoose from "mongoose";
import userService from "../services/user.service.js";

//FUNÇÃO PARA VALIDAR O ID
export const validId = (req, res, next) => {
  try {
    const id = req.params.id;
    //FAZENDO A VERIFICAÇÃO SE O ID É VÁLIDO.
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid id...(id inválido.))" });
    }
    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//FUNÇÃO PARA VALIDAR O USUÁRIO
export const validUser = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


