const PetDetails = () => {
    return (
        <div>
            <div>
                <h2 className="w-full text-center p-4 font-semibold">DETAILS</h2>
                <img src="/cat1.jpg" className="object-cover w-full md:w-1/2 mx-auto" alt="" />
                <div className="p-4 flex flex-col gap-4">
                    <h3 className="text-xl">Pet Name</h3>
                    <h4>Age</h4>
                    <h4 className="text-sm italic font-semibold">Location</h4>
                    <h4 className="text-sm italic">Submitted Date</h4>
                    <button className="mx-auto w-max bg-yellow-200 text-black py-2 px-4 rounded-sm hover:bg-yellow-100">ADOPT NOW</button>
                </div>
            </div>
        </div>
    );
}

export default PetDetails;