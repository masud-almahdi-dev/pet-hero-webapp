import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAxiosSecure } from "../auth/Auth";
import { useEffect, useRef, useState } from "react";


const PetListing = () => {
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const [categories, setcategories] = useState([])
    const [pets, setpets] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [searchparams, setsearchparams] = useState([])
    const navigate = useNavigate()

    const findparam = (par) => {
        for (let i = 0; i < searchparams.length; i++) {
            if (searchparams[i].param === par) {
                return i;
            }
        }
        return undefined;
    }

    const handlefilterChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === "All") {
            navigate(`/pets`)
        } else {
            navigate(`/pets?category=${event.target.value}`)
        }
    };

    useEffect(() => {
        axiosSecure.get('/categories').then(
            res => {
                setcategories(res.data)
            }
        ).catch(r => console.log(r))
    }, [])
    useEffect(() => {
        if (location.search) {
            const params = location.search.split('?')[1].split('&').map(i => {
                if (i.includes('=')) {
                    const param = i.split('=')[0];
                    const val = i.split('=')[1];
                    return { param, val }
                }
                return { param: i }
            })
            setsearchparams(params)
        } else {
            setsearchparams([])
        }
    }, [location.search])
    useEffect(() => {
        let categ = findparam("category")
        if (categ !== undefined) {
            setSelectedOption(searchparams[categ].val)
            axiosSecure.get(`/pets?category=${searchparams[categ].val}`).then(
                res => {
                    setpets(res.data)
                }
            ).catch(r => console.log(r))
        } else {
            setSelectedOption("All")
            axiosSecure.get(`/pets`).then(
                res => {
                    setpets(res.data)
                }
            ).catch(r => console.log(r))
        }
        //axiosSecure.get("/pets").then(res=>console.log(res.data)).catch(err=>console.log(err))
    }, [searchparams])
    useEffect(() => {
    }, [pets])


    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="text-2xl m-2">Pet Listings</h2>
                <div className="flex items-center">
                    <h6>Filter: </h6>
                    <select className="text-black m-4 bg-white p-2 rounded-md" id="filtercat" value={selectedOption} onChange={handlefilterChange}>
                        {categories.map((i, index) => {
                            return <option key={index} value={i.Category}>{i.Category}</option>
                        }, [])}
                    </select>
                </div>
            </div>
            {/* Date Descending order */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-3">
                {
                    pets.map((i, index) => {
                        return <div key={index} className="flex flex-col justify-between h-full">
                            <img src="/cat1.jpg" className="object-cover" alt="" />
                            <h3 className="text-xl">{i.name}</h3>
                            <h4>{i.age}</h4>
                            <h4 className="text-sm italic font-semibold">{i.location}</h4>
                            <h4 className="text-sm italic">{i.submitDate}</h4>
                            <h4 className="text-sm italic">{i.submitBy}</h4>
                            <NavLink to="/petdetail/84" className="bg-slate-500 p-2 hover:bg-slate-600 transition-all">View Details</NavLink>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default PetListing;