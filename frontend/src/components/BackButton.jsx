"use client";


import Link from "next/link";



export default function BackButton({to="/dashboard"}){


return (

<Link

href={to}

className="
inline-flex
items-center
gap-2
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

← Back to Dashboard

</Link>


)

}