import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAxiosSecure } from "../../auth/Auth";

const UpdatePet = () => {
    const [selectedOption, setSelectedOption] = useState('Cat');
    const [categories,setcategories] = useState([])
    const [petdata, setpetdata] = useState(null)
    const axiosSecure = useAxiosSecure()
    const updaterform = useFormik({
        initialValues: { name: '', location: '', age: '0', picture: '', description: '', longdetails: '' },
        onSubmit: values => { 
            let payload = {name: values.name,
                category: selectedOption,
                location: values.location, age: values.age, image: values.picture, description: values.description,
                longdetails: values.longdetails
            }
            axiosSecure.post(`/updatepet/${petdata._id}`,payload).then(res=>console.log(res.data)).catch(err=>console.log(err))
        },
        validate: values => {
            let errors = {}
            if (!values.name) { errors.name = 'Required' }
            if (!values.location) { errors.location = 'Required' }
            if (!values.age) { errors.age = 'Required' }
            if (!values.description) { errors.description = 'Required' }
            return errors
        }
    })
    useEffect(() => {
        axiosSecure.get('/categories').then(
            res => {
                setcategories(res.data.filter(i=>i.Category!=="All"))
            }
        ).catch(r => console.log(r))
    }, [])
    useEffect(() => {
        const paramid = location.pathname.split('/').at(-1)
        axiosSecure(`/pet/${paramid}`).then(res => {
            if (res.data.code) {
                console.log(res.data.error)
            } else {
                setpetdata(res.data)
            }
        }).catch(err => { })
    }, [location])
    useEffect(()=>{
        if(petdata?._id){
            updaterform.values.name = petdata.name
            updaterform.values.location = petdata.location
            updaterform.values.age = petdata.age
            updaterform.values.picture = petdata.image
            updaterform.values.description = petdata.description
            document.querySelector('#updatepetform textarea').value = petdata.longdetails
            setSelectedOption(petdata.category)
        }
    },[petdata])

    const handlecategChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
                Update Pet
                <form onSubmit={updaterform.handleSubmit} id="updatepetform" className="flex flex-col w-full items-center gap-10">
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="name">NAME</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="name" name="name" onChange={updaterform.handleChange} value={updaterform.values.name} />
                        </div>
                        {updaterform.errors.name ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.name}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="picture">PICTURE</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="picture" name="picture" onChange={updaterform.handleChange} value={updaterform.values.picture} />
                        </div>
                        {updaterform.errors.picture ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.picture}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="picture">CATEGORY</label>
                            <select className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="filtercat" value={selectedOption} onChange={handlecategChange}>
                                {categories.map((i, index) => {
                                    return <option key={index} value={i.Category}>{i.Category}</option>
                                }, [])}
                            </select>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="age">AGE (year)</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="number" min="0" id="age" name="age" onChange={updaterform.handleChange} value={updaterform.values.age} />
                        </div>
                        {updaterform.errors.age ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.age}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="location">LOCATION</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="location" name="location" onChange={updaterform.handleChange} value={updaterform.values.location} />
                        </div>
                        {updaterform.errors.location ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.location}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="description">DESCRIPTION</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="description" name="description" onChange={updaterform.handleChange} value={updaterform.values.description} />
                        </div>
                        {updaterform.errors.description ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.description}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="longdetails">LONG DESC.</label>
                            <textarea className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="longdetails" name="longdetails" onChange={updaterform.handleChange} value={updaterform.values.longdetails} />
                        </div>
                        {updaterform.errors.longdetails ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{updaterform.errors.longdetails}</div>:null}
                    </div>
                    <button className="bg-green-600 px-4 py-2 text-black rounded-lg hover:bg-orange-300 transition-all" type="submit">UPDATE</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default UpdatePet;