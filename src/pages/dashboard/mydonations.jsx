import { useEffect } from "react";
import { useAxiosSecure } from "../../auth/Auth";

const MyDonations = () => {
    const axiosSecure = useAxiosSecure()
    // useEffect(()=>{
    //     axiosSecure.get("/mydonations").then(res=>console.log(res.data)).catch(err=>console.log(err.data))
    // },[])
    return ( 
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            My Donations
        </div>
     );
}
 
export default MyDonations;