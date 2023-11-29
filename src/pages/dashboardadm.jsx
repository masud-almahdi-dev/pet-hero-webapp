const DashboardAdmin = () => {
    return (
        <div className="flex w-full gap-4 flex-col md:flex-row">
            <div className="flex gap-4 flex-wrap md:flex-col xl:w-1/4 md:w-1/3">
                <NavLink>Add a pet</NavLink>
                <NavLink>My Added Pets</NavLink>
                <NavLink>Create Donation Campaign</NavLink>
                <NavLink>My donation campaigns</NavLink>
                <NavLink>My Donations</NavLink>
                <NavLink>Adoption request</NavLink>
                <NavLink>Users</NavLink>
                <NavLink>All Pets</NavLink>
                <NavLink>All Donations</NavLink>
            </div>
            <div className="w-full h-[85dvh] bg-slate-800 overflow-y-scroll">
            </div>
        </div>
    );
}

export default DashboardAdmin;