"use client";


import Link from "next/link";


export default function BackButton(){


return (

<Link

href="/"

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

← Back to Home

</Link>

)


}