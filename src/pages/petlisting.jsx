import { NavLink } from "react-router-dom";

const PetListing = () => {
    return (
        <div>
            <h2>Pet Listing</h2>
            {/* Dropdown menu for category */}
            {/* Date Descending order */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-3">
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Age</h4>
                    <h4 className="text-sm italic font-semibold">Location</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/petdetail/84" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
            </div>
        </div>
    );
}

export default PetListing;