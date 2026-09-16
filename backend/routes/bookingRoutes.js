const express = require("express");

const router = express.Router();


const bookingController =
require("../controllers/bookingController");


const authMiddleware =
require("../middleware/authMiddleware");




const adminMiddleware =
require("../middleware/adminMiddleware");





// User create booking

router.post(

"/",

authMiddleware,

bookingController.createBooking

);





// User bookings

router.get(

"/my",

authMiddleware,

bookingController.getUserBookings

);






// Admin all bookings

router.get(

"/",

authMiddleware,

adminMiddleware,

bookingController.getAllBookings

);







// Admin update status

router.put(

"/:id",

authMiddleware,

adminMiddleware,

bookingController.updateBookingStatus

);





module.exports = router;