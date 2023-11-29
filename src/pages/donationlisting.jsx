import { NavLink } from "react-router-dom";

const DonationListing = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-semibold w-full text-center p-2 py-4">Donation Campaigns</h2>
            {/* Date Descending order */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-3">
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <img src="/cat1.jpg" className="object-cover" alt="" />
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <NavLink to="/donationdetail/82" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                </div>
            </div>
        </div>
    );
}

export default DonationListing;