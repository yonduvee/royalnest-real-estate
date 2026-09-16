"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useHideOnScroll from "@/hooks/useHideOnScroll";



export default function Navbar(){


const router = useRouter();


const [user,setUser] = useState(null);

const [menuOpen,setMenuOpen] = useState(false);

const [scrolled,setScrolled] = useState(false);



const hideNavbar = useHideOnScroll();






useEffect(()=>{


const savedUser = localStorage.getItem("user");


if(savedUser){

setUser(JSON.parse(savedUser));

}






const scrollHandler=()=>{


setScrolled(window.scrollY > 50);


};




window.addEventListener(

"scroll",

scrollHandler

);





return ()=>{


window.removeEventListener(

"scroll",

scrollHandler

);


};



},[]);









const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


setUser(null);


router.push("/");


};








const links=[


{
name:"Home",
link:"/"
},


{
name:"Properties",
link:"/properties"
},


{
name:"About",
link:"/about"
},


{
name:"Contact",
link:"/contact"
}


];









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
rounded-3xl
border
border-white/20
backdrop-blur-xl

transition-all
duration-500


${
hideNavbar

?

"-translate-y-32 opacity-0"

:

"translate-y-0 opacity-100"

}



${

scrolled

?

"bg-black/90"

:

"bg-black/60"

}


`}

>







<div

className="
flex
items-center
justify-between
px-6
py-4
"

>





<Link href="/">

<h1

className="
text-3xl
text-white
luxury-heading
"

>

RoyalNest

</h1>

</Link>









{/* Desktop Menu */}


<div

className="
hidden
md:flex
items-center
gap-8
"

>


{

links.map(item=>(


<Link

key={item.name}

href={item.link}

className="
text-gray-300
hover:text-white
transition
"

>

{item.name}

</Link>


))


}








{

user ?


<>


<Link

href={

user.role==="admin"

?

"/admin"

:

"/dashboard"

}

className="
text-white
"

>

{

user.role==="admin"

?

"Admin Panel"

:

"Dashboard"

}

</Link>







<button

onClick={logout}

className="
border
border-red-400
text-red-400
rounded-full
px-5
py-2
hover:bg-red-400
hover:text-black
transition
"

>

Logout

</button>


</>



:


<>


<Link

href="/login"

className="
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
"

>

Sign Up

</Link>


</>


}





</div>









{/* Mobile Menu Button */}


<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
md:hidden
text-white
text-3xl
"

>

{

menuOpen

?

"×"

:

"☰"

}


</button>





</div>









{/* Mobile Menu */}



{

menuOpen &&


<div

className="
md:hidden
px-6
pb-6
"

>


<div

className="
glass
rounded-3xl
p-6
space-y-5
border
border-white/20
"

>


{

links.map(item=>(


<Link

key={item.name}

href={item.link}

onClick={()=>setMenuOpen(false)}

className="
block
text-gray-300
hover:text-white
"

>

{item.name}

</Link>


))


}







{

user ?


<>


<Link

href={

user.role==="admin"

?

"/admin"

:

"/dashboard"

}

className="
block
text-white
"

>

{

user.role==="admin"

?

"Admin Panel"

:

"Dashboard"

}

</Link>






<button

onClick={logout}

className="
w-full
border
border-red-400
text-red-400
rounded-full
py-3
"

>

Logout

</button>



</>



:


<>

<Link

href="/login"

className="block"

>

Login

</Link>



<Link

href="/signup"

className="block"

>

Sign Up

</Link>


</>


}



</div>


</div>


}



</nav>


)

}