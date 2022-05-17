const router = require('express').Router();
const indexController = require('../controllers/indexController');
const authGuard = require("../middlewares/auth");

router.get("/", indexController.getHomePage);

router.get("/login", indexController.getLoginPage);
router.get("/about", indexController.getAboutPage);
router.get("/news", indexController.getNewsPage);
router.get("/contact", indexController.getContactPage);
router.get("/cart", indexController.getCartPage);



module.exports = router;