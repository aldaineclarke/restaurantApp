const router = require("express").Router();
const db = require("../configs/db.config");
const userController = require("../controllers/userController");



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/auth', userController.authenticateUser);
router.post('/auth/register', userController.createUser);



module.exports = router;