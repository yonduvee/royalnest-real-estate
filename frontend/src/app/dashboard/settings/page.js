"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";


export default function SettingsPage(){


const router = useRouter();



const [form,setForm]=useState({

oldPassword:"",
newPassword:""

});


const [message,setMessage]=useState("");






const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const changePassword=async()=>{


const token =
localStorage.getItem("token");



const res = await fetch(

`${API_URL}/users/password`,

{

method:"PUT",

headers:{

"Content-Type":"application/json",

Authorization:

`Bearer ${token}`

},


body:JSON.stringify(form)


}

);




const data = await res.json();



setMessage(data.message);



};








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
max-w-3xl
mx-auto
"

>

<BackButton
  href="/dashboard"
  text="← Back to Dashboard"
/>

<h1

className="
luxury-heading
text-5xl
text-white
mb-10
"

>

Account Settings

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




<h2

className="
text-2xl
text-white
mb-6
"

>

Change Password

</h2>








<input

name="oldPassword"

type="password"

placeholder="Current Password"

onChange={handleChange}

className="
input-style
mb-5
"

/>








<input

name="newPassword"

type="password"

placeholder="New Password"

onChange={handleChange}

className="
input-style
mb-6
"

/>








<button

onClick={changePassword}

className="
premium-button
px-8
py-3
"

>

Update Password

</button>








{

message &&

<p

className="
text-gray-300
mt-5
"

>

{message}

</p>


}







<hr className="
border-white/10
my-8
"/>







<button

onClick={logout}

className="
border
border-red-400
text-red-400
rounded-full
px-8
py-3
hover:bg-red-400
hover:text-black
transition
"

>

Logout

</button>







</div>






</div>


</main>


)

}