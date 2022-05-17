const db = require("../configs/db.config");
const dbService = require("../services/db.service");
const tableName = process.env.DB_NAME + "."+ "items";

class ItemController{
    
    async getAllItems(req, res, next){
        
       try{
        let products = await dbService.getAll(tableName);
        res.render("product", {products});
       }catch(err){
           console.log(err)
       }
    }
    getSingleItem(req, res, next){}
    createItem(req, res, next){}
    updateItem(req, res, next){}
    createOrderItem(req, res, next){
        // try{
            
        //     await dbService.create(tableName,)
        // }
    }
    // getAllItems(req, res, next){}
    // getAllItems(req, res, next){}
    // getAllItems(req, res, next){}
}

module.exports = new ItemController();