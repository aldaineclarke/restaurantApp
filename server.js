// Configures the environment variables to process.env
require("dotenv").config();

const express = require('express');
const session = require("express-session");
const userRouter = require("./src/routes/user")
const indexRouter = require("./src/routes/index")
const orderRouter = require("./src/routes/order")
const server = express();
const PORT = parseInt(process.env.PORT) || 4200;


// middlewares
server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(session({
    secret: process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge: 120000
    }
}));

// Routes
server.use("/", indexRouter)
server.use("/users", userRouter);
server.use("/orders", orderRouter);







server.listen(PORT,()=>{
    console.log("Server listening on port ", PORT);
})