"use client";


import { useEffect,useState } from "react";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";



export default function AdminBookings(){


const [bookings,setBookings]=useState([]);





const getBookings=async()=>{


const token=localStorage.getItem("token");



const res=await fetch(

`${API_URL}/admin/bookings`,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



const data=await res.json();



if(Array.isArray(data)){

setBookings(data);

}


};






useEffect(()=>{


getBookings();


},[]);







const updateStatus=async(id,status)=>{


const token=localStorage.getItem("token");



await fetch(

`${API_URL}/bookings/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json",

Authorization:`Bearer ${token}`

},


body:JSON.stringify({

status

})


}

);



getBookings();


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

Manage Bookings

</h1>







<div

className="
space-y-5
"

>


{

bookings.map((item)=>(


<div

key={item.id}

className="
glass
rounded-3xl
p-6
border
border-white/20
flex
justify-between
items-center
"

>


<div>


<h2 className="text-white text-xl">

{item.title}

</h2>


<p className="text-gray-400">

User: {item.name}

</p>


<p className="text-gray-400">

Date: {item.booking_date}

</p>


</div>







<div className="flex gap-3">


<button

onClick={()=>updateStatus(item.id,"confirmed")}

className="
border
border-white
text-white
rounded-full
px-5
py-2
"

>

Confirm

</button>





<button

onClick={()=>updateStatus(item.id,"cancelled")}

className="
border
border-red-400
text-red-400
rounded-full
px-5
py-2
"

>

Cancel

</button>



</div>




</div>


))


}



</div>






</div>


</main>


)

}