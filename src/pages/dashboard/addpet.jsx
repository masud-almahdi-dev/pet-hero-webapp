import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAxiosSecure } from "../../auth/Auth";

const AddPet = () => {
    const [selectedOption, setSelectedOption] = useState('Cat');
    const [categories,setcategories] = useState([])
    const axiosSecure = useAxiosSecure()
    const adderform = useFormik({
        initialValues: { name: '', location: '', age: '0', picture: '', description: '', longdetails: '' },
        onSubmit: values => { 
            let payload = {name: values.name,
                category: selectedOption,
                location: values.location, age: values.age, picture: values.picture, description: values.description,
                longdetails: values.longdetails
            }
            //console.log(payload)
            axiosSecure.post('/addapet',payload).then(res=>console.log(res.data)).catch(err=>console.log(err))
        },
        validate: values => {
            let errors = {}
            if (!values.name) { errors.name = 'Required' }
            if (!values.location) { errors.location = 'Required' }
            if (!values.age) { errors.age = 'Required' }
            if (!values.description) { errors.description = 'Required' }
            //if (!values.longdetails){errors.longdetails='Required'}
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

    const handlecategChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
                Add Pet
                <form onSubmit={adderform.handleSubmit} className="flex flex-col w-full items-center gap-10">
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="name">NAME</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="name" name="name" onChange={adderform.handleChange} value={adderform.values.name} />
                        </div>
                        {adderform.errors.name ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.name}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="picture">PICTURE</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="picture" name="picture" onChange={adderform.handleChange} value={adderform.values.picture} />
                        </div>
                        {adderform.errors.picture ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.picture}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="picture">CATEGORY</label>
                            <select className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="filtercat" value={selectedOption} onChange={handlecategChange}>
                                {categories.map((i, index) => {
                                    return <option key={index} value={i.Category}>{i.Category}</option>
                                }, [])}
                            </select>
                            {/* <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="picture" name="picture" onChange={adderform.handleChange} value={adderform.values.picture} /> */}

                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="age">AGE (year)</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="number" min="0" id="age" name="age" onChange={adderform.handleChange} value={adderform.values.age} />
                        </div>
                        {adderform.errors.age ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.age}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="location">LOCATION</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="location" name="location" onChange={adderform.handleChange} value={adderform.values.location} />
                        </div>
                        {adderform.errors.location ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.location}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="description">DESCRIPTION</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="description" name="description" onChange={adderform.handleChange} value={adderform.values.description} />
                        </div>
                        {adderform.errors.description ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.description}</div>:null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="longdetails">LONG DESC.</label>
                            <textarea className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="longdetails" name="longdetails" onChange={adderform.handleChange} value={adderform.values.longdetails} />
                        </div>
                        {adderform.errors.longdetails ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.longdetails}</div>:null}
                    </div>
                    <button className="bg-green-600 px-4 py-2 text-white rounded-lg " type="submit">ADD + </button>
                </form>
                <ToastContainer />
            </div>
            {/* <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="name" type="text" />
                    <Field name="email" type="email" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik> */}
        </div>
    );
}

export default AddPet;