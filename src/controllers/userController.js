const db = require("../configs/db.config");
const tableName = process.env.DB_NAME + "." + "users";

class UserController{

    getAllUsers(req,res,next) {
        // the double question mark escapes the quotation marks from tableName value
        db.query("SELECT * FROM ?? ",tableName, (error, results,fields)=>{
            if(error) throw error;
            res.json(results);
        })
    }

    getSingleUser(req,res,next) {

        let userId = req.params.id;

        db.query("SELECT * FROM ?? WHERE id = ? ",[tableName, userId], (error, results,fields)=>{
            if(error) throw error;
            res.json(results[0]);
        })
    }

    updateUser(req,res,next) {
        let userId = req.params.id;
        let data = {
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: req.body.password,
            isAdmin: true,
        }
        db.query("UPDATE ?? SET ?  WHERE id = ? ",[tableName,data, userId], (error, results,fields)=>{
            if(error) throw error;
            res.json(results);
        })
    }

    authenticateUser(req,res,next) {

    }
    
    createUser(req,res,next) {

        let data = {
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: req.body.password,
            date_joined: new Date(),
            isAdmin: true,
        }

        db.query("INSERT INTO ?? SET ?  ",[tableName,data], (error, results,fields)=>{
            if(error) throw error;
            res.json({message: "User Successfully Added", result: results})
        })
    }

    deleteUser(req,res,next){
        let userId = req.params.id;

        db.query("DELETE FROM ?? WHERE id = ?",[tableName,userId],(error, results, fields)=>{
            if (error) throw error;
            res.json({message:"User Deleted Successfully", results: results })
        })
    }
}

module.exports =  new UserController();