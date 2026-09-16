const express = require("express");

const router = express.Router();



const propertyController =

require("../controllers/propertyController");



const upload =

require("../middleware/uploadMiddleware");



const authMiddleware =

require("../middleware/authMiddleware");


const adminMiddleware =

require("../middleware/adminMiddleware");







// Add Property (Admin Only)

router.post(

"/",

authMiddleware,

adminMiddleware,

upload.array("images",5),

propertyController.addProperty

);







// Get All Properties (Public)

router.get(

"/",

propertyController.getProperties

);








// Get Single Property (Public)

router.get(

"/:id",

propertyController.getSingleProperty

);








// Delete Property (Admin Only)

router.delete(

"/:id",

authMiddleware,

adminMiddleware,

propertyController.deleteProperty

);







// Update Property (Admin Only)

router.put(

"/:id",

authMiddleware,

adminMiddleware,

propertyController.updateProperty

);






module.exports = router;