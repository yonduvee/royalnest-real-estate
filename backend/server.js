const express = require("express");

const cors = require("cors");

const path = require("path");

require("dotenv").config();



require("./config/db");





const authRoutes =
require("./routes/authRoutes");


const propertyRoutes =
require("./routes/propertyRoutes");


const bookingRoutes =
require("./routes/bookingRoutes");


const adminRoutes =
require("./routes/adminRoutes");


const userRoutes =
require("./routes/userRoutes");


const favoriteRoutes =
require("./routes/favoriteRoutes");






const app = express();







// CORS

app.use(
cors({
origin:[
"http://localhost:3000",
"https://royalnest-real-estate.vercel.app"
],
credentials:true
})
);








// JSON Middleware

app.use(express.json());







// Static Upload Folder

app.use(

"/uploads",

express.static(

path.join(__dirname,"uploads")

)

);








// Routes


app.use(

"/api/auth",

authRoutes

);




app.use(

"/api/properties",

propertyRoutes

);




app.use(

"/api/bookings",

bookingRoutes

);




app.use(

"/api/admin",

adminRoutes

);




app.use(

"/api/users",

userRoutes

);




app.use(

"/api/favorites",

favoriteRoutes

);









// Test Backend


app.get("/",(req,res)=>{


res.json({

message:"RoyalNest Backend Running"

});


});









// Global Error Handler


app.use(

(err,req,res,next)=>{


console.log(err);



res.status(500).json({

message:"Internal Server Error"

});


}

);









const PORT =

process.env.PORT || 5000;






app.listen(PORT,()=>{


console.log(

`Server running on port ${PORT}`

);


});