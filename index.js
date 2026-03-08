const express = require('express');
const userRoute = require("./src/routes/user.route");
//const express = require("express");
const app = express();


app.use("/teste", userRoute);


app.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000');
})