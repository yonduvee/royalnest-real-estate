"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import UserSidebar from "@/components/UserSidebar";
import API_URL from "@/lib/api";
import {
  CalendarDays,
  Heart,
  UserCircle
} from "lucide-react";


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






export default function Dashboard(){


const [user,setUser]=useState(null);

const [bookings,setBookings]=useState([]);

const [favorites,setFavorites]=useState([]);







useEffect(()=>{


const token = localStorage.getItem("token");

const savedUser = localStorage.getItem("user");


if(!savedUser){

window.location.href="/login";

return;

}



const currentUser = JSON.parse(savedUser);


// Admin should not enter user dashboard

if(currentUser.role==="admin"){

window.location.href="/admin";

return;

}


setUser(currentUser);


if(savedUser){

const currentUser = JSON.parse(savedUser);

setUser(currentUser);


// Prevent admin entering user dashboard

if(currentUser.role==="admin"){

window.location.href="/admin";

return;

}


}





const headers={

Authorization:

`Bearer ${token}`

};







fetch(

`${API_URL}/bookings/my`,

{

headers

}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setBookings(data);

}


});







fetch(

`${API_URL}/favorites`,

{

headers

}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setFavorites(data);

}


});





},[]);







const cards=[


{

title:"My Bookings",

value:bookings.length,

icon:<CalendarDays size={32}/>

},


{

title:"Favorites",

value:favorites.length,

icon:<Heart size={32}/>

},


{

title:"Account",

value:"Active",

icon:<UserCircle size={32}/>

}


];






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
grid
lg:grid-cols-[280px_1fr]
gap-8
"

>


{/* Sidebar */}

<UserSidebar />







{/* Content */}

<section>



<h1

className="
luxury-heading
text-5xl
text-white
mb-3
"

>

Welcome Back,

<span className="luxury-text">

 {user?.name || "User"}

</span>

</h1>




<p

className="
text-gray-400
mb-10
"

>

Manage your properties, bookings and account from here.

</p>









{/* Summary Cards */}



<div

className="
grid
md:grid-cols-3
gap-6
mb-10
"

>


{

cards.map((item)=>(


<div

key={item.title}

className="
glass
rounded-3xl
p-6
border
border-white/20
hover-card
"

>


<div

className="
w-14
h-14
rounded-2xl
border
border-white/20
flex
items-center
justify-center
text-white
"

>

{item.icon}

</div>



<p

className="
text-gray-400
mt-4
"

>

{item.title}

</p>



<h2

className="
text-4xl
text-white
mt-2
"

>

{item.value}

</h2>



</div>


))


}



</div>









{/* Quick Actions */}



<div

className="
grid
md:grid-cols-3
gap-5
mb-10
"

>


<Link

href="/properties"

className="
glass
rounded-3xl
p-6
text-white
hover:bg-white
hover:text-black
transition
"

>

🏠 Browse Properties

</Link>





<Link

href="/dashboard/bookings"

className="
glass
rounded-3xl
p-6
text-white
hover:bg-white
hover:text-black
transition
"

>

📅 View Bookings

</Link>






<Link

href="/dashboard/profile"

className="
glass
rounded-3xl
p-6
text-white
hover:bg-white
hover:text-black
transition
"

>

👤 Edit Profile

</Link>



</div>









{/* Recent Bookings */}



<div

className="
glass
rounded-3xl
p-8
border
border-white/20
"

>


<h2

className="
luxury-heading
text-3xl
text-white
mb-6
"

>

Recent Bookings

</h2>







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

bookings.slice(0,5).map((item)=>(


<div

key={item.id}

className="
bg-white/5
rounded-2xl
p-5
flex
justify-between
items-center
"

>


<div>


<h3 className="text-white text-xl">

{item.title}

</h3>



<p className="text-gray-400">

📍 {item.location}

</p>



<p className="text-gray-400">

📅 {item.booking_date}

</p>



</div>





<StatusBadge status={item.status}/>



</div>


))


}



</div>


}





</div>






</section>






</div>


</main>


)

}