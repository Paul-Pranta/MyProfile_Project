

const jwt = require('jsonwebtoken');
const Message = require("../db/model/messageSchema");
const User = require('../db/model/userSchema');



const SECRET_KEY = "MYNAMEISPRANTAKUMARPAUL"

module.exports.Authenticate = async (req, res, next) => { 
    
    
    try {

        const token = req.cookies.jwtoken;
        
        const verifyToken = jwt.verify(token, 'MYNAMEISPRANTAKUMARPAUL'); // now this verify token gets the details of user

        const rootUser = await User.findById({ _id: verifyToken._id, "tokens.token": token })

        if (!rootUser) { throw new Error('User not Found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;


        
        next();

    } catch (err) { 
        res.status(401).send('Unauthorized: No token provided ');

    }

}


