const multer = require("multer");
const path = require("path");
const fs = require("fs");





const uploadPath = "uploads/properties";




// Create folder if not exists

if(!fs.existsSync(uploadPath)){

fs.mkdirSync(uploadPath,{

recursive:true

});

}








const storage = multer.diskStorage({


destination:(req,file,cb)=>{


cb(

null,

uploadPath

);


},






filename:(req,file,cb)=>{


const uniqueName =

Date.now()

+

"-"

+

Math.round(Math.random()*100000);



cb(

null,

uniqueName

+

path.extname(file.originalname)

);


}


});









const fileFilter=(req,file,cb)=>{


const allowedTypes=[

"image/jpeg",

"image/png",

"image/webp"

];




if(allowedTypes.includes(file.mimetype)){


cb(null,true);


}

else{


cb(

new Error(

"Only JPG, PNG and WEBP images are allowed"

),

false

);


}



};









const upload = multer({


storage:storage,


limits:{


fileSize:5 * 1024 * 1024


},



fileFilter:fileFilter



});







module.exports = upload;