import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAxiosSecure } from "../auth/Auth";

const Home = () => {
    const axiosSecure = useAxiosSecure()
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axiosSecure.get('/categories').then(
            res => setcategories(res.data)
        ).catch(r => console.log(r))
    }, [])
    return (
        <div className="bg-purple-700 w-full flex flex-col">
            <div className="w-full overflow-hidden h-[60dvh] flex flex-col justify-center">
                <img src="https://i.ibb.co/FbSpzxs/dog.jpg" className="h-full flex w-full object-cover saturate-50" alt="" />
                <div className="absolute xl:mx-10">
                    <h1 className="font-semibold text-white text-3xl md:text-6xl mx-10 text-center backdrop-blur-lg p-8 pt-4 rounded-md">
                        Welcome to <br /><span className=" text-orange-200">Pet Hero</span>
                    </h1>
                    <div className="w-full flex justify-center my-4">
                        <button className=" bg-white hover:bg-orange-700 text-orange-700 hover:text-white transition-all px-6 py-4 rounded-md">VISIT PETS</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-8 gap-8 bg-white">
                {categories.map((i,j)=> {
                    return <NavLink key={j} to={`/pets?category=${i.Category}`} className=" rounded-lg overflow-hidden flex aspect-square justify-center items-center">
                        <img src={i.image} className="object-cover hover:brightness-50 h-full w-full" alt="" />
                        <h3 className="absolute text-2xl pointer-events-none text-black bg-white p-2 rounded-lg">{i.Category}</h3>
                    </NavLink>
                })}
            </div>
            <div className="w-full overflow-hidden h-[60dvh] flex flex-col justify-center items-center">
                <img src="/cat1.jpg" className="h-full md:w-full brightness-75 flex object-cover" alt="" />
                <div className="absolute">
                    <h3 className="font-semibold text-white text-2xl mx-4 text-center bg-[#ffce2e28] backdrop-blur-lg px-4 py-2 rounded-md">Make the world a better place by donating for your lovely companions</h3>
                    <h3 className="font-semibold text-white text-2xl mx-4 text-center backdrop-blur-lg px-4 py-2 rounded-md">Come Help Us</h3>
                    <div className="w-full flex justify-center my-2">
                        <button className=" bg-white hover:bg-green-700 text-green-700 hover:text-white transition-all p-2 rounded-sm">DONATE NOW</button>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden h-[60dvh] flex flex-col justify-center">
                <img src="/cat1.jpg" className="h-full brightness-75 flex object-cover" alt="" />
                <div className="absolute">
                    <h2 className="text-3xl md:text-4xl m-8">About Us</h2>
                    <h3 className="font-semibold text-white text-2xl mx-6 bg-[#a312123a] backdrop-blur-lg px-4 py-2 rounded-md">What are we?</h3>
                    <h3 className="font-semibold text-white text-2xl mx-6 bg-[#1234a3a1]  backdrop-blur-lg px-4 py-2 rounded-md">We help lost pets find their new home,<br />Where they can be happy ever after.</h3>
                    <button className=" m-8 bg-white hover:bg-green-700 text-green-700 hover:text-white transition-all p-2 rounded-sm">VISIT DONATIONS</button>
                </div>
            </div>
        </div>
    );
}

export default Home;