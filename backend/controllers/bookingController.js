const db = require("../config/db");



// Create Booking (User)

exports.createBooking = (req,res)=>{


const {

property_id,

booking_date,

booking_time,

message

}=req.body;



const user_id = req.user.id;



const sql = `

INSERT INTO bookings

(
user_id,
property_id,
booking_date,
booking_time,
message
)

VALUES (?,?,?,?,?)

`;




db.query(

sql,

[

user_id,

property_id,

booking_date,

booking_time,

message

],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Booking created successfully",

id:result.insertId

});


}


);


};







// Get User Bookings


exports.getUserBookings = (req,res)=>{


const user_id = req.user.id;



const sql = `

SELECT 

bookings.*,

properties.title,

properties.price,

properties.location


FROM bookings


JOIN properties

ON bookings.property_id = properties.id



WHERE bookings.user_id=?


ORDER BY bookings.id DESC


`;




db.query(

sql,

[user_id],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json(result);


}


);



};







// Admin Get All Bookings


exports.getAllBookings = (req,res)=>{


const sql = `

SELECT

bookings.*,

users.name,

users.email,

properties.title


FROM bookings


JOIN users

ON bookings.user_id = users.id



JOIN properties

ON bookings.property_id = properties.id



ORDER BY bookings.id DESC


`;




db.query(

sql,


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json(result);


}


);


};







// Update Booking Status (Admin)


exports.updateBookingStatus = (req,res)=>{


const {

status

}=req.body;



const sql = `

UPDATE bookings

SET status=?

WHERE id=?

`;




db.query(

sql,

[

status,

req.params.id

],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Booking status updated"

});


}


);



};