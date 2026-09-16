import Image from "next/image";
import Link from "next/link";



export default function Hero(){


return (

<section

className="
relative
min-h-[750px]
md:min-h-[900px]
flex
items-center
overflow-hidden
pt-32
"

>





{/* Background Image */}

<div

className="
absolute
inset-0
"

>


<Image

src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"

alt="Luxury Residence"

fill

priority

className="
object-cover
object-center
scale-110
md:scale-105
"

/>





<div

className="
absolute
inset-0
bg-black/70
"

></div>




<div

className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/80
to-transparent
"

></div>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-transparent
to-transparent
"

></div>



</div>









{/* Floating Lights */}


<div

className="
floating-orb
w-[450px]
h-[450px]
bg-white/10
right-20
top-24
"

></div>





<div

className="
absolute
w-40
h-40
rounded-full
border
border-white/10
right-40
bottom-40
animate-pulse
"

></div>









<div

className="
relative
z-10
max-w-7xl
mx-auto
px-8
w-full
"

>


<div

className="
max-w-4xl
fade-up
"

>







<p

className="
tracking-[10px]
text-sm
text-gray-300
mb-8
"

>

LUXURY REAL ESTATE

</p>









<h1

className="
luxury-heading
text-5xl
sm:text-6xl
md:text-8xl
leading-[1.05]
text-white
font-semibold
"

>

Find Your

<br/>

<span className="luxury-text">

Dream Home

</span>


<br/>

With Elegance

</h1>









<p

className="
body-text
mt-8
max-w-xl
text-base
md:text-lg
leading-relaxed
"

>

Discover exceptional residences crafted with
timeless architecture, modern technology and
premium lifestyle experiences.

</p>








<div

className="
flex
flex-col
sm:flex-row
gap-4
mt-8
"

>


<Link

href="/properties"

className="
premium-button
px-10
py-4
inline-block
"

>

Explore Properties

</Link>






<Link

href="/contact"

className="
glass
border
border-white/20
rounded-full
px-10
py-4
text-white
hover:bg-white
hover:text-black
transition
"

>

Contact Us

</Link>



</div>









{/* Stats */}


<div

className="
grid
grid-cols-1
sm:grid-cols-3
gap-5
mt-16
max-w-xl
"

>


{

[

["10K+","Properties"],

["5K+","Clients"],

["50+","Locations"]

]


.map((item)=>(


<div

key={item[1]}

className="
glass
rounded-3xl
p-5
text-center
border
border-white/10
hover-card
"

>


<h3

className="
text-3xl
md:text-4xl
font-semibold
text-white
"

>

{item[0]}

</h3>



<p

className="
text-gray-400
text-sm
mt-2
"

>

{item[1]}

</p>



</div>


))


}



</div>







</div>





</div>







</section>


)

}