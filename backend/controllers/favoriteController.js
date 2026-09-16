const db = require("../config/db");




// Add Favorite

exports.addFavorite = (req,res)=>{


const user_id = req.user.id;


const {property_id} = req.body;




const sql = `

INSERT INTO favorites

(user_id, property_id)

VALUES (?,?)

`;




db.query(

sql,

[
user_id,
property_id
],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Added to favorites"

});



}


);


};








// Get User Favorites


exports.getFavorites = (req,res)=>{


const user_id = req.user.id;



const sql = `

SELECT

favorites.id,

properties.id AS property_id,

properties.title,

properties.price,

properties.location,

properties.area,

properties.bedrooms,

properties.bathrooms


FROM favorites


JOIN properties

ON favorites.property_id = properties.id



WHERE favorites.user_id=?



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








// Remove Favorite


exports.removeFavorite = (req,res)=>{


const user_id = req.user.id;


const property_id = req.params.id;




db.query(

`

DELETE FROM favorites

WHERE user_id=?

AND property_id=?

`,

[

user_id,

property_id

],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Removed from favorites"

});


}



);


};