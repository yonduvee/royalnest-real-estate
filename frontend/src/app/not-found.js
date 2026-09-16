import Link from "next/link";


export default function NotFound(){


return (

<main

className="
min-h-screen
flex
items-center
justify-center
px-6
bg-[#050b18]
"

>


<div

className="
glass
rounded-3xl
p-10
text-center
max-w-lg
"

>



<div

className="
text-7xl
font-bold
gold-text
"

>

404

</div>





<h1

className="
text-3xl
text-white
font-semibold
mt-6
"

>

Page Not Found

</h1>





<p

className="
text-gray-400
mt-4
"

>

Sorry, the page you are looking for
does not exist.

</p>







<Link href="/">


<button

className="
gold-button
px-8
py-3
mt-8
"

>

Back Home

</button>


</Link>





</div>


</main>


)

}