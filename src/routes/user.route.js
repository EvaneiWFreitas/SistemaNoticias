const route = require('express').Router();
const userController = require("../controllers/user.controller");
const { findById } = require('../models/User');

//ESSA ROTA CADASTRA O USUARIO
route.post("/", userController.create);
//ESSA ROTA BUSCA TODOS OS USUÁRIOS
route.get("/", userController.findAll);
//ESSA ROTA BUSCA USUÁRIOS PELO ID
route.get("/:id", userController.findById);

module.exports = route;