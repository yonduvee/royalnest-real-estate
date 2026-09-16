const features = [


{
icon:"🛡",
title:"Secure & Trusted",
description:
"Your data and property journey are always protected with reliable security."
},


{
icon:"📅",
title:"Easy Booking",
description:
"Book your dream property with a smooth and simple experience."
},


{
icon:"◈",
title:"24/7 Support",
description:
"Our professional team is always ready to assist you anytime."
},


{
icon:"✦",
title:"Premium Properties",
description:
"Explore verified luxury properties from trusted sources."
}


];






export default function WhyChooseUs(){


return (

<section

className="
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





<div

className="
text-center
mb-16
"

>


<p

className="
text-gray-400
tracking-[6px]
text-sm
"

>

WHY CHOOSE ROYALNEST

</p>





<h2

className="
luxury-heading
text-5xl
text-white
mt-5
"

>

Experience

<span className="luxury-text">

 Luxury Living

</span>

</h2>





<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
"

>

We combine premium properties,
modern technology and trusted service
to create an exceptional real estate experience.

</p>





</div>









<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{

features.map((item)=>(


<div

key={item.title}

className="
glass
rounded-3xl
p-8
text-center
border
border-white/10
hover-card
"

>





<div

className="
w-16
h-16
mx-auto
rounded-full
border
border-white/30
flex
items-center
justify-center
text-3xl
text-white
"

>

{item.icon}

</div>








<h3

className="
luxury-heading
text-2xl
text-white
mt-6
"

>

{item.title}

</h3>







<p

className="
text-gray-400
text-sm
mt-4
leading-relaxed
"

>

{item.description}

</p>






</div>


))


}



</div>








</div>


</section>


)

}