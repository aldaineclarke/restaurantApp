const db = require("../configs/db.config");
const dbService = require("../services/db.service");
const tableName = process.env.DB_NAME + "."+ "items";

class ItemController{
    
    async getAllItems(req, res, next){
        
       try{
        let products = await dbService.getAll(tableName);
        res.render("product", {title: "menu",products});
       }catch(err){
           console.log(err)
       }
    }
    async getSingleItem(req, res, next){
        console.log(req.params.id)
        try{
            let product = await dbService.getOneByFieldName(tableName,"item_id",req.params.id);
            res.render("single-product", {product, title:"product-detail"});
           }catch(err){
               console.log(err)
           }
    }
    createItem(req, res, next){}
    updateItem(req, res, next){}
        // try{
            
        //     await dbService.create(tableName,)
        // }

    // getAllItems(req, res, next){}
    // getAllItems(req, res, next){}
    // getAllItems(req, res, next){}
}

module.exports = new ItemController();