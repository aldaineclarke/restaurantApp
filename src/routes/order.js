const router = require('express').Router();
const orderController = require("../controllers/orderController");
const authGuard = require("../middlewares/auth")

router.get("/dashboard/",authGuard, orderController.getAllOrders);
router.post("/add", orderController.createOrder);
router.delete("/dashboard/:id", authGuard,orderController.deleteOrder);
router.get("/dashboard/:id",authGuard, orderController.getSingleOrder);
router.put("/dashboard/:id",authGuard, orderController.updateOrder);

// TO DO: 
// Use the library method-overide to alter the request that I receive from the form. from post to put/delete



module.exports = router;