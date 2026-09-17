"use client";


import { useEffect, useState } from "react";
import Link from "next/link";

import AdminSidebar from "@/components/AdminSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import API_URL from "@/lib/api";

import {
Users,
Building2,
CalendarDays,
Clock3,
Plus,
ArrowRight
} from "lucide-react";





export default function AdminPage(){



const [stats,setStats]=useState({

users:0,
properties:0,
bookings:0,
pending:0

});



const [properties,setProperties]=useState([]);

const [bookings,setBookings]=useState([]);








useEffect(()=>{


const token = localStorage.getItem("token");

const savedUser = localStorage.getItem("user");


if(!savedUser){

window.location.href="/login";

return;

}



const currentUser = JSON.parse(savedUser);


// Only admin allowed

if(currentUser.role!=="admin"){

window.location.href="/dashboard";

return;

}



const headers={

Authorization:

`Bearer ${token}`

};







fetch(

`${API_URL}/admin/stats`,

{headers}

)

.then(res=>res.json())

.then(data=>{


if(!data.message){

setStats(data);

}


});








fetch(

`${API_URL}/admin/properties`,

{headers}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setProperties(data);

}


});







fetch(

`${API_URL}/admin/bookings`,

{headers}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setBookings(data);

}


});




},[]);










const cards=[


{
title:"Total Users",
value:stats.users,
icon:<Users size={28}/>
},


{
title:"Properties",
value:stats.properties,
icon:<Building2 size={28}/>
},


{
title:"Bookings",
value:stats.bookings,
icon:<CalendarDays size={28}/>
},


{
title:"Pending",
value:stats.pending,
icon:<Clock3 size={28}/>
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


<DashboardHeader />




<div

className="
max-w-7xl
mx-auto
grid
lg:grid-cols-[280px_1fr]
gap-8
"

>


<AdminSidebar />





<section>



<div

className="
mb-10
"

>


<p

className="
text-gray-400
tracking-[5px]
text-sm
"

>

ADMIN PANEL

</p>



<h1

className="
luxury-heading
text-5xl
text-white
mt-4
"

>

Welcome Back,

<span className="luxury-text">

 RoyalNest Admin

</span>

</h1>




<p

className="
text-gray-400
mt-4
"

>

Manage your properties, users and bookings from one premium dashboard.

</p>



</div>










{/* Stats Cards */}


<div

className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-6
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
mt-5
"

>

{item.title}

</p>




<h2

className="
text-4xl
text-white
mt-2
font-semibold
"

>

{item.value}

</h2>




</div>


))


}



</div>

{/* Recent Properties */}


<div

className="
glass
rounded-3xl
p-8
mt-10
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

Recent Properties

</h2>





<Link

href="/admin/properties"

className="
flex
items-center
gap-2
text-gray-300
hover:text-white
transition
"

>

View All

<ArrowRight size={18}/>

</Link>



</div>









<div

className="
space-y-4
"

>


{

properties.slice(0,5).map((item)=>(


<div

key={item.id}

className="
bg-white/5
rounded-2xl
p-5
flex
justify-between
items-center
hover:bg-white/10
transition
"

>


<div>


<h3

className="
text-white
text-xl
"

>

{item.title}

</h3>



<p

className="
text-gray-400
mt-2
"

>

{item.location}

</p>


</div>





<div

className="
text-white
font-semibold
"

>

${item.price}

</div>





</div>


))


}



</div>






</div>









{/* Recent Bookings */}


<div

className="
glass
rounded-3xl
p-8
mt-10
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

Recent Bookings

</h2>





<Link

href="/admin/bookings"

className="
flex
items-center
gap-2
text-gray-300
hover:text-white
transition
"

>

Manage

<ArrowRight size={18}/>

</Link>



</div>









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
mb-4
hover:bg-white/10
transition
"

>





<div>


<h3

className="
text-white
text-lg
"

>

{item.title}

</h3>





<p

className="
text-gray-400
mt-2
"

>

User: {item.name}

</p>





</div>








<span

className="
border
border-white/30
rounded-full
px-5
py-2
text-white
text-sm
"

>

{item.status}

</span>






</div>


))


}



</div>

{/* Quick Actions */}


<div

className="
grid
md:grid-cols-3
gap-6
mt-10
"

>


<Link

href="/admin/add-property"

className="
glass
rounded-3xl
p-6
border
border-white/20
text-white
hover:bg-white
hover:text-black
transition
group
"

>


<div

className="
flex
items-center
justify-between
"

>


<div>


<h3

className="
text-xl
font-semibold
"

>

Add Property

</h3>



<p

className="
text-gray-400
group-hover:text-black
mt-2
text-sm
"

>

Create new listing

</p>



</div>





<Plus size={28}/>



</div>



</Link>









<Link

href="/admin/bookings"

className="
glass
rounded-3xl
p-6
border
border-white/20
text-white
hover:bg-white
hover:text-black
transition
group
"

>



<div

className="
flex
items-center
justify-between
"

>



<div>


<h3

className="
text-xl
font-semibold
"

>

Bookings

</h3>



<p

className="
text-gray-400
group-hover:text-black
mt-2
text-sm
"

>

Manage requests

</p>



</div>





<CalendarDays size={28}/>



</div>



</Link>









<Link

href="/admin/users"

className="
glass
rounded-3xl
p-6
border
border-white/20
text-white
hover:bg-white
hover:text-black
transition
group
"

>



<div

className="
flex
items-center
justify-between
"

>



<div>


<h3

className="
text-xl
font-semibold
"

>

Users

</h3>




<p

className="
text-gray-400
group-hover:text-black
mt-2
text-sm
"

>

Manage accounts

</p>



</div>





<Users size={28}/>



</div>



</Link>





</div>







</section>






</div>


</main>


)

}