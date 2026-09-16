"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import API_URL from "@/lib/api";
import AuthNavbar from "@/components/AuthNavbar";



export default function LoginPage(){


const router=useRouter();



const [form,setForm]=useState({

email:"",
password:""

});


const [message,setMessage]=useState("");






const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const handleSubmit=async(e)=>{


e.preventDefault();



const res=await fetch(

`${API_URL}/auth/login`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(form)

}

);



const data=await res.json();





if(res.ok){


localStorage.setItem(
"token",
data.token
);



localStorage.setItem(

"user",

JSON.stringify(data.user)

);





if(data.user.role==="admin"){

router.push("/admin");

}

else{

router.push("/dashboard");

}



}

else{


setMessage(data.message);


}



};







return (

<main

className="
min-h-screen
flex
items-center
justify-center
px-6
relative
overflow-hidden
"

>


<AuthNavbar />





<div

className="
absolute
w-72
h-72
rounded-full
border
border-white/10
top-20
right-10
animate-pulse
hidden
md:block
"

></div>







<div

className="
max-w-6xl
w-full
grid
md:grid-cols-2
gap-12
items-center
pt-24
"

>






<div

className="
glass
rounded-3xl
p-8
md:p-10
border
border-white/20
"

>


<h1

className="
luxury-heading
text-4xl
md:text-5xl
text-white
"

>

Welcome Back

</h1>





<p className="
text-gray-400
mt-3
mb-8
">

Login to your RoyalNest account

</p>






<input

name="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

className="
input-style
mb-5
"

/>






<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

className="
input-style
mb-6
"

/>







<button

onClick={handleSubmit}

className="
premium-button
w-full
py-4
"

>

Login

</button>






{

message &&

<p className="text-gray-300 text-center mt-5">

{message}

</p>

}



</div>








<div

className="
hidden
md:flex
justify-center
"

>


<div

className="
glass
rounded-3xl
p-10
w-80
border
border-white/20
animate-pulse
"

>


<h2

className="
luxury-heading
text-4xl
text-white
"

>

Luxury Living

</h2>



<p className="
text-gray-400
mt-5
"

>

Discover premium homes with RoyalNest.

</p>



</div>



</div>







</div>


</main>


)

}