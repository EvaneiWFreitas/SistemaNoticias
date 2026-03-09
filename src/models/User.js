const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, required: true},
    background: {type: String, required: true}
});

/*** 
 * AQUI O ERRO -> const User = mongoose.Schema("User", UserSchema);
 * O certo é:  -> const User = mongoose.model("User", UserSchema);
 */
const User = mongoose.model("User", UserSchema);
module.exports = User