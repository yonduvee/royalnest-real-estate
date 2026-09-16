const db = require("../config/db");




// Dashboard Statistics

exports.getStats = (req,res)=>{


const stats={};



db.query(

"SELECT COUNT(*) AS total FROM users",

(err,userResult)=>{


if(err)
return res.status(500).json({message:err.message});


stats.users=userResult[0].total;




db.query(

"SELECT COUNT(*) AS total FROM properties",

(err,propertyResult)=>{


if(err)
return res.status(500).json({message:err.message});


stats.properties=propertyResult[0].total;




db.query(

"SELECT COUNT(*) AS total FROM bookings",

(err,bookingResult)=>{


if(err)
return res.status(500).json({message:err.message});


stats.bookings=bookingResult[0].total;




db.query(

"SELECT COUNT(*) AS total FROM bookings WHERE status='pending'",

(err,pendingResult)=>{


if(err)
return res.status(500).json({message:err.message});


stats.pending=pendingResult[0].total;


res.json(stats);



}

);


}

);


}

);


}

);


};










// Recent Bookings

exports.getBookings=(req,res)=>{


const sql=`

SELECT

bookings.*,

users.name,

users.email,

properties.title


FROM bookings


JOIN users

ON bookings.user_id=users.id



JOIN properties

ON bookings.property_id=properties.id



ORDER BY bookings.id DESC

LIMIT 10

`;



db.query(

sql,

(err,result)=>{


if(err)

return res.status(500).json({

message:err.message

});



res.json(result);


}


);


};









// Recent Properties With Images

exports.getProperties=(req,res)=>{


const sql=`

SELECT

properties.*,

GROUP_CONCAT(property_images.image_path) AS images


FROM properties


LEFT JOIN property_images

ON properties.id = property_images.property_id



GROUP BY properties.id



ORDER BY properties.id DESC



`;





db.query(

sql,

(err,result)=>{


if(err)

return res.status(500).json({

message:err.message

});






const data=result.map(item=>({


...item,


images:item.images

?

item.images.split(",")

:

[]



}));





res.json(data);



}


);


};