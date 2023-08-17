
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');

require('./db/conn');

// const User = require('./db/model/userSchema');
//middleware

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.use(cookieParser());


app.use(require('./router/auth'));



app.get('/contact', (req, res) => {
    
    res.send(`hellow contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send("hellow login world from the server");
});
app.get('/signup', (req, res) => {
    res.send("hellow registration world from the server");
});


app.listen(3000, () => {
    console.log("app is running on port no 3000");
});