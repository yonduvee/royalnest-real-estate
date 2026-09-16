"use client";


import { useEffect, useState } from "react";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";



export default function AdminProperties(){


const [properties,setProperties]=useState([]);

const [message,setMessage]=useState("");





const getProperties=async()=>{


const token=localStorage.getItem("token");


const res=await fetch(

`${API_URL}/admin/properties`,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



const data=await res.json();



if(Array.isArray(data)){

setProperties(data);

}



};







useEffect(()=>{


getProperties();


},[]);








const deleteProperty=async(id)=>{


const token=localStorage.getItem("token");



const confirmDelete=confirm(
"Delete this property?"
);



if(!confirmDelete)return;





const res=await fetch(

`${API_URL}/properties/${id}`,

{

method:"DELETE",

headers:{

Authorization:`Bearer ${token}`

}

}

);





if(res.ok){

setMessage("Property deleted");

getProperties();

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
max-w-7xl
mx-auto
"

>



<BackButton />





<h1

className="
luxury-heading
text-5xl
text-white
mb-10
"

>

Manage Properties

</h1>







{

message &&

<p className="text-gray-300 mb-5">

{message}

</p>

}








<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"

>


{

properties.map((item)=>(


<div

key={item.id}

className="
glass
rounded-3xl
overflow-hidden
border
border-white/20
"

>






<div

className="
h-60
overflow-hidden
"

>


<img

src={

item.images?.length

?

`http://localhost:5000/uploads/properties/${item.images[0]}`

:

"/placeholder-property.jpg"

}

alt={item.title}

className="
w-full
h-full
object-cover
"

/>


</div>







<div

className="
p-6
"

>


<h2

className="
luxury-heading
text-2xl
text-white
"

>

{item.title}

</h2>





<p className="text-gray-400 mt-3">

📍 {item.location}

</p>





<p className="text-white text-xl mt-4">

${item.price}

</p>






<div

className="
flex
gap-4
mt-6
"

>


<button

className="
flex-1
border
border-white/30
rounded-full
py-3
text-white
"

>

Edit

</button>





<button

onClick={()=>deleteProperty(item.id)}

className="
flex-1
border
border-red-400
rounded-full
py-3
text-red-400
"

>

Delete

</button>



</div>





</div>





</div>


))


}



</div>






</div>


</main>


)

}