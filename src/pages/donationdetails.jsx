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
    const [donationopen, setdonationopen] = useState()
    const handledonationopen = () => {
        setdonationopen(!donationopen)
    }
    const handledonate = ()=>{
        let amount = document.querySelector("#amountinput").value
        axiosSecure.post(`/donate/${donationdata._id}`,{amount}).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
    if (donationdata) {
        return (
            <div>
                <div className="p-6 xl:w-2/3 mx-auto">
                    <h2 className="w-full text-center p-4 font-semibold">DONATION DETAILS</h2>
                    <img src={donationdata.image || "https://i.ibb.co/Rhgbz8B/8f7e9477-4be6-45ae-aa3d-ae4303f8104d.jpg"} className="object-cover aspect-video rounded-lg overflow-hidden w-full md:w-1/2 mx-auto" alt="" />
                    <div className="p-4 flex flex-col gap-4">
                        <h3 className="text-xl">TITLE : {donationdata.name}</h3>
                        <h4 className="text-sm italic font-semibold">MAXMIUM : {donationdata.max}</h4>
                        <h4 className="text-xs italic">CURRENT AMOUNT : {donationdata.amount}</h4>
                        <h4 className="text-xs italic">DATE : {donationdata.submitDate}</h4>
                        {donationopen && <input type="number" min="0" id="amountinput" defaultValue="10" className="bg-white text-black p-2" />}
                        <div className="flex justify-between">
                            <button onClick={handledonationopen} className=" w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">{donationopen ? "CLOSE" : "DONATE NOW"}</button>
                            {donationopen && <button onClick={handledonate} className=" w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">SEND</button>}
                        </div>
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

}

export default DonationDetails;