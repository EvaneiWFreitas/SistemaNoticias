import mongoose from "mongoose";

const connectDatabase = ()=>{
    console.log("wait, conecting to the database...(Aguardando conexão com o banco de dados...)");
    mongoose.connect(
    "mongodb+srv://root:root@cluster0.i9lydmy.mongodb.net/?appName=Cluster0", 
     /** Erro no: {useNewUrlParser: true, useUnifiedTopology: true}
      * Tipo de erro: significa que o driver do MongoDB atual já usa essas opções automaticamente, então não é mais permitido e necessário informá-las.
      */
     )
    .then(() => console.log("MongoDB Atlas connected successfully...(MongoDB Atlas Connectado com sucesso!)"))
    .catch((err) => console.log(`Error trying to connect to MongoDB Atlas...(Erro ao tentar se conectar com o MongoDB Atlas): ${err}`));
};

export default connectDatabase;
