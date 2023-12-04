import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
            Error:
            <div className="text-blue-300 text-4xl font-semibold">
                404
            </div>
            <div className="text-blue-300 text-xl font-semibold">
                file or path not found
            </div>
            <NavLink to="/" className="text-green-700 px-4 py-2 hover:contrast-150 bg-green-400">Home</NavLink>
        </div>
    );
}

export default Errorpage;