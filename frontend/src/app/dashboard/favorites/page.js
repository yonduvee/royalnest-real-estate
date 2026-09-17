"use client";


import { useEffect, useState } from "react";
import API_URL from "@/lib/api";
import Link from "next/link";
import BackButton from "@/components/BackButton";


export default function FavoritesPage(){


const [favorites,setFavorites]=useState([]);





const getFavorites=async()=>{


const token =
localStorage.getItem("token");



const res = await fetch(

`${API_URL}/favorites`,

{

headers:{

Authorization:

`Bearer ${token}`

}

}

);



const data = await res.json();



if(Array.isArray(data)){

setFavorites(data);

}


};







useEffect(()=>{


getFavorites();


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
<BackButton
  href="/dashboard"
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

Favorite Properties

</h1>







<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"

>


{

favorites.length===0 ?


<p className="text-gray-400">

No favorite properties

</p>



:


favorites.map((item)=>(


<div

key={item.id}

className="
glass
rounded-3xl
p-6
"

>


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
mt-3
"

>

📍 {item.location}

</p>



<p

className="
text-white
mt-4
"

>

${item.price}

</p>




<Link

href={`/property/${item.property_id}`}

className="
block
mt-6
text-center
border
border-white/30
rounded-full
py-3
text-white
"

>

View Details

</Link>




</div>


))


}



</div>






</div>


</main>


)

}