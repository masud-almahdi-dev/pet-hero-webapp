import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-purple-700 w-full flex flex-col">
            <div className="w-full overflow-hidden h-[60dvh] flex flex-col justify-center">
                <img src="/cat1.jpg" className="h-full brightness-75 flex object-cover" alt="" />
                <div className="absolute">
                    <h1 className="font-semibold text-white text-3xl md:text-6xl mx-10 text-center backdrop-blur-lg px-4 py-2 rounded-md">
                        Welcome to <br /><span className=" text-green-200">Pet Hero</span>
                    </h1>
                    <div className="w-full flex justify-center my-2">
                        <button className=" bg-white hover:bg-green-700 text-green-700 hover:text-white transition-all p-2 rounded-sm">VISIT PETS</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-8 gap-8 bg-white">
                <NavLink className=" rounded-lg overflow-hidden flex aspect-square justify-center items-center">
                    <img src="/cat1.jpg" className="object-cover hover:brightness-50 h-full" alt="" />
                    <h3 className="absolute text-2xl pointer-events-none text-black backdrop-blur-sm p-2 rounded-lg">Cats</h3>
                </NavLink>
                <NavLink className=" rounded-lg overflow-hidden flex aspect-square justify-center items-center">
                    <img src="/cat1.jpg" className="object-cover hover:brightness-50 h-full" alt="" />
                    <h3 className="absolute text-2xl pointer-events-none text-black backdrop-blur-sm p-2 rounded-lg">Dogs</h3>
                </NavLink>
                <NavLink className=" rounded-lg overflow-hidden flex aspect-square justify-center items-center">
                    <img src="/cat1.jpg" className="object-cover hover:brightness-50 h-full" alt="" />
                    <h3 className="absolute text-2xl pointer-events-none text-black backdrop-blur-sm p-2 rounded-lg">Birds</h3>
                </NavLink>
                <NavLink className=" rounded-lg overflow-hidden flex aspect-square justify-center items-center">
                    <img src="/cat1.jpg" className="object-cover hover:brightness-50 h-full" alt="" />
                    <h3 className="absolute text-2xl pointer-events-none text-black backdrop-blur-sm p-2 rounded-lg">Fish</h3>
                </NavLink>
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