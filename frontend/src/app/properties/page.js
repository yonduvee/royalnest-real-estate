"use client";


import { useEffect,useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";


export default function PropertiesPage(){


const [properties,setProperties]=useState([]);




useEffect(()=>{


fetch(`${API_URL}/properties`)

.then(res=>res.json())

.then(data=>{


setProperties(data);


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


<div

className="
text-center
mb-14
"

>


<p className="text-gray-400 tracking-[5px]">

PROPERTIES

</p>

<BackButton />

<h1

className="
luxury-heading
text-6xl
text-white
mt-5
"

>

Find Your Perfect Home

</h1>


</div>








<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"

>


{

properties.map((property)=>(


<PropertyCard

key={property.id}

property={property}

/>


))


}



</div>




</div>


</main>


)

}