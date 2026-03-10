/**
 * ATALHOS:
 * PARA FORMATAR O CODIGO: ALT+SHIFT+F
 * PARA COMENTAR UM BLOCO : ALT+SHIFT+A
 */
const route = require("express").Router();
const userController = require("../controllers/user.controller");
const { findById } = require("../models/User");
const { validId, validUser } = require("../middlewares/global.middlewares");

//ESSA ROTA CADASTRA O USUARIO
//USE O COMANDO: POST http://localhost:3000/user/ - CRIA O USUÁRIO.
route.post("/", userController.create);
//ESSA ROTA BUSCA TODOS OS USUÁRIOS
//USE O COMANDO: GET http://localhost:3000/user/ - CONSULTA TODOS OS USUÁRIOS.
route.get("/", userController.findAll);
//ESSA ROTA BUSCA USUÁRIOS PELO ID
//USE O COMANDO: GET http://localhost:3000/user/69af27852d50f5e260dbf139 - CONSULTA O USUÁRIO PELO ID.
route.get("/:id", validId, validUser, userController.findById);
//ESSA ROTA VAI ATUALIZAR OS DADOS DO USUÁRIO NO MONGODB ATLAS
//USE O COMANDO: PATCH http://localhost:3000/user/69af27852d50f5e260dbf139 - EDITA O DADO DO USUÁRIO.
route.patch("/:id", validId, validUser, userController.update);

module.exports = route;
