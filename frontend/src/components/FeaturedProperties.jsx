"use client";


import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import API_URL from "@/lib/api";
import {
  Bed,
  Bath,
  Ruler,
  MapPin
} from "lucide-react";




const showcaseProperties = [


{
id:1,
title:"Modern Luxury Villa",
location:"Beverly Hills, CA",
price:"$850,000",
bedrooms:4,
bathrooms:3,
area:"3200 sqft",
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
},



{
id:2,
title:"Private Garden Estate",
location:"California",
price:"$1,800,000",
bedrooms:6,
bathrooms:5,
area:"6000 sqft",
image:
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
},



{
id:3,
title:"Luxury Downtown Condo",
location:"New York",
price:"$900,000",
bedrooms:3,
bathrooms:2,
area:"1800 sqft",
image:
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
},



{
id:4,
title:"Mountain View Retreat",
location:"Colorado",
price:"$700,000",
bedrooms:3,
bathrooms:3,
area:"2800 sqft",
image:
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
}


];








function ShowcaseCard({property}){


return (

<div

className="
glass
rounded-3xl
overflow-hidden
hover-card
w-full
"

>


<div

className="
h-56
sm:h-64
overflow-hidden
"

>


<img

src={property.image}

alt={property.title}

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
flex
items-center
gap-2
text-gray-400
mt-3
"

>

<MapPin size={16}/>

{property.location}

</p>





<h2

className="
text-white
text-2xl
mt-5
"

>

{property.price}

</h2>







<div

className="
grid
grid-cols-3
gap-3
mt-6
text-gray-300
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




<button

disabled

className="
w-full
mt-6
py-3
rounded-full
border
border-white/20
text-gray-400
cursor-not-allowed
"

>

Showcase Property

</button>





</div>





</div>


)

}









export default function FeaturedProperties(){


const [properties,setProperties]=useState([]);

const [loading,setLoading]=useState(true);







useEffect(()=>{


fetch(`${API_URL}/properties`)


.then(res=>res.json())


.then(data=>{


setProperties(data);

setLoading(false);


})


.catch(()=>{


setLoading(false);


});


},[]);








return (

<section

className="
relative
py-24
px-6
"

>


<div

className="
max-w-7xl
mx-auto
"

>







{/* Featured */}


<div

className="
text-center
mb-14
"

>


<p

className="
text-gray-400
tracking-[6px]
text-sm
"

>

FEATURED PROPERTIES

</p>



<h2

className="
luxury-heading
text-4xl
md:text-5xl
text-white
mt-5
"

>

Explore Luxury Homes

</h2>



</div>









<div

className="
flex
gap-6
overflow-x-auto
hide-scrollbar
cursor-grab
"

>


{

showcaseProperties.map((property)=>(


<div

key={property.id}

className="
min-w-[280px]
sm:min-w-[320px]
md:min-w-[360px]
"

>


<ShowcaseCard property={property}/>


</div>


))


}



</div>









{/* Latest */}



<div

className="
text-center
mt-24
mb-14
"

>


<p

className="
text-gray-400
tracking-[6px]
text-sm
"

>

LATEST PROPERTIES

</p>



<h2

className="
luxury-heading
text-4xl
md:text-5xl
text-white
mt-5
"

>

New Properties

</h2>



</div>









{

loading ?


<p className="text-white text-center">

Loading properties...

</p>



:


<div

className="
flex
gap-6
overflow-x-auto
hide-scrollbar
cursor-grab
"

>


{

properties.map((property)=>(


<div

key={property.id}

className="
min-w-[280px]
sm:min-w-[320px]
md:min-w-[360px]
"

>


<PropertyCard property={property}/>


</div>


))


}



</div>



}





</div>


</section>


)

}