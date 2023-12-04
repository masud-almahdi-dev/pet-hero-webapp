import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useUserData } from "../auth/Auth";

const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false)
    const { loggedIn, userdata } = useUserData()
    const [useropen, setuseropen] = useState(false)
    const { logOut } = useAuth()
    const handleuserbutton = () => {
        setuseropen(!useropen)
    }
    return (
        <div className="w-full bg-slate-700 h-24 lg:h-min flex sticky top-0 p-4 text-center justify-between box-border lg:items-center items-start flex-wrap z-20">
            <div className="flex lg:flex-[1] flex-col bg-slate-800 rounded-lg p-2">
                <div className="items-center gap-4 lg:flex hidden">
                    <img src="/logo.svg" alt="" className="rounded-lg w-20" />
                    <h2 className="text-lg">PET HERO</h2>
                </div>
                <button className=" border-4 p-2 lg:hidden border-white bg-black rounded-lg" onClick={() => { setmenuopen(!menuopen) }}>{menuopen ? "close" : "="}</button>
                {menuopen &&
                    <div className="lg:hidden flex flex-col w-min">
                        <NavLink to="/" className="navlinks-dropdown">Home</NavLink>
                        <NavLink to="/pets" className="navlinks-dropdown">Pet Listing</NavLink>
                        <NavLink to="/donations" className="navlinks-dropdown">Donation campaigns</NavLink>
                        <NavLink to="/dashboard" className="navlinks-dropdown">Dashboard</NavLink></div>
                }
            </div>
            <div className="justify-center items-center xl:flex-[3] lg:flex-[2] hidden lg:flex flex-wrap">
                <button className="bg-white rounded-lg h-full hover:scale-75 transition-all"><img src="/DM.png" className="w-10 object-cover" alt="" /></button>
                <NavLink to="/" className="navlinks">Home</NavLink>
                <NavLink to="/pets" className="navlinks">Pet Listing</NavLink>
                <NavLink to="/donations" className="navlinks">Donation campaigns</NavLink>
                <NavLink to="/dashboard" className="navlinks">Dashboard</NavLink>
            </div>
            <div className={`flex lg:flex-[1] px-4 py-4 justify-end bg-slate-700 rounded-lg items-center cursor-pointer ${loggedIn && "hover:brightness-110"}`} onClick={handleuserbutton}>
                <div className="flex flex-col text-end justify-center pr-2">
                    <h2 className="text-lg">{userdata.name}</h2>
                    <h4 className="text-sm">{userdata.email}</h4>
                </div>
                {loggedIn && <><img src={loggedIn && userdata?.image ? userdata.image : "/logo.svg"} alt="" className="rounded-lg w-20 h-20 flex" />
                    <div className="flex flex-col">
                        {useropen && <NavLink to="/dashboard" className="px-4 py-2 m-2 bg-slate-500 rounded-md text-green-400 hover:bg-slate-600">Dashboard</NavLink>}
                        {useropen && <button className="px-4 py-2 m-2 bg-green-700 text-white rounded-md hover:saturate-50" onClick={logOut}>Sign Out</button>}
                    </div>
                </>
                }
                {loggedIn ||
                    <div className="flex">
                        <NavLink to="/login" className="px-4 py-2 m-2 bg-slate-100 rounded-md text-blue-600 hover:bg-slate-300">Log In</NavLink>
                        <NavLink to="/signup" className="px-4 py-2 m-2 bg-green-700 text-white rounded-md hover:saturate-50">Sign Up</NavLink>
                    </div>
                }

            </div>
        </div>
    );
}

export default Navbar;