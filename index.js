const express = require('express');
const userRoute = require("./src/routes/user.route");
const app = express();
const connectDatabase = require("./src/database/db");

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);


app.listen(port, () => {
  console.log((`Servidor está rodando na porta ${port}`));
})