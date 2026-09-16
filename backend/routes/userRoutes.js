const express = require("express");

const router = express.Router();


const userController =

require("../controllers/userController");


const authMiddleware =

require("../middleware/authMiddleware");


const adminMiddleware =

require("../middleware/adminMiddleware");





// Admin Users

router.get(

"/",

authMiddleware,

adminMiddleware,

userController.getUsers

);





router.delete(

"/:id",

authMiddleware,

adminMiddleware,

userController.deleteUser

);








// User Profile

router.get(

"/profile",

authMiddleware,

userController.getProfile

);





router.put(

"/profile",

authMiddleware,

userController.updateProfile

);






router.put(

"/password",

authMiddleware,

userController.changePassword

);






module.exports = router;