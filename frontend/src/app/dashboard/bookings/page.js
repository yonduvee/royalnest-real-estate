"use client";


import { useEffect, useState } from "react";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";


function StatusBadge({status}){


return (

<span

className="
border
border-white/30
rounded-full
px-4
py-2
text-sm
text-white
"

>

{status}

</span>

);

}





export default function BookingsPage(){


const [bookings,setBookings] = useState([]);





useEffect(()=>{


const token =
localStorage.getItem("token");



if(token){


fetch(

`${API_URL}/bookings/my`,

{

headers:{

Authorization:

`Bearer ${token}`

}

}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setBookings(data);

}


});


}



},[]);








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

<BackButton />

<h1

className="
luxury-heading
text-5xl
text-white
mb-10
"

>

My Bookings

</h1>







<div

className="
glass
rounded-3xl
p-8
border
border-white/20
"

>





{

bookings.length===0 ?


<p className="text-gray-400">

No bookings found

</p>



:


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
bg-white/5
rounded-2xl
p-6
flex
justify-between
items-center
"

>


<div>


<h2

className="
text-white
text-2xl
"

>

{item.title}

</h2>





<p

className="
text-gray-400
mt-2
"

>

📍 {item.location}

</p>





<p

className="
text-gray-400
"

>

📅 {item.booking_date}

</p>





<p

className="
text-gray-400
"

>

⏰ {item.booking_time}

</p>



</div>







<StatusBadge status={item.status}/>



</div>


))


}



</div>


}





</div>





</div>


</main>


)

}