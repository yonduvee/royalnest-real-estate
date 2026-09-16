const bcrypt = require("bcrypt");
const db = require("./config/db");



const createAdmin = async()=>{


const name = "RoyalNest Admin";

const email = "admin@royalnest.com";

const phone = "123456789";


const password = "admin123";



const hashedPassword =
await bcrypt.hash(password,10);





const sql = `

INSERT INTO users

(
name,
email,
phone,
password,
role
)

VALUES (?,?,?,?,?)

`;




db.query(

sql,

[
name,
email,
phone,
hashedPassword,
"admin"
],


(err,result)=>{


if(err){

console.log(
"Admin creation failed:",
err.message
);

process.exit();

}



console.log(
"Admin created successfully"
);



console.log(
"Email: admin@royalnest.com"
);


console.log(
"Password: admin123"
);



process.exit();


}



);


};



createAdmin();