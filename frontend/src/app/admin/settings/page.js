"use client";


import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";



export default function AdminSettings(){


const router=useRouter();

const [user,setUser]=useState(null);





useEffect(()=>{


const data=localStorage.getItem("user");


if(data){

setUser(JSON.parse(data));

}


},[]);







const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


router.push("/login");


};







return (

<main

className="
min-h-screen
pt-32
px-6
pb-20
"

>


<div

className="
max-w-4xl
mx-auto
"

>



<BackButton />





<h1

className="
luxury-heading
text-5xl
text-white
mb-10
"

>

Admin Settings

</h1>







<div

className="
glass
rounded-3xl
p-8
border
border-white/20
"

>



<h2 className="text-white text-2xl mb-6">

Profile

</h2>


<p className="text-gray-300">

Name: {user?.name}

</p>


<p className="text-gray-300 mt-3">

Email: {user?.email}

</p>





<hr className="border-white/10 my-8"/>





<h2 className="text-white text-2xl mb-5">

Security

</h2>



<button

className="
premium-button
px-8
py-3
"

>

Change Password

</button>







<button

onClick={logout}

className="
block
mt-8
border
border-red-400
text-red-400
rounded-full
px-8
py-3
"

>

Logout

</button>



</div>







</div>


</main>


)

}