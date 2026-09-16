"use client";


import { useEffect,useState } from "react";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";



export default function AdminUsers(){


const [users,setUsers]=useState([]);





useEffect(()=>{


const token=localStorage.getItem("token");



fetch(

`${API_URL}/users`,

{

headers:{

Authorization:`Bearer ${token}`

}

}

)

.then(res=>res.json())

.then(data=>{


if(Array.isArray(data)){

setUsers(data);

}


});


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

Manage Users

</h1>








<div

className="
glass
rounded-3xl
p-8
border
border-white/20
space-y-5
"

>


{

users.map((user)=>(


<div

key={user.id}

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


<h2 className="text-white text-xl">

{user.name}

</h2>


<p className="text-gray-400">

{user.email}

</p>


<p className="text-gray-400">

{user.phone}

</p>


</div>





<span

className="
border
border-white/30
rounded-full
px-4
py-2
text-white
"

>

{user.role}

</span>



</div>


))


}



</div>






</div>


</main>


)

}