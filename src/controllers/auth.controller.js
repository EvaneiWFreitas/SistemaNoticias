import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
  //RECEBENDO EMAIL E LOGIN
  const { email, password } = req.body;
  try {
    //AQUI PESQUISO O USUARIO
    const user = await loginService(email);

    if (!user) {
      return res
        .status(404)
        .send({ message: "Username or password not found...(Usuario ou senha não encontrados)" });
    }

    const passworIsValid = bcrypt.compareSync(password, user.password);
    if (!passworIsValid) {
      return res
        .status(404)
        .send({ message: "Username or password not found...(Usuario ou senha não encontrados)" });
    }

    res.send("login ok!");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { login };
