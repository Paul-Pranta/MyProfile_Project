
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "MYNAMEISPRANTAKUMARPAUL"
const Message = require('./messageSchema');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    phone: {
        type: String,
        required: true,
        unique: true
        
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    messages: [
        {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'MESSAGE'
              
           
        }
    ]


});


//we are hashing the password

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

//generating token

userSchema.methods.generateAuthToken = async function () {
    try {

        let token = jwt.sign({ _id: this._id }, SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token }); 
        await this.save();
        return token;

    } catch (err) {

        console.log(err);
    }


}



const User = mongoose.model("USER", userSchema);

module.exports = User;