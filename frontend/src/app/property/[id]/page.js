import Link from "next/link";
import BookingModal from "@/components/BookingModal";


const API_URL="http://localhost:5000/api";



async function getProperty(id){


const res = await fetch(

`${API_URL}/properties/${id}`,

{
cache:"no-store"
}

);



if(!res.ok){

return null;

}


return res.json();


}







export default async function PropertyDetails({params}){


const {id}=await params;



const property=await getProperty(id);





if(!property){


return (

<main className="
min-h-screen
flex
items-center
justify-center
text-white
">

Property Not Found

</main>

)

}






const image = property.images?.length

?

`http://localhost:5000/uploads/properties/${property.images[0]}`

:

"/placeholder-property.jpg";







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




<Link

href="/properties"

className="
inline-flex
mb-8
px-5
py-2
rounded-full
border
border-white/20
text-gray-300
hover:bg-white
hover:text-black
transition
"

>

← Back to Properties

</Link>







<div

className="
grid
lg:grid-cols-2
gap-10
"

>





{/* Image */}


<div

className="
glass
rounded-3xl
overflow-hidden
"

>


<img

src={image}

alt={property.title}

className="
w-full
h-[650px]
object-cover
"

/>


</div>









{/* Details */}


<div

className="
glass
rounded-3xl
p-8
"

>


<h1

className="
luxury-heading
text-5xl
text-white
"

>

{property.title}

</h1>





<p

className="
text-gray-400
mt-4
text-lg
"

>

📍 {property.location}

</p>







<h2

className="
text-4xl
text-white
font-semibold
mt-8
"

>

${property.price}

</h2>









<div

className="
grid
grid-cols-3
gap-4
mt-10
"

>


<div className="
glass
rounded-2xl
p-5
text-center
">


<h3 className="text-white text-xl">

{property.bedrooms}

</h3>


<p className="text-gray-400 text-sm">

Beds

</p>


</div>





<div className="
glass
rounded-2xl
p-5
text-center
">


<h3 className="text-white text-xl">

{property.bathrooms}

</h3>


<p className="text-gray-400 text-sm">

Baths

</p>


</div>






<div className="
glass
rounded-2xl
p-5
text-center
">


<h3 className="text-white text-xl">

{property.area}

</h3>


<p className="text-gray-400 text-sm">

Area

</p>


</div>





</div>








<h2

className="
luxury-heading
text-3xl
text-white
mt-12
"

>

About Property

</h2>






<p

className="
text-gray-400
leading-relaxed
mt-5
"

>

{property.description}

</p>








<h2

className="
luxury-heading
text-3xl
text-white
mt-12
"

>

Amenities

</h2>







<div

className="
flex
flex-wrap
gap-3
mt-5
"

>


{

property.amenities?.split(",").map((item)=>(


<span

key={item}

className="
border
border-white/20
rounded-full
px-5
py-2
text-gray-300
"

>

{item}

</span>


))


}



</div>







<div

className="
mt-10
"

>


<BookingModal property={property}/>


</div>







</div>







</div>






</div>


</main>


)

}