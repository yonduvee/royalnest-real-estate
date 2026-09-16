"use client";


import Link from "next/link";
import { useState } from "react";
import API_URL from "@/lib/api";
import {
Bed,
Bath,
Ruler
} from "lucide-react";


export default function PropertyCard({property}){


const [saved,setSaved] = useState(false);



const addFavorite = async()=>{


const token = localStorage.getItem("token");



if(!token){

alert("Please login to save favorite property");

return;

}




const res = await fetch(

`${API_URL}/favorites`,

{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:

`Bearer ${token}`

},


body:JSON.stringify({

property_id:property.id

})


}

);





if(res.ok){

setSaved(true);

}



};








const image =

property.images && property.images.length > 0

?

`${API_URL.replace("/api","")}/uploads/properties/${property.images[0]}`

:

"/placeholder-property.jpg";







return (

<div

className="
glass
rounded-3xl
overflow-hidden
group
hover-card
w-full
"

>




{/* Image */}

<div

className="
relative
h-56
sm:h-64
image-hover
"
>


<img

src={image}

alt={property.title}

className="
w-full
h-full
object-cover
"

/>





<div

className="
absolute
top-4
left-4
bg-white
text-black
px-4
py-1
rounded-full
text-xs
font-semibold
"

>

{property.type}

</div>






<button

onClick={addFavorite}

className="
absolute
top-4
right-4
w-10
h-10
rounded-full
bg-black/70
border
border-white/20
text-white
hover:bg-white
hover:text-black
transition
"

>

{

saved
?
"♥"
:
"♡"

}

</button>




</div>








{/* Content */}


<div

className="
p-6
"

>


<h3

className="
luxury-heading
text-xl
sm:text-2xl
text-white
line-clamp-2
"

>

{property.title}

</h3>






<p

className="
text-gray-400
mt-3
"

>

📍 {property.location}

</p>







<h2

className="
text-white
text-2xl
sm:text-3xl
font-semibold
mt-5
"

>

${property.price}

</h2>








<div

className="
flex
justify-between
text-gray-300
mt-6
text-sm
"

>


<span

className="
flex
items-center
gap-2
"

>

<Bed size={16}/>

{property.bedrooms}

</span>





<span

className="
flex
items-center
gap-2
"

>

<Bath size={16}/>

{property.bathrooms}

</span>






<span

className="
flex
items-center
gap-2
"

>

<Ruler size={16}/>

{property.area}

</span>




</div>






<Link

href={`/property/${property.id}`}

className="
block
text-center
mt-7
py-3
w-full
rounded-full
border
border-white/30
text-white
hover:bg-white
hover:text-black
transition
"

>

View Details

</Link>







</div>





</div>


)

}