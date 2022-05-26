const dbService = require("../services/db.service");
const tableName = process.env.DB_NAME + "."+ "users";

class UserController{

    async getAllUsers(req,res,next) {
        // the double question mark escapes the quotation marks from tableName valuez
        try{
            const result = await dbService.getAll(tableName);
            res.json(result);
        }catch(err){
            res.json(err);
        }

    }

    async getSingleUser(req,res,next) {

        let userId = req.params.id;

        try{
            const result = await dbService.getOne(tableName,userId);
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }

    async updateUser(req,res,next) {
        let userId = req.params.id;
        let data = {
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: req.body.password,
            isAdmin: true,
        }
        try{
            const result = await dbService.update(tableName,userId, data);
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }

    async authenticateUser(req,res,next) {
        let email = req.body.email;
        let password = req.body.password;
        let user = await dbService.getOneByFieldName(tableName, "email", email);
        if(user && password == user.password){
            
            req.session.regenerate(()=>{
                req.session.user = user;
                res.redirect("/orders/dashboard");
            });
        }else{
            res.redirect("/login");
        }



    }
    
    
    async createUser(req,res) {

        let data = {
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: req.body.password,
            date_joined: new Date(),
            isAdmin: true,
        }

        try{
            const result = await dbService.create(tableName, data);
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }

    async deleteUser(req,res,next){
        let userId = req.params.id;

        try{
            const result = await dbService.deleteRecord(tableName, userId);
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }
}

module.exports =  new UserController();