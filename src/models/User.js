import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, //Quando fizer consulta no BD a senha do usuario não vai aparecer.
  avatar: { type: String, required: true },
  background: { type: String, required: true },
});

/**
 * Antes de salvar os dados no BD, o (bcrypt) encripta a senha do usuario
 * O middleware do mongoose aceita next, mas quando usamos async/await normalmente não precisamos chamar next().
 */
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  //next();
});

const User = mongoose.model("User", UserSchema);

export default User;
