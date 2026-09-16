import "./globals.css";

import {
  Playfair_Display,
  Inter
} from "next/font/google";



const playfair = Playfair_Display({

  subsets:["latin"],

  variable:"--font-heading",

  display:"swap",

});



const inter = Inter({

  subsets:["latin"],

  variable:"--font-body",

  display:"swap",

});





export const metadata = {


title:

"RoyalNest | Luxury Real Estate",



description:

"Premium black and white luxury real estate platform"



};





export default function RootLayout({children}){


return (


<html lang="en">


<body

className={`
${playfair.variable}
${inter.variable}
`}

>


{children}


</body>


</html>


);


}