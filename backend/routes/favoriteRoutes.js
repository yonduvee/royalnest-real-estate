const express = require("express");

const router = express.Router();



const favoriteController =

require("../controllers/favoriteController");



const authMiddleware =

require("../middleware/authMiddleware");





// Add Favorite

router.post(

"/",

authMiddleware,

favoriteController.addFavorite

);






// Get Favorites

router.get(

"/",

authMiddleware,

favoriteController.getFavorites

);






// Remove Favorite

router.delete(

"/:id",

authMiddleware,

favoriteController.removeFavorite

);






module.exports = router;