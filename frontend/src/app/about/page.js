const stats = [

{
value:"10K+",
title:"Premium Homes"
},

{
value:"5K+",
title:"Happy Clients"
},

{
value:"50+",
title:"Prime Locations"
},

{
value:"10+",
title:"Years Experience"
}

];



const values = [

{
title:"Trusted Excellence",
text:"We provide carefully selected premium properties with complete transparency."
},

{
title:"Luxury Collection",
text:"Our portfolio contains modern homes designed for elegant lifestyles."
},

{
title:"Personal Service",
text:"Our experts guide you through every step of your property journey."
}

];




export default function AboutPage(){


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



<section

className="
text-center
mb-20
"

>


<p

className="
text-gray-400
tracking-[6px]
text-sm
"

>

ABOUT ROYALNEST

</p>



<h1

className="
luxury-heading
text-6xl
text-white
mt-6
"

>

Creating

<span className="luxury-text">

 Luxury Living

</span>

Experiences

</h1>




<p

className="
text-gray-400
max-w-3xl
mx-auto
mt-6
leading-relaxed
"

>

RoyalNest is a premium real estate platform
connecting people with exceptional homes,
modern architecture and timeless designs.

</p>


</section>







<div

className="
grid
md:grid-cols-4
gap-6
mb-20
"

>


{

stats.map((item)=>(


<div

key={item.title}

className="
glass
rounded-3xl
p-8
text-center
border
border-white/20
hover-card
"

>


<h2

className="
text-4xl
text-white
font-semibold
"

>

{item.value}

</h2>



<p

className="
text-gray-400
mt-3
"

>

{item.title}

</p>


</div>


))


}


</div>









<h2

className="
luxury-heading
text-5xl
text-white
text-center
mb-10
"

>

Why Choose RoyalNest

</h2>






<div

className="
grid
md:grid-cols-3
gap-8
"

>


{

values.map((item)=>(


<div

key={item.title}

className="
glass
rounded-3xl
p-8
border
border-white/20
hover-card
"

>


<h3

className="
text-2xl
text-white
"

>

{item.title}

</h3>


<p

className="
text-gray-400
mt-4
leading-relaxed
"

>

{item.text}

</p>


</div>


))


}



</div>



</div>


</main>


)

}