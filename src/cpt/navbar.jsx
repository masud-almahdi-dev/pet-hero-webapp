import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuopen,setmenuopen] = useState(false)
    return ( 
        <div className="w-full bg-slate-700 h-24 lg:h-min flex sticky top-0 p-4 text-center justify-between box-border lg:items-center items-start flex-wrap z-20">
            <div className="flex lg:flex-[1] flex-col bg-slate-800 rounded-lg p-2">
                <div className="items-center gap-4 lg:flex hidden">
                <img src="/logo.svg" alt="" className="rounded-lg w-20" />
                <h2 className="text-lg">PET HERO</h2>
                </div>
                <button className=" border-4 p-2 lg:hidden border-white bg-black rounded-lg" onClick={()=>{setmenuopen(!menuopen)}}>{menuopen? "close":"="}</button>
                { menuopen &&
                <div className="lg:hidden flex flex-col w-min">
                <NavLink to="/" className="navlinks-dropdown">Home</NavLink>
                <NavLink to="/pets" className="navlinks-dropdown">Pet Listing</NavLink>
                <NavLink to="/donations" className="navlinks-dropdown">Donation campaigns</NavLink>
                <NavLink to="/dashboarduser" className="navlinks-dropdown">Dashboard</NavLink></div>
                }
            </div>
            <div className="justify-center items-center xl:flex-[3] lg:flex-[2] hidden lg:flex flex-wrap">
                <button className="bg-white rounded-lg h-full hover:scale-75 transition-all"><img src="/DM.png" className="w-10 object-cover" alt="" /></button>
                <NavLink to="/" className="navlinks">Home</NavLink>
                <NavLink to="/pets" className="navlinks">Pet Listing</NavLink>
                <NavLink to="/donations" className="navlinks">Donation campaigns</NavLink>
                <NavLink to="/dashboarduser" className="navlinks">Dashboard</NavLink>
            </div>
            <div className="flex lg:flex-[1] px-4 justify-end bg-slate-700 rounded-lg">
                <div className="flex flex-col text-end justify-center pr-2">
                <h2 className="text-lg">User Name</h2>
                <h4 className="text-sm">useremail@email.com</h4>
                </div>
                <img src="/logo.svg" alt="" className="rounded-lg w-20 flex" />
            </div>
        </div>
     );
}
 
export default Navbar;