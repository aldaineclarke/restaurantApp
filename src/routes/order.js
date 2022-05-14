const router = require('express').Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.get("/add", orderController.createOrder);
router.delete("/:id", orderController.deleteOrder);
router.get("/:id", orderController.getSingleOrder);
router.put("/:id", orderController.updateSingleOrder);

// TO DO: 
// Use the library method-overide to alter the request that I receive from the form. from post to put/delete



module.exports = router;