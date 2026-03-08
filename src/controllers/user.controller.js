
const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body
    if(!name || !username || !email || !password || !avatar ||!background){
        res.status(400).json({message: "Submit all fields for registration ( Preencha todos os campos para se cadastrar. )"});
    }

    

    res.status(201).send({
        message: "User created successfull(Usuário criado com sucesso)",
        user:{
          name,
          username,
          email,
          avatar,
          background,
        },  
    });
}

module.exports = {create};