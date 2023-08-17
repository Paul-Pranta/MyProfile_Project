
const jwt = require("jsonwebtoken");

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');

const Message = require("../db/model/messageSchema");
const User = require("../db/model/userSchema");

const { Authenticate } = require('../middleware/authenticate');

const SECRET_KEY = "MYNAMEISPRANTAKUMARPAUL"


router.get('/', (req, res) => {

    res.send(`hello world from the server router js`);
});

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "pls fill the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        }
        else {

            const user = new User({ name, email, phone, work, password, cpassword });

            const userRegister = await user.save()
            if (userRegister) {
                res.status(201).json({ message: "user registration successful" })
            }

        }


    } catch (err) {
        console.log(err);

    }
});

router.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" })
        }
        else {
            const userLogin = await User.findOne({ email: email });

            if (userLogin) {

                const isMatch = await bcrypt.compare(password, userLogin.password);

                if (!isMatch) {
                    res.status(400).json({ error: "Invalid credientials" });
                }
                else {


                    const token = await userLogin.generateAuthToken();

                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true,
                    })
                    res.json({ message: "user signin successfully" });

                }

            } else {

                res.status(400).json({ error: "Invalid credientials" });

            }
        }


    } catch (err) {

        console.log(err);
    }


});

router.post('/message', async (req, res) => {
    const { name, email, phone, message: msg, semail } = req.body;
    if (!name || !email || !phone || !msg) {
        return res.status(422).json({ error: "pls fill the field properly" });
    }

    try {
        const recieverExist = await User.findOne({ email: email });




        if (!recieverExist) {
            return res.status(422).json({ error: "Email donot exist" });
        }
        else {

            const message = new Message({ body: msg, semail: semail });
            message.author = recieverExist._id;
            await message.save();

            recieverExist.messages.push(message);

            const updatedReciever = await recieverExist.save();

            if (updatedReciever) {
                res.status(201).json({ message: "user message recieved successfully" })
            }
        }
    } catch (err) {
        console.log(err);

    }
});

//about us page

router.post('/deleteMessage', async (req, res) => {

    const { userID, messID } = req.body;

    console.log(userID);
    console.log(messID);


    await User.findByIdAndUpdate(userID, { $pull: { messages: messID } });
    await Message.findByIdAndDelete(messID);
    
    res.json({ message: "user message deleted successfully" });


})

router.get('/about', Authenticate, (req, res) => {

    res.send(req.rootUser);
});


router.get('/getData', Authenticate, async (req, res) => {

    const populated_data = await User.findById(req.userID).populate('messages').exec()

    res.send(populated_data);
});





module.exports = router;


