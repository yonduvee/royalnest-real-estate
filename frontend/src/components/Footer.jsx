import Link from "next/link";



export default function Footer(){


return (

<footer

className="
border-t
border-white/10
mt-24
py-16
px-6
"

>


<div

className="
max-w-7xl
mx-auto
grid
md:grid-cols-4
gap-10
"

>







{/* Brand */}


<div>


<h2

className="
luxury-heading
text-4xl
text-white
"

>

RoyalNest

</h2>





<p

className="
text-gray-400
mt-5
leading-relaxed
"

>

A premium real estate platform
connecting you with exceptional
luxury residences worldwide.

</p>





<div

className="
flex
gap-4
mt-6
"

>


<div

className="
w-10
h-10
rounded-full
border
border-white/20
flex
items-center
justify-center
text-white
"

>

f

</div>




<div

className="
w-10
h-10
rounded-full
border
border-white/20
flex
items-center
justify-center
text-white
"

>

𝕏

</div>




<div

className="
w-10
h-10
rounded-full
border
border-white/20
flex
items-center
justify-center
text-white
"

>

in

</div>



</div>



</div>









{/* Explore */}


<div>


<h3

className="
text-white
text-xl
mb-6
"

>

Explore

</h3>




<Link

href="/"

className="
block
text-gray-400
mb-3
hover:text-white
transition
"

>

Home

</Link>





<Link

href="/properties"

className="
block
text-gray-400
mb-3
hover:text-white
transition
"

>

Properties

</Link>





<Link

href="/about"

className="
block
text-gray-400
mb-3
hover:text-white
transition
"

>

About

</Link>





<Link

href="/contact"

className="
block
text-gray-400
hover:text-white
transition
"

>

Contact

</Link>



</div>









{/* Services */}


<div>


<h3

className="
text-white
text-xl
mb-6
"

>

Services

</h3>




<p className="
text-gray-400
mb-3
">

Buy Property

</p>



<p className="
text-gray-400
mb-3
">

Rental Property

</p>



<p className="
text-gray-400
">

Property Management

</p>



</div>









{/* Contact */}


<div>


<h3

className="
text-white
text-xl
mb-6
"

>

Contact

</h3>




<p

className="
text-gray-400
"

>

📍 New York, USA

</p>




<p

className="
text-gray-400
mt-4
"

>

✉ support@royalnest.com

</p>




<p

className="
text-gray-400
mt-4
"

>

☎ +1 234 567 890

</p>



</div>







</div>









<div

className="
border-t
border-white/10
mt-12
pt-6
text-center
text-gray-500
"

>

© 2026 RoyalNest. All rights reserved.

</div>






</footer>


)

}