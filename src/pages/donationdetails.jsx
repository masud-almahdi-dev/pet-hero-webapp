import { useEffect, useState } from "react"
import { useAxiosSecure } from "../auth/Auth"

const DonationDetails = () => {
    const axiosSecure = useAxiosSecure()
    const [donationdata, setdonationdata] = useState(null)
    useEffect(() => {
        const paramid = location.pathname.split('/')
        axiosSecure(`/campaign/${paramid.at(-1)}`).then(res => {
            if (res.data.code) {
                console.log(res.data.error)
            } else {
                setdonationdata(res.data)
            }
        }).catch(err => { })
    }, [location])
    if (donationdata) {
        return (
            <div>
                <div className="p-6 xl:w-2/3 mx-auto">
                    <h2 className="w-full text-center p-4 font-semibold">DONATION DETAILS</h2>
                    <img src={donationdata.image || "/cat1.jpg"} className="object-cover w-full md:w-1/2 mx-auto" alt="" />
                    <div className="p-4 flex flex-col gap-4">
                        <h3 className="text-xl">TITLE : {donationdata.name}</h3>
                        <h4 className="text-sm italic font-semibold">MAXMIUM : {donationdata.max}</h4>
                        <h4 className="text-xs italic">CURRENT AMOUNT : {donationdata.amount}</h4>
                        <h4 className="text-xs italic">DATE : {donationdata.submitDate}</h4>
                        <button className="mx-auto w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">DONATE NOW</button>
                        <h4 className="font-semibold">DETAILS : </h4>
                        <p className="my-6">{donationdata.description}</p>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>

            <div>
                <h2 className="w-full text-center p-4 font-semibold">DONATION DETAILS</h2>
                <img src="/cat1.jpg" className="object-cover w-full md:w-1/2 mx-auto" alt="" />
                <div className="p-4 flex flex-col gap-4">
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Maximum Donation Amount</h4>
                    <h4 className="text-sm italic font-semibold">Donated Amount</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <button className="mx-auto w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">DONATE NOW</button>
                </div>
            </div>
        </div>
    );
}

export default DonationDetails;