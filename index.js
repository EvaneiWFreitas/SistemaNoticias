import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json());

//ROTA PARA USUÁRIO
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
