const router = require('express').Router();
const indexController = require('../controllers/indexController');

router.get("/", indexController.getHomePage);
router.get("/login", indexController.getLoginPage);



module.exports = router;