const db = require("../config/db");





// Add Property

exports.addProperty = (req,res)=>{


const {

title,

description,

price,

location,

type,

bedrooms,

bathrooms,

area,

amenities

}=req.body;







if(!title || !price || !location){


return res.status(400).json({

message:"Title, price and location are required"

});


}








const sql = `

INSERT INTO properties

(

title,

description,

price,

location,

type,

bedrooms,

bathrooms,

area,

amenities

)

VALUES (?,?,?,?,?,?,?,?,?)

`;







db.query(

sql,

[

title,

description,

price,

location,

type,

bedrooms,

bathrooms,

area,

amenities

],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}







const propertyId = result.insertId;









// Save Images


if(req.files && req.files.length > 0){



const images = req.files.map(file=>(

[

propertyId,

file.filename

]

));







db.query(

`

INSERT INTO property_images

(

property_id,

image_path

)

VALUES ?

`,

[images],


(imageError)=>{


if(imageError){

return res.status(500).json({

message:imageError.message

});

}



}


);



}







res.json({

message:"Property added successfully",

id:propertyId

});



}


);


};











// Get All Properties


exports.getProperties = (req,res)=>{


const sql = `


SELECT

properties.*,

GROUP_CONCAT(

property_images.image_path

) AS images



FROM properties



LEFT JOIN property_images


ON properties.id = property_images.property_id




GROUP BY properties.id



ORDER BY properties.id DESC



`;







db.query(

sql,

(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}








const data = result.map(item=>({


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











// Get Single Property


exports.getSingleProperty = (req,res)=>{


const id = req.params.id;





const sql = `


SELECT

properties.*,

GROUP_CONCAT(

property_images.image_path

) AS images



FROM properties



LEFT JOIN property_images


ON properties.id = property_images.property_id




WHERE properties.id = ?



GROUP BY properties.id



`;









db.query(

sql,

[id],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}





if(result.length===0){


return res.status(404).json({

message:"Property not found"

});


}







const property={


...result[0],


images:

result[0].images

?

result[0].images.split(",")

:

[]



};







res.json(property);



}


);


};




// Delete Property

exports.deleteProperty = (req,res)=>{


const id = req.params.id;






// Delete images first

db.query(

`

DELETE FROM property_images

WHERE property_id=?

`,

[id],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}





// Delete property

db.query(

`

DELETE FROM properties

WHERE id=?

`,

[id],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}





res.json({

message:"Property deleted successfully"

});




}


);



}


);



};













// Update Property


exports.updateProperty = (req,res)=>{


const {


title,

description,

price,

location,

type,

bedrooms,

bathrooms,

area,

amenities


}=req.body;






const sql = `


UPDATE properties

SET


title=?,

description=?,

price=?,

location=?,

type=?,

bedrooms=?,

bathrooms=?,

area=?,

amenities=?


WHERE id=?


`;







db.query(

sql,

[

title,

description,

price,

location,

type,

bedrooms,

bathrooms,

area,

amenities,

req.params.id

],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}







// Add new images if uploaded


if(req.files && req.files.length>0){



const images=req.files.map(file=>(

[

req.params.id,

file.filename

]

));







db.query(

`

INSERT INTO property_images

(

property_id,

image_path

)

VALUES ?

`,

[images]

);



}







res.json({

message:"Property updated successfully"

});





}


);



};