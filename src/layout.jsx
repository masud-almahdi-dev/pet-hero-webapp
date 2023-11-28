import { Outlet } from "react-router-dom";
import Navbar from "./cpt/navbar";

const Layout = () => {

    return (
        <div className="bg-slate-700 text-white w-full">
            <Navbar/>
            <Outlet />
        </div>
    );
}

export default Layout;