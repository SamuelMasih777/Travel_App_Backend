const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    number: {type:Number, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
},{
    timestamps:true,
})

// {
//     "name":"SamuelMasih",
//     "number":8858690861,
//     "email":"samuelmasih.sls777@gmail.com",
//     "password":"samuel123"
// }

const User = mongoose.model("User", userSchema);
module.exports = User;