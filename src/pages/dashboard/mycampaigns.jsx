import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../auth/Auth";
import { NavLink } from "react-router-dom";

const MyCampaigns = () => {
    const axiosSecure = useAxiosSecure()
    const [mypets, setmypets] = useState([])
    useEffect(() => {
        axiosSecure.get("/mycampaigns").then(res => setmypets(res.data)).catch(err => console.log(err))
    }, [])
    const handledelete = (id)=>{
        axiosSecure.get(`/deletedonation/${id}`).then(
            res=>{
                console.log(res.data)
            }
        ).catch(err=>console.log(err))
    }
    return (
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            My Added Pets
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-500 flex justify-between rounded-md p-2 gap-2 w-full">
                    <h4 className="flex-1">NAME</h4>
                    <h4 className=" px-4 rounded-md text-center">VIEW</h4>
                    <h4 className=" px-4 rounded-md text-center">UPDATE</h4>
                    <h4 className=" px-4 rounded-md text-center">DELETE</h4>
                </div>
                {
                    mypets.map((i, index) => {
                        return <div key={index} className="bg-slate-700 flex justify-between rounded-md p-2 gap-2 w-full">
                            <h4 className="flex-1">{i.name}</h4>
                            <NavLink to={`/donationdetail/${i._id}`} className=" px-4 py-2 bg-slate-400 hover:bg-slate-600 transition-all rounded-md text-center">view</NavLink>
                            <NavLink to={`/dashboard/updatedonation/${i._id}`} className=" px-4 py-2 bg-orange-400 hover:bg-orange-600 transition-all rounded-md text-center">update</NavLink>
                            <button onClick={()=>{handledelete(i._id)}} className=" px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-md text-center">delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default MyCampaigns;