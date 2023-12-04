import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../auth/Auth";
import { NavLink } from "react-router-dom";

const AllPets = () => {
    const axiosSecure = useAxiosSecure()
    const [mypets, setmypets] = useState([])
    useEffect(() => {
        axiosSecure.get("/pets").then(res => {console.log(res.data);setmypets(res.data)}).catch(err => console.log(err))
    }, [])
    return (
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            All Pets
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-500 flex justify-between rounded-md p-2 gap-2 w-full">
                    <h4 className="flex-1">NAME</h4>
                    <h4 className="flex-1">CATEGORY</h4>
                    <h4 className=" px-4 rounded-md text-center">UPDATE</h4>
                    <h4 className=" px-4 rounded-md text-center">DELETE</h4>
                </div>
                {
                    mypets.map((i, index) => {
                        return <div key={index} className="bg-slate-700 flex justify-between rounded-md p-2 gap-2 w-full">
                            <h4 className="flex-1">{i.name}</h4>
                            <h4 className="flex-1">{i.category}</h4>
                            <NavLink to={`/dashboard/updatepet/${i._id}`} className=" px-4 py-2 bg-orange-400 hover:bg-orange-600 transition-all rounded-md text-center">update</NavLink>
                            <button className=" px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-md text-center">delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default AllPets;