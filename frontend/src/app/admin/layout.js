import DashboardHeader from "@/components/DashboardHeader";


export default function AdminLayout({children}){


return (

<>

<DashboardHeader />


{children}


</>

);


}