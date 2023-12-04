import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../auth/Auth";
import { NavLink } from "react-router-dom";

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setusers] = useState([])
    useEffect(() => {
        axiosSecure.get("/users").then(res => {setusers(res.data)}).catch(err => console.log(err))
    }, [])
    return (
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            Users
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-500 flex justify-between rounded-md p-2 gap-2 w-full">
                    <h4 className="flex-[0.3]">NAME</h4>
                    <h4 className="flex-1">EMAIL</h4>
                    <h4 className="flex-[0.3]">ROLE</h4>
                    <h4 className=" px-4 rounded-md text-center">DELETE</h4>
                </div>
                {
                    users.map((i, index) => {
                        return <div key={index} className="bg-slate-700 flex justify-between rounded-md p-2 gap-2 w-full">
                            <h4 className="flex-[0.3]">{i.name}</h4>
                            <h4 className="flex-1">{i.email}</h4>
                            <h4 className="flex-[0.3]">{i.role || 'user'}</h4>
                            <button className=" px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-md text-center">delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Users;