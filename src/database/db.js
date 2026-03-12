import mongoose from "mongoose";

const connectDatabase = () => {
  console.log(
    "wait, conecting to the database...(Aguardando conexão com o banco de dados...)",
  );
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
      console.log(
        "MongoDB Atlas connected successfully...(MongoDB Atlas Connectado com sucesso!)",
      ),
    )
    .catch((err) =>
      console.log(
        `Error trying to connect to MongoDB Atlas...(Erro ao tentar se conectar com o MongoDB Atlas): ${err}`,
      ),
    );
};

export default connectDatabase;
