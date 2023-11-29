import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isadmin = true;
    return (
        <div className="flex w-full gap-4 flex-col md:flex-row">
            <div className="flex gap-4 flex-wrap md:flex-col xl:w-1/4 md:w-1/3">
                <NavLink to="/dashboard/addpet" className="p-4 hover:bg-slate-600">Add a pet</NavLink>
                <NavLink className="p-4 hover:bg-slate-600">My Added Pets</NavLink>
                <NavLink className="p-4 hover:bg-slate-600">Create Donation Campaign</NavLink>
                <NavLink className="p-4 hover:bg-slate-600">My donation campaigns</NavLink>
                <NavLink className="p-4 hover:bg-slate-600">My Donations</NavLink>
                <NavLink className="p-4 hover:bg-slate-600">Adoption request</NavLink>
                {isadmin && <>
                    <NavLink className="p-4 hover:bg-slate-600">Users</NavLink>
                    <NavLink className="p-4 hover:bg-slate-600">All Pets</NavLink>
                    <NavLink className="p-4 hover:bg-slate-600">All Donations</NavLink>
                </>
                }
            </div>
            <div className="w-full h-[85dvh] bg-slate-800 overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;