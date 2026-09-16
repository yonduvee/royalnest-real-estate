"use client";


import Link from "next/link";

import {
Crown
} from "lucide-react";


import useHideOnScroll from "@/hooks/useHideOnScroll";





export default function AuthNavbar(){


const hideNavbar = useHideOnScroll();





return (

<nav

className={`

fixed
top-5
left-1/2
-translate-x-1/2
z-50
w-[90%]
max-w-7xl
glass
rounded-3xl
border
border-white/20
px-6
py-4


transition-all
duration-500


${

hideNavbar

?

"-translate-y-32 opacity-0"

:

"translate-y-0 opacity-100"

}


`}

>





<div

className="
relative
flex
items-center
justify-between
"

>







<div className="w-20"></div>








{/* Center Logo */}


<Link

href="/"

className="
absolute
left-1/2
-translate-x-1/2
"

>


<div

className="
flex
items-center
gap-3
text-white
"

>


<div

className="
w-10
h-10
rounded-xl
border
border-white/30
flex
items-center
justify-center
"

>

<Crown size={22}/>

</div>






<h1

className="
luxury-heading
text-2xl
"

>

RoyalNest

</h1>




</div>


</Link>








{/* Right */}

<div

className="
flex
items-center
gap-3
"

>


<Link

href="/login"

className="
hidden
sm:block
text-gray-300
hover:text-white
"

>

Login

</Link>





<Link

href="/signup"

className="
premium-button
px-5
py-2
text-sm
"

>

Sign Up

</Link>




</div>






</div>


</nav>


)

}