const dbService = require("../services/db.service");
const tableName = process.env.DB_NAME + "."+ "orders";

/**
 * @description Returns an order number based on a random number and the time that the order was made
 */

class OrderController{


    async getAllOrders(req, res, next){
        try{
            const result = await dbService.getAll(tableName);
            res.render("dashboard",{user: req.session.user, orders:result})
        }catch(err){
            res.json(err);
        }

    }
    async getSingleOrder(req, res, next){
        let order_num = req.params.id;

        try{
            const result = await dbService.getOneByFieldName(tableName, "order_num" ,order_num);
            res.json(result);
        }catch(err){
            res.json(err);
        }

    }
    async updateOrder(req, res, next){
        let order_num = req.params.id;
        let data = {
            status: req.body.status,
        }
        try{
            const result = await dbService.updateByFieldName(tableName, "order_num",order_num, data);
            res.json(result);
        }catch(err){
            res.json(err);
        }

    }
    async createOrder(req, res, next){
        let order_num = orderNumberGenerator();
        let total = 0;
        console.log()
        for(let item of JSON.parse(req.body.cart)){
            await createOrderItem(item.product.item_id, order_num, item.quantity);
            total+= (item.quantity * item.product.price);
        }
        let data = {
            order_num: order_num,
            customer_email:req.body.email ,//will change to the email 
            status: "pending",
            date_created: new Date(),
            total_price: total,
        }
        try{
            console.log(total)
            await dbService.create(tableName, data);
        }catch(err){
            res.json(err);
        }

    }
    async deleteOrder(req, res, next){
        let order_num = req.params.id;
        try{
            const result = await dbService.deleteRecordByField(tableName, "order_num", order_num);
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }
    

   
}
async function createOrderItem(productID, orderNum, quantity){
    await dbService.create(process.env.DB_NAME + "."+ "orderItems", {item_id: productID, order_id: orderNum, quantity:quantity});
}

function orderNumberGenerator(){
    // random number between 0 and 99
    let randNum = Math.floor(Math.random() * 100);
    let date = new Date()
    let orderNumString = ""

    let dateArr = [date.getMonth(),date.getDate(),date.getHours(),date.getMinutes()];
    dateArr.forEach((val)=>{
        if(val < 10){
            orderNumString+="0"+ val;
        }
        else orderNumString+=val
    })
    orderNumString+=randNum;
    return parseInt(orderNumString,10);
}  

module.exports = new OrderController();