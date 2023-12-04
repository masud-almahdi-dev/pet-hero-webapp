import { useState } from "react";
import { useAxiosSecure } from "../../auth/Auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";

const CreateCampaign = () => {
    const axiosSecure = useAxiosSecure()
    const toastinfo = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    }
    const adderform = useFormik({
        initialValues: { name: '', lastdate: '', max: '0', picture: '', description: '', longdetails: '' },
        onSubmit: values => {
            let payload = {
                name: values.name,
                lastdate: values.lastdate, max: String(values.max), image: values.picture, description: values.description,
                longdetails: values.longdetails
            }
            axiosSecure.post('/addacampaign', payload).then(res => {

                if (res.data.code) {
                    toast.success(<div className='p-4 py-5'>{res.data.message}</div>, toastinfo)
                } else {
                    toast.success(<div className='p-4 py-5'>Adding Successful</div>, toastinfo)
                }
            }
            ).catch(err => console.log(err))
        },
        validate: values => {
            let errors = {}
            if (!values.name) { errors.name = 'Required' }
            if (!values.lastdate) { errors.lastdate = 'Required' }
            let ndate = values.lastdate.split('-')
            if (ndate.length < 3 || ndate.length > 3) { errors.lastdate = 'Format: dd-mm-yyyy' }
            if (parseInt(ndate[0]) > 0 && parseInt(ndate[0]) <= 31
                && parseInt(ndate[1]) > 0 && parseInt(ndate[1]) <= 12
                && parseInt(ndate[2]) > 1000 && parseInt(ndate[2]) <= 3000
            ) { } else { errors.lastdate = 'follow this format: dd-mm-yyyy' }
            if (!values.max) { errors.max = 'Required' }
            if (!values.description) { errors.description = 'Required' }
            return errors
        }
    })

    return (
        <div>
            <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
                Add Donation Campaign
                <form onSubmit={adderform.handleSubmit} className="flex flex-col w-full items-center gap-10">
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="name">NAME</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="name" name="name" onChange={adderform.handleChange} value={adderform.values.name} />
                        </div>
                        {adderform.errors.name ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.name}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="picture">PICTURE</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="picture" name="picture" onChange={adderform.handleChange} value={adderform.values.picture} />
                        </div>
                        {adderform.errors.picture ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.picture}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="max">MAXIMUM</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="number" min="0" id="max" name="max" onChange={adderform.handleChange} value={adderform.values.max} />
                        </div>
                        {adderform.errors.max ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.max}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="lastdate">LASTDATE</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="lastdate" name="lastdate" onChange={adderform.handleChange} value={adderform.values.lastdate} />
                        </div>
                        {adderform.errors.lastdate ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.lastdate}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="description">DESCRIPTION</label>
                            <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="description" name="description" onChange={adderform.handleChange} value={adderform.values.description} />
                        </div>
                        {adderform.errors.description ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.description}</div> : null}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 items-center">
                        <div className="flex w-full gap-10 justify-end items-center">
                            <label htmlFor="longdetails">LONG DESC.</label>
                            <textarea className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="longdetails" name="longdetails" onChange={adderform.handleChange} value={adderform.values.longdetails} />
                        </div>
                        {adderform.errors.longdetails ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{adderform.errors.longdetails}</div> : null}
                    </div>
                    <button className="bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-700 transition-all" type="submit">ADD CAMPAIGN + </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default CreateCampaign;