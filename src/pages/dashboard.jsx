import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isadmin = true;
    return (
        <div className="flex w-full gap-4 flex-col md:flex-row">
            <div className="flex gap-4 flex-wrap md:flex-col xl:w-1/4 md:w-1/3">
                <NavLink to="/dashboard/" className="p-4 hover:bg-slate-600">Dashboard</NavLink>
                <NavLink to="/dashboard/addpet" className="p-4 hover:bg-slate-600">Add a pet</NavLink>
                <NavLink to="/dashboard/myaddedpets" className="p-4 hover:bg-slate-600">My Added Pets</NavLink>
                <NavLink to="/dashboard/createcampaign" className="p-4 hover:bg-slate-600">Create Donation Campaign</NavLink>
                <NavLink to="/dashboard/mycampaigns" className="p-4 hover:bg-slate-600">My donation campaigns</NavLink>
                <NavLink to="/dashboard/mydonations" className="p-4 hover:bg-slate-600">My Donations</NavLink>
                <NavLink to="/dashboard/adoptionrequests" className="p-4 hover:bg-slate-600">Adoption request</NavLink>
                {isadmin && <>
                    <NavLink to="/dashboard/admin/users" className="p-4 hover:bg-slate-600">Users</NavLink>
                    <NavLink to="/dashboard/admin/allpets" className="p-4 hover:bg-slate-600">All Pets</NavLink>
                    <NavLink to="/dashboard/admin/alldonations" className="p-4 hover:bg-slate-600">All Donations</NavLink>
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