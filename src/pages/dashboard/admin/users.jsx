import { useEffect, useState } from "react";
import { useAxiosSecure, useUserData } from "../../../auth/Auth";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setusers] = useState([])
    const { loggedIn, userdata } = useUserData()
    const toastinfo = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    }
    useEffect(() => {
        axiosSecure.get("/users").then(res => { setusers(res.data) }).catch(err => console.log(err))
    }, [])
    const handlemakeadmin = (id) => {
        axiosSecure.get(`/makeadmin/${id}`).then(res => {
            if (res.data.code) {
                toast.error(<div className='p-4 py-5'>{res.data.message}</div>, toastinfo)
            } else {
                toast.success(<div className='p-4 py-5'>Made Admin</div>, toastinfo)
            }
        }).catch(err => console.log(err))
    }
    const handleremoveadmin = (id) => {
        axiosSecure.get(`/removeadmin/${id}`).then(res => {
            if (res.data.code) {
                toast.error(<div className='p-4 py-5'>{res.data.message}</div>, toastinfo)
            } else {
                toast.success(<div className='p-4 py-5'>Removed Admin</div>, toastinfo)
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            Users
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-500 flex justify-between rounded-md p-2 gap-2 w-full">
                    <h4 className="flex-[0.3]">NAME</h4>
                    <h4 className="flex-1">EMAIL</h4>
                    <h4 className="flex-[0.3]">ROLE</h4>
                    <h4 className=" px-4 rounded-md text-center">TRANSFORM</h4>
                </div>
                {
                    users.map((i, index) => {
                        return <div key={index} className="bg-slate-700 flex justify-between rounded-md p-2 gap-2 w-full">
                            <h4 className="flex-[0.3]">{i.name}</h4>
                            <h4 className="flex-1">{i.email}</h4>
                            <h4 className="flex-[0.3]">{i.role || 'user'}</h4>
                            {
                                i.role === "owner" || i.email === userdata.email ? <button className=" px-4 py-2 min-w-32 w-32 transition-all rounded-md text-center"> </button> :
                                    i.role === "admin" ?
                                        <button onClick={() => { handleremoveadmin(i._id) }} className=" px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-md text-center">remove admin</button> :
                                        <button onClick={() => { handlemakeadmin(i._id) }} className=" px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-md text-center">make admin</button>
                            }
                        </div>
                    })
                }
            </div>
            <ToastContainer />
        </div>
    );
}

export default Users;