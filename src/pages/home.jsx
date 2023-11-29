const Home = () => {
    return (
        <div className="bg-purple-700 w-full flex flex-col">
            <div className="w-full overflow-hidden h-[60dvh] flex flex-col justify-center">
                <img src="/cat1.jpg" className="h-full brightness-75 flex object-cover" alt="" />
                <div className="absolute">
                    <h1 className="font-semibold text-white text-3xl md:text-6xl mx-4 text-center backdrop-blur-lg px-4 py-2 rounded-md">
                        Welcome to <br /><span className=" text-green-200">Pet Hero</span>
                    </h1>
                    <div className="w-full flex justify-center my-2">
                        <button className=" bg-white hover:bg-green-700 text-green-700 hover:text-white transition-all p-2 rounded-sm">VISIT PETS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;