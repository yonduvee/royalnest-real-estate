const db = require("../config/db");

const bcrypt = require("bcrypt");




// Admin Get All Users

exports.getUsers = (req,res)=>{


db.query(

`

SELECT

id,
name,
email,
phone,
role,
created_at

FROM users

ORDER BY id DESC

`,

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







// Delete User Admin

exports.deleteUser = (req,res)=>{


db.query(

"DELETE FROM users WHERE id=?",

[req.params.id],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"User deleted"

});


}


);


};









// Get Own Profile

exports.getProfile = (req,res)=>{


db.query(

`

SELECT

id,
name,
email,
phone,
role

FROM users

WHERE id=?

`,

[req.user.id],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json(result[0]);


}


);


};









// Update Profile

exports.updateProfile = (req,res)=>{


const {

name,

phone

}=req.body;




db.query(

`

UPDATE users

SET

name=?,

phone=?

WHERE id=?

`,

[

name,

phone,

req.user.id

],


(err)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Profile updated"

});


}


);



};









// Change Password

exports.changePassword = async(req,res)=>{


const {

oldPassword,

newPassword

}=req.body;





db.query(

"SELECT password FROM users WHERE id=?",

[req.user.id],


async(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}




const match = await bcrypt.compare(

oldPassword,

result[0].password

);





if(!match){

return res.status(401).json({

message:"Old password incorrect"

});

}



const hash = await bcrypt.hash(

newPassword,

10

);





db.query(

`

UPDATE users

SET password=?

WHERE id=?

`,

[

hash,

req.user.id

],


()=>{


res.json({

message:"Password changed"

});


}


);



}


);



};