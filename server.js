// Configures the environment variables to process.env
require("dotenv").config();

const express = require('express');
const server = express();
const db = require("./src/configs/db.config.js");
const PORT = parseInt(process.env.PORT) || 4200;


server.listen(PORT,()=>{
    console.log("Server listening on port ", PORT);
})