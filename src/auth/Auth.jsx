import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { useCookies } from "react-cookie";
const firebaseConfig = { apiKey: import.meta.env.VITE_APIKEY, authDomain: import.meta.env.VITE_AUTHDOMAIN, projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET, messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID, appId: import.meta.env.VITE_APPID};
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
const axiosSecure = axios.create({ baseURL: "https://pet-hero-srv.vercel.app", withCredentials: true})
export const useAxiosSecure = () => { return axiosSecure; }
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    useEffect(() => { setLoading((true)); const unSubscribe = onAuthStateChanged(auth, currentUser => { setUser(currentUser); setLoading((false)) }); return () => { unSubscribe(); } },[])
    const createUser = (email, password) => { setLoading((true)); return createUserWithEmailAndPassword(auth, email, password) }
    const googleSignIn = () => { return signInWithPopup(auth, googleProvider) }
    const signIn = (email, password) => { setLoading((true)); return signInWithEmailAndPassword(auth, email, password) }
    const logOut = () => { setLoading((true)); removeCookie("token"); signOut(auth); window.location.reload(); }
    const authInfo = { user, loading, createUser, logOut, signIn, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );}

export const UserData = createContext()
export const useUserData = () => {
    const userdata = useContext(UserData);
    return userdata;}
export const UserDataProvider = ({children}) => {
    const {user} = useAuth()
    const [loggedIn,setLoggedIn] = useState(false)
    const [userdata,setUserData] = useState(false)
    useEffect(() => {
        if (user && user.email) {
            axiosSecure.get('/user').then(
                res => {
                    setLoggedIn(true)
                    setUserData(res.data)
                }
            ).catch( err => { console.log("Loading user data failed: "); console.log(err) } )
        }
    }, [user])
    const userinfo = { loggedIn, userdata }
    return (
        <UserData.Provider value={userinfo}>{children}</UserData.Provider>
    );
}
