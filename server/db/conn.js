


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("mongo connection open");
}).catch(err => {
    console.log("Oh no connection failed!!!");
    console.log(err);
});
