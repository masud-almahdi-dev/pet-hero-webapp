import { NavLink } from "react-router-dom";
import { useAxiosSecure } from "../auth/Auth";
import { useEffect, useState } from "react";

const DonationListing = () => {
    const axiosSecure = useAxiosSecure()
    const [campaigns,setcampaigns] = useState([])
    useEffect(()=>{
        axiosSecure.get('/donations').then(res=>setcampaigns(res.data.slice().reverse())).catch(err=>console.log(err))
    },[])
    useEffect(()=>{
    },[campaigns])
    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="text-2xl mt-2 mb-6">Donation Campaigns</h2>
            </div>
            {/* Date Descending order */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 xl:grid-cols-3">
                {
                    campaigns.map((i,index)=>{
                        return <div key={index} className="flex flex-col rounded-lg overflow-hidden bg-slate-500 justify-between h-full">
                                <img src={i.image || "https://i.ibb.co/Rhgbz8B/8f7e9477-4be6-45ae-aa3d-ae4303f8104d.jpg"} className="object-cover aspect-video" alt="" />
                                <h3 className="text-xl text-orange-300 px-4 py-2">{i.name}</h3>
                                <h4 className="text-xs px-4 py-2 font-semibold">Max: {i.max}</h4>
                                <h4 className="text-xs px-4 py-2 italic font-semibold">Donated Amount: {i.amount}</h4>
                                <h4 className="text-sm px-4 py-2 italic">Submitted: {i.submitDate}</h4>
                                <NavLink to={`/donationdetail/${i._id}`} className="bg-slate-400 px-4 py-2 text-center hover:bg-slate-500 hover:text-orange-300 transition-all">View Details</NavLink>
                            </div>
                    })
                }
            </div>
        </div>
    );
}

export default DonationListing;