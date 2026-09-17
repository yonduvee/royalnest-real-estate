"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";


export default function AddPropertyPage(){


const router = useRouter();



const [form,setForm]=useState({

title:"",
description:"",
price:"",
location:"",
type:"sale",
bedrooms:"",
bathrooms:"",
area:"",
amenities:""

});



const [images,setImages]=useState([]);

const [message,setMessage]=useState("");





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const handleSubmit=async(e)=>{


e.preventDefault();



const token =
localStorage.getItem("token");



const formData = new FormData();



Object.keys(form).forEach((key)=>{


formData.append(
key,
form[key]
);


});




images.forEach((image)=>{


formData.append(
"images",
image
);


});







try{


const res = await fetch(

`${API_URL}/properties`,

{

method:"POST",

headers:{


Authorization:

`Bearer ${token}`


},


body:formData


}

);





const data = await res.json();





if(res.ok){


setMessage(
"Property added successfully"
);


setTimeout(()=>{


router.push("/admin/properties");


},1000);


}

else{


setMessage(data.message);


}



}

catch(error){


setMessage(
"Something went wrong"
);


}



};







return (

<main

className="
min-h-screen
pt-32
px-6
pb-20
"

>


<div

className="
max-w-5xl
mx-auto
"

>

<BackButton
  href="/admin"
  text="← Back to Dashboard"
/>

<h1

className="
luxury-heading
text-5xl
text-white
mb-10
"

>

Add New Property

</h1>







<form

onSubmit={handleSubmit}

className="
glass
rounded-3xl
p-8
border
border-white/20
"

>



<div

className="
grid
md:grid-cols-2
gap-5
"

>





<input

name="title"

placeholder="Property Title"

onChange={handleChange}

className="input-style"

/>





<input

name="price"

placeholder="Price"

onChange={handleChange}

className="input-style"

/>





<input

name="location"

placeholder="Location"

onChange={handleChange}

className="input-style"

/>






<select

name="type"

onChange={handleChange}

className="input-style"

>

<option value="sale">

For Sale

</option>


<option value="rent">

For Rent

</option>


</select>





<input

name="bedrooms"

placeholder="Bedrooms"

onChange={handleChange}

className="input-style"

/>





<input

name="bathrooms"

placeholder="Bathrooms"

onChange={handleChange}

className="input-style"

/>






<input

name="area"

placeholder="Area"

onChange={handleChange}

className="input-style"

/>





<input

name="amenities"

placeholder="Amenities"

onChange={handleChange}

className="input-style"

/>



</div>







<textarea

name="description"

placeholder="Description"

onChange={handleChange}

className="
input-style
mt-5
"

/>








<div

className="
mt-6
border
border-white/20
border-dashed
rounded-3xl
p-8
bg-white/5
text-center
hover:border-white/40
transition
"

>


<input

id="imageUpload"

type="file"

multiple

accept="image/*"

onChange={(e)=>

setImages(

Array.from(e.target.files)

)

}

className="
hidden
"

/>





<label

htmlFor="imageUpload"

className="
cursor-pointer
block
"

>


<div

className="
w-16
h-16
mx-auto
rounded-full
border
border-white/20
flex
items-center
justify-center
text-white
text-3xl
"

>

+

</div>





<h3

className="
text-white
text-xl
mt-4
"

>

Upload Property Images

</h3>





<p

className="
text-gray-400
mt-2
"

>

PNG, JPG, WEBP supported

</p>





<p

className="
text-gray-500
text-sm
mt-2
"

>

{

images.length > 0

?

`${images.length} image selected`

:

"No images selected"

}

</p>





</label>



</div>








<button

className="
premium-button
w-full
py-4
mt-8
"

>

Add Property

</button>







{

message &&

<p

className="
text-gray-300
text-center
mt-5
"

>

{message}

</p>


}



</form>





</div>


</main>


)

}