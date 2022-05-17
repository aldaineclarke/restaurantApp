// Configures the environment variables to process.env
require("dotenv").config();

const express = require('express');
const session = require("express-session");
const userRouter = require("./src/routes/user");
const indexRouter = require("./src/routes/index");
const itemRouter = require("./src/routes/items");
const orderRouter = require("./src/routes/order");
const path = require("path");
const server = express();
const PORT = parseInt(process.env.PORT) || 4200;

// Configurations
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "/public/views"));
server.locals.cart = [];

// Application middlewares
server.use(express.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, '/public/static/')));
server.use(express.static(path.join(__dirname, '/public')))
server.use(express.json());

// Session Configuration
server.use(session({
    secret: process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge: 120000
    }
}));



// Routes
server.use("/", indexRouter);
server.use("/users", userRouter);
server.use("/orders", orderRouter);
server.use("/products", itemRouter);



server.listen(PORT,()=>{
    console.log("Server listening on port ", PORT);
})