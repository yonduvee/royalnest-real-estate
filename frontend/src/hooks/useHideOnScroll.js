"use client";


import { useEffect, useState } from "react";


export default function useHideOnScroll(){


const [hide,setHide]=useState(false);



useEffect(()=>{


let lastScroll=0;



const handleScroll=()=>{


const currentScroll=window.scrollY;



if(currentScroll > lastScroll && currentScroll > 120){

setHide(true);

}

else{

setHide(false);

}



lastScroll=currentScroll;



};





window.addEventListener(
"scroll",
handleScroll
);



return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





return hide;


}