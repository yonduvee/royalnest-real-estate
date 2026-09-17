"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
Crown,
UserCircle
} from "lucide-react";


import useHideOnScroll from "@/hooks/useHideOnScroll";





export default function DashboardHeader(){


const router = useRouter();


const [user,setUser]=useState(null);


const hideHeader = useHideOnScroll();







useEffect(()=>{


const savedUser =
localStorage.getItem("user");


if(savedUser){

setUser(JSON.parse(savedUser));

}


},[]);















return (

<header

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
shadow-2xl


transition-all
duration-500


${

hideHeader

?

"-translate-y-32 opacity-0"

:

"translate-y-0 opacity-100"

}


`}

>


<div

className="
flex
items-center
justify-between
"

>







{/* Logo */}


<Link

href="/"

className="
flex
items-center
gap-3
"

>


<div

className="
w-11
h-11
rounded-2xl
border
border-white/30
flex
items-center
justify-center
text-white
"

>

<Crown size={22}/>

</div>






<div>


<h1

className="
luxury-heading
text-2xl
text-white
"

>

RoyalNest

</h1>



<p

className="
text-gray-400
text-xs
tracking-widest
"

>

LUXURY ESTATE

</p>



</div>



</Link>









{/* Right Side */}


<div

className="
flex
items-center
gap-4
"

>






<div

className="
hidden
sm:flex
items-center
gap-3
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

<UserCircle size={22}/>

</div>






<div>


<p className="text-white text-sm">

{user?.name || "User"}

</p>


<p className="text-gray-400 text-xs">

{

user?.role==="admin"

?

"Administrator"

:

"Member"

}

</p>


</div>



</div>









<Link

href="/"

className="
hidden
md:flex
items-center
gap-2
text-gray-300
hover:text-white
"

>





</Link>














</div>






</div>


</header>


)

}