"use client";


import { useState } from "react";
import API_URL from "@/lib/api";



export default function BookingModal({property}){


const [open,setOpen]=useState(false);


const [form,setForm]=useState({

booking_date:"",
booking_time:"",
message:""

});


const [message,setMessage]=useState("");







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const submitBooking=async()=>{


const token=localStorage.getItem("token");



if(!token){

setMessage(
"Please login first"
);

return;

}





if(
!form.booking_date ||
!form.booking_time
){

setMessage(
"Please select date and time"
);

return;

}







const res=await fetch(

`${API_URL}/bookings`,

{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:

`Bearer ${token}`

},


body:JSON.stringify({

property_id:property.id,

booking_date:form.booking_date,

booking_time:form.booking_time,

message:form.message

})


}

);






const data=await res.json();




if(res.ok){

setMessage(
"Booking submitted successfully"
);


setForm({

booking_date:"",
booking_time:"",
message:""

});


}

else{


setMessage(data.message);


}



};







return (

<>


<button

onClick={()=>setOpen(true)}

className="
premium-button
px-10
py-4
"

>

Book This Property

</button>









{

open &&


<div

className="
fixed
inset-0
z-50
bg-black/80
backdrop-blur-md
flex
items-center
justify-center
px-6
"

>



<div

className="
glass
rounded-3xl
max-w-lg
w-full
p-8
border
border-white/20
"

>





<div

className="
flex
justify-between
items-center
mb-6
"

>


<h2

className="
luxury-heading
text-3xl
text-white
"

>

Book Property

</h2>




<button

onClick={()=>setOpen(false)}

className="
text-white
text-2xl
"

>

×

</button>



</div>







<div

className="
bg-white/5
rounded-2xl
p-4
mb-6
"

>


<p className="text-gray-400">

Property

</p>


<h3 className="text-white text-xl">

{property.title}

</h3>



</div>







<input

type="date"

name="booking_date"

value={form.booking_date}

onChange={handleChange}

className="
input-style
mb-4
"

/>






<input

type="time"

name="booking_time"

value={form.booking_time}

onChange={handleChange}

className="
input-style
mb-4
"

/>







<textarea

name="message"

value={form.message}

onChange={handleChange}

placeholder="Write a message"

className="
input-style
mb-5
"

/>








<button

onClick={submitBooking}

className="
premium-button
w-full
py-4
"

>

Confirm Booking

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





</div>



</div>



}



</>

)

}