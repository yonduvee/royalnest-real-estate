"use client";


import { useEffect, useState } from "react";
import API_URL from "@/lib/api";
import BackButton from "@/components/BackButton";


export default function ProfilePage(){


const [profile,setProfile]=useState({

name:"",
email:"",
phone:""

});


const [message,setMessage]=useState("");






useEffect(()=>{


const token =
localStorage.getItem("token");



fetch(

`${API_URL}/users/profile`,

{

headers:{

Authorization:

`Bearer ${token}`

}

}

)

.then(res=>res.json())

.then(data=>{


setProfile(data);


});



},[]);







const handleChange=(e)=>{


setProfile({

...profile,

[e.target.name]:e.target.value

});


};






const updateProfile=async()=>{


const token =
localStorage.getItem("token");



const res = await fetch(

`${API_URL}/users/profile`,

{

method:"PUT",

headers:{

"Content-Type":"application/json",

Authorization:

`Bearer ${token}`

},

body:JSON.stringify({

name:profile.name,

phone:profile.phone

})


}

);



const data = await res.json();


setMessage(data.message);



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

My Profile

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


<input

name="name"

value={profile.name || ""}

onChange={handleChange}

className="
input-style
mb-5
"

/>





<input

value={profile.email || ""}

readOnly

className="
input-style
mb-5
opacity-60
"

/>





<input

name="phone"

value={profile.phone || ""}

onChange={handleChange}

className="
input-style
mb-6
"

/>







<button

onClick={updateProfile}

className="
premium-button
px-8
py-3
"

>

Save Profile

</button>







{

message &&

<p className="text-gray-300 mt-5">

{message}

</p>


}



</div>






</div>


</main>


)

}