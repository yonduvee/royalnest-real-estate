const db = require("../config/db");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");






// Register User

exports.register = async (req,res)=>{


try{


const {

name,

email,

phone,

password

}=req.body;





// Validation


if(!name || !email || !password){


return res.status(400).json({

message:"Name, email and password are required"

});


}




if(password.length < 6){


return res.status(400).json({

message:"Password must be at least 6 characters"

});


}







// Check Existing Email


db.query(

"SELECT id FROM users WHERE email=?",

[email],


async(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}





if(result.length > 0){


return res.status(400).json({

message:"Email already exists"

});


}







// Hash Password


const hashedPassword =

await bcrypt.hash(password,10);








const sql = `

INSERT INTO users

(name,email,phone,password)

VALUES (?,?,?,?)

`;







db.query(

sql,

[

name,

email,

phone,

hashedPassword

],


(err,result)=>{


if(err){

return res.status(500).json({

message:err.message

});

}



res.json({

message:"Registration successful"

});



}



);





}



);





}

catch(error){


res.status(500).json({

message:error.message

});


}



};












// Login User


exports.login = (req,res)=>{


const {

email,

password

}=req.body;






if(!email || !password){


return res.status(400).json({

message:"Email and password are required"

});


}






const sql = `

SELECT *

FROM users

WHERE email=?

`;







db.query(

sql,

[email],


async(err,result)=>{





if(err){

return res.status(500).json({

message:err.message

});

}





if(result.length===0){


return res.status(401).json({

message:"Invalid email or password"

});


}





const user=result[0];








const match =

await bcrypt.compare(

password,

user.password

);








if(!match){


return res.status(401).json({

message:"Invalid email or password"

});


}








const token = jwt.sign(

{

id:user.id,

role:user.role

},


process.env.JWT_SECRET,


{

expiresIn:"7d"

}



);









res.json({

message:"Login successful",


token,


user:{


id:user.id,

name:user.name,

email:user.email,

role:user.role


}



});





}



);



};