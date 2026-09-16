"use client";


import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


import {
Home,
Building2,
Plus,
CalendarDays,
Users,
Settings,
LogOut,
Crown,
Menu,
X
} from "lucide-react";





export default function AdminSidebar(){


const pathname = usePathname();

const router = useRouter();


const [open,setOpen]=useState(false);







const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


router.push("/login");


};









const menu=[


{
name:"Home",
icon:<Home size={20}/>,
link:"/"
},


{
name:"Properties",
icon:<Building2 size={20}/>,
link:"/admin/properties"
},


{
name:"Add Property",
icon:<Plus size={20}/>,
link:"/admin/add-property"
},


{
name:"Bookings",
icon:<CalendarDays size={20}/>,
link:"/admin/bookings"
},


{
name:"Users",
icon:<Users size={20}/>,
link:"/admin/users"
},


{
name:"Settings",
icon:<Settings size={20}/>,
link:"/admin/settings"
}


];









const SidebarContent=()=>{


return (

<div

className="
bg-black/95
rounded-3xl
p-6
border
border-white/20
h-full
shadow-2xl
"

>


<div

className="
mb-8
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
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
text-white
text-2xl
luxury-heading
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

ADMIN PANEL

</p>



</div>


</div>









<nav

className="
space-y-3
"

>


{

menu.map(item=>(


<Link

key={item.name}

href={item.link}

onClick={()=>setOpen(false)}

className={`

flex
items-center
gap-4
px-5
py-3
rounded-2xl
transition-all
duration-300


${

pathname===item.link

?

"bg-white text-black shadow-[0_0_25px_rgba(255,255,255,.25)]"

:

"text-gray-300 hover:bg-white/10 hover:text-white"

}

`}

>


{item.icon}


<span>

{item.name}

</span>


</Link>


))


}



</nav>









<button

onClick={logout}

className="
w-full
mt-8
flex
justify-center
items-center
gap-2
py-3
rounded-2xl
border
border-red-400
text-red-400
hover:bg-red-400
hover:text-black
transition
"

>


<LogOut size={18}/>

Logout


</button>







</div>


)


}









return (

<>







{/* Mobile Button */}


<button

onClick={()=>setOpen(true)}

className="
lg:hidden
mb-5
relative
z-40
text-white
flex
items-center
gap-2
border
border-white/20
rounded-full
px-5
py-2
"

>


<Menu size={20}/>

Menu


</button>









{/* Desktop Sidebar */}


<div

className="
hidden
lg:block
"

>


<SidebarContent/>


</div>









{/* Mobile Drawer */}



{

open &&


<div

className="
fixed
inset-0
z-[100]
bg-black/80
lg:hidden
"

onClick={()=>setOpen(false)}

>





<div

className="
w-[85%]
max-w-sm
h-full
pt-24
p-5
animate-slide
"

onClick={(e)=>e.stopPropagation()}

>






<div

className="
flex
justify-end
mb-3
"

>


<button

onClick={()=>setOpen(false)}

className="
text-white
"

>


<X size={28}/>


</button>


</div>








<SidebarContent/>






</div>





</div>


}






</>

)


}