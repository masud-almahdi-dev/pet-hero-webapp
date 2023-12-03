import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useAxiosSecure, useUserData } from "../auth/Auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
const AuthPage = () => {
    const location = useLocation()
    const [authform, setauthform] = useState(location.pathname)
    const navigate = useNavigate()
    const { loggedIn, userdata } = useUserData()
    const { signIn, googleSignIn, createUser } = useAuth()
    const toastinfo = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    }
    useEffect(() => {
        setauthform(location.pathname)
    }, [location.pathname])
    const axiosSecure = useAxiosSecure()
    const handlelogin = form => {
        // e.preventDefault();
        // const form = new FormData(e.currentTarget)
        let mail = form.email
        let pass = form.password
        signIn(mail, pass).then(
            result => {
                const payload = { email: mail }
                axiosSecure.post('/jwt', payload)
                toast.success(<div className='p-4 py-5'>Login Successful<br />loading page in 5 seconds..</div>, toastinfo)
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 5000);
            }
        ).catch(error =>
            toast.error(<div className='p-4 py-5'>{error.message}</div>, toastinfo))
    }

    const handlegooglelogin = e => {
        e.preventDefault();
        googleSignIn().then(
            result => {
                const payload = { name: result.user.displayName, email: result.user.email, image: result.user.photoURL, datafrom: "google" }
                axiosSecure.post('/jwtcreate', payload).then(res => console.log(res.data)).catch(err => console.log(err))
                toast.success(<div className='p-4 py-5'>Login Successful<br />loading page in 5 seconds..</div>, toastinfo)
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 5000);
            }
        ).catch(error => console.log(error))
    }

    const handleSignUp = form => {
        // e.preventDefault();
        // const form = new FormData(e.currentTarget)
        let username = form.name
        let mail = form.email
        let picture = form.profilepic
        let pass = form.password
        if (pass.length < 6) {
            seterrors("Password Length must be more than 6 characters.")
        }
        else if (! /[A-Z]/.test(pass)) {
            seterrors("Password must have atleast one upercase character")
        }
        else if (! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(pass)) {
            seterrors("Password must contain at least one Special Symbol.")
        }
        else {
            createUser(mail, pass).then(res => {
                const payload = { name: username, email: mail, image: picture, datafrom: "user" };
                toast.success(<div className='p-4 py-5'>Registratiom Successful. loading page in 5 seconds..</div>, toastinfo)
                axiosSecure.post('/jwtcreate', payload).then(() => {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : "/");
                    }, 5000);
                }).catch(err => console.log(err))
            }).catch(error => toast.error(<div className='p-4 py-5'>{error.message}</div>, toastinfo))

        }
    }
    const loginform = useFormik({ initialValues: { email: '', password: '' }, onSubmit: v => { handlelogin(v) } })
    const rsgform = useFormik({ initialValues: { email: '', password: '', name: '', profilepic: '' }, onSubmit: v => { handleSignUp(v) } })
    if (authform === '/login') {
        return (
            <div className="bg-white text-black p-6 md:p-10 items-center flex flex-col gap-10">
                Login
                <form onSubmit={loginform.handleSubmit} className="flex flex-col w-full items-center gap-10">
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="email">EMAIL</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="text" id="email" name="email" onChange={loginform.handleChange} value={loginform.values.email} /></div>
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="password">PASSWORD</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="password" id="password" name="password" onChange={loginform.handleChange} value={loginform.values.password} /></div>
                    <div className="flex w-1/3 gap-2 items-center">
                        <p className="text-sm font-semibold">Dont Have an account?</p>
                        <NavLink to="/signup" className="text-blue-600 hover:bg-blue-100">Sign Up</NavLink>
                        {/* <p className="text-sm font-semibold">instead.</p> */}
                    </div>
                    <button className="bg-green-600 px-4 py-2 text-white rounded-lg ">Log In</button>
                    <button onClick={handlegooglelogin} className=" hover:bg-yellow-400 bg-slate-200 rounded-lg font-semibold p-10 flex items-center justify-center gap-4">
                        <img src="https://i.ibb.co/b5CLj49/transparent-background-google-logo-6.png" className="w-10" alt="" />
                        Log In With Google</button>
                </form>
                <ToastContainer />
            </div>
        );
    } else {
        return (
            <div className="bg-white text-black p-6 md:p-10 items-center flex flex-col gap-10">
                Sign Up
                <form onSubmit={rsgform.handleSubmit} className="flex flex-col w-full items-center gap-10">
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="name">NAME</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="text" id="name" name="name" onChange={rsgform.handleChange} value={rsgform.values.name} /></div>
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="email">EMAIL</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="text" id="email" name="email" onChange={rsgform.handleChange} value={rsgform.values.email} /></div>
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="password">PASSWORD</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="password" id="password" name="password" onChange={rsgform.handleChange} value={rsgform.values.password} /></div>
                    <div className="flex w-1/3 gap-10 items-center">
                        <label htmlFor="profilepic">PROFILEPIC</label><input className="border-2 border-slate-800/40 w-full px-2 py-1 rounded-md" type="text" id="profilepic" name="profilepic" onChange={rsgform.handleChange} value={rsgform.values.profilepic} /></div>
                    <div className="flex w-1/3 gap-2 items-center">
                        <p className="text-sm font-semibold">Already Have an account?</p>
                        <NavLink to="/login" className="text-blue-600 hover:bg-blue-100">Log In</NavLink>
                        <p className="text-sm font-semibold">instead.</p>
                    </div>
                    
                    <button className="bg-green-600 px-4 py-2 text-white rounded-lg ">Sign Up</button>
                    <button onClick={handlegooglelogin} className=" hover:bg-yellow-400 bg-slate-200 rounded-lg font-semibold p-10 flex items-center justify-center gap-4">
                        <img src="https://i.ibb.co/b5CLj49/transparent-background-google-logo-6.png" className="w-10" alt="" />
                        Log In With Google</button>
                </form>
                <ToastContainer />
            </div>
        );
    }
}
export default AuthPage;