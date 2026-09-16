export default function SearchBox(){


return (

<section

className="
relative
z-20
mt-16
px-6
"

>


<div

className="
max-w-6xl
mx-auto
glass
rounded-3xl
p-8
border
border-white/20
shadow-2xl
"

>


<div

className="
text-center
mb-8
"

>


<p

className="
text-gray-400
tracking-[5px]
text-sm
"

>

SEARCH PROPERTY

</p>




<h2

className="
luxury-heading
text-3xl
text-white
mt-3
"

>

Find Your Perfect Home

</h2>



</div>








<div

className="
grid
grid-cols-1
lg:grid-cols-5
gap-4
items-center
"
>






{/* Buy Rent */}

<div

className="
flex
w-full
bg-white/5
rounded-2xl
p-1
border
border-white/10
"

>


<button

className="
flex-1
bg-white
text-black
py-3
rounded-xl
font-semibold
"

>

Buy

</button>



<button

className="
flex-1
text-gray-300
py-3
rounded-xl
"

>

Rent

</button>


</div>









{/* Location */}



<div

className="
glass
rounded-2xl
px-4
py-4
md:px-5
border
border-white/10
hover:border-white/30
transition
"

>


<p

className="
text-gray-400
text-xs
"

>

Location

</p>


<p

className="
text-white
mt-2
"

>

Select Location

</p>



</div>









{/* Type */}



<div

className="
glass
rounded-2xl
px-5
py-4
border
border-white/10
hover:border-white/30
transition
"

>


<p

className="
text-gray-400
text-xs
"

>

Property Type

</p>



<p

className="
text-white
mt-2
"

>

All Types

</p>



</div>









{/* Price */}



<div

className="
glass
rounded-2xl
px-5
py-4
border
border-white/10
hover:border-white/30
transition
"

>


<p

className="
text-gray-400
text-xs
"

>

Price Range

</p>



<p

className="
text-white
mt-2
"

>

All Prices

</p>



</div>








{/* Search */}



<button

className="
premium-button
rounded-2xl
py-4
text-lg
w-full
"

>

Search

</button>







</div>






</div>



</section>


)

}