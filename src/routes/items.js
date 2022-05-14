const router = require("express").Router();
const itemController = require("../controllers/itemController"); 
router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getSingleItem);
router.get("/add", itemController.createItem);
router.post("/add", itemController.createItem);
router.put("/:id", itemController.updateItem);




module.exports = router;