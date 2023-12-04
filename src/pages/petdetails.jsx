import { useEffect, useState } from "react";
import { useAxiosSecure } from "../auth/Auth";

const PetDetails = () => {
    const [categories, setcategories] = useState([])
    const [petdata, setpetdata] = useState(null)
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        const paramid = location.pathname.split('/')
        axiosSecure(`/pet/${paramid.at(-1)}`).then(res => {
            if (res.data.code) {
                console.log(res.data.error)
            } else {
                setpetdata(res.data)
            }
        }).catch(err => { })
    }, [location])
    useEffect(() => {
        axiosSecure.get('/categories').then(
            res => {
                setcategories(res.data)
            }
        ).catch(r => console.log(r))
    }, [])
    if (petdata) {
        return (
            <div>
                <div className="p-6 xl:w-2/3 mx-auto">
                    <h2 className="w-full text-center p-4 font-semibold">DETAILS</h2>
                    <div className="w-full">
                    {petdata.image ?
                        <img src={petdata.image} className="object-cover aspect-video w-full overflow-hidden rounded-lg" alt="" /> :
                        categories.filter(j => { return j.Category === petdata.category }).map((j, jndex) => {
                            return <img src={j.image} key={jndex} className="object-cover aspect-video w-full overflow-hidden rounded-lg" alt="" />
                        })
                        
                    }
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h3 className="text-xl">NAME : {petdata.name}</h3>
                        <h4>AGE : {petdata.age} years</h4>
                        <h4 className="text-sm italic font-semibold">LOCATION : {petdata.location}</h4>
                        <h4 className="text-xs italic">CATEGORY : <span className="p-2 bg-yellow-400 text-black font-semibold">{petdata.category}</span></h4>
                        <h4 className="text-xs italic">SUBMITTED BY : {petdata.submitBy}</h4>
                        <h4 className="text-xs italic">DATE : {petdata.submitDate}</h4>
                        <button className="mx-auto w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">ADOPT NOW</button>
                        <h4 className="font-semibold">DETAILS : </h4>
                        <p className="my-6">{petdata.description}</p>
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

export default PetDetails;