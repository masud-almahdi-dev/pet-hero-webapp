import { Navigate, useLocation } from "react-router-dom";
import { useAuth, useUserData } from "./auth/Auth";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    const [prloading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 1500);
    }, [])
    if (loading || prloading) {
        return (
            <h1 className="text-center w-full bg-white text-black rounded-lg p-6 mt-4 font-semibold">...Loading...</h1>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
}
export const Adminroute = ({ children }) => {
    const { loggedIn, userdata } = useUserData()
    if (loggedIn) {

        if (userdata.role === "admin" || userdata.role === "owner") {
            return children;
        } else {
            return (
                <div className="text-white p-6 md:p-10 items-center text-center mx-auto w-full flex flex-col gap-10">
                    FORBIDDEN | 401
                    <h2>You are not Admin</h2>
                </div>
            );
        }
    }else{
        <h1 className="text-center w-full bg-white text-black rounded-lg p-6 mt-4 font-semibold">...Loading...</h1>
    }

}


export default PrivateRoute;