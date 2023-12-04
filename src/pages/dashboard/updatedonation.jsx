import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAxiosSecure } from "../../auth/Auth";

const UpdateDonation = () => {
    const [campaigndata, setcampaigndata] = useState(null)
    const [loaded,setloaded] = useState(false)
    const axiosSecure = useAxiosSecure()
    const dnupdaterform = useFormik({
        initialValues: { name: '', lastdate: '', max: '0', picture: '', description: '', longdetails: '' },
        onSubmit: values => {
            let payload = {
                name: values.name,
                lastdate: values.lastdate,
                max: values.max,
                image: values.picture,
                description: values.description,
                longdetails: values.longdetails,
            }
            axiosSecure.post(`/updatedonation/${campaigndata._id}`, payload).then(res => console.log(res.data)).catch(err => console.log(err))
        },
        validate: values => {
            let errors = {}
            if (!values.name) { errors.name = 'Required' }
            if (!values.lastdate) { errors.lastdate = 'Required' }
            let ndate = values.lastdate.split('-')
            if (ndate.length<3 || ndate.length>3) { errors.lastdate = 'Format: dd-mm-yyyy' }
            if (parseInt(ndate[0])>0 && parseInt(ndate[0])<=31
            &&  parseInt(ndate[1])>0 && parseInt(ndate[1])<=12
            &&  parseInt(ndate[2])>1000 && parseInt(ndate[2])<=3000
            ){ }else { errors.lastdate = 'min: 01-01-1001, max: 31-12-3000' }
            if (!values.max) { errors.max = 'Required' }
            if (!values.description) { errors.description = 'Required' }
            return errors
        }
    })
    useEffect(() => {
        const paramid = location.pathname.split('/').at(-1)
        axiosSecure(`/campaign/${paramid}`).then(res => {
            if (res.data.code) {
                console.log(res.data.error)
            } else {
                setcampaigndata(res.data)
            }
        }).catch(err => { })
    }, [location])
    useEffect(() => {
        if (campaigndata?._id) {
            dnupdaterform.values.name = campaigndata.name
            dnupdaterform.values.lastdate = campaigndata.lastdate
            dnupdaterform.values.max = campaigndata.max
            dnupdaterform.values.picture = campaigndata.image
            dnupdaterform.values.description = campaigndata.description
            dnupdaterform.values.longdetails = campaigndata.longdetails
            setloaded(true)
        }
    }, [campaigndata])
    if (loaded) {
        return (
            <div>
                <div className="text-white p-6 md:p-10 items-center flex flex-col gap-10">
                    Update Donation
                    <form onSubmit={dnupdaterform.handleSubmit} className="flex flex-col w-full items-center gap-10">
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="name">NAME</label>
                                <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="name" name="name" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.name} />
                            </div>
                            {dnupdaterform.errors.name ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.name}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="picture">PICTURE</label>
                                <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="picture" name="picture" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.picture} />
                            </div>
                            {dnupdaterform.errors.picture ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.picture}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="max">MAXIMUM</label>
                                <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="number" min="0" id="max" name="max" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.max} />
                            </div>
                            {dnupdaterform.errors.max ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.max}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="lastdate">LASTDATE</label>
                                <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="lastdate" name="lastdate" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.lastdate} />
                            </div>
                            {dnupdaterform.errors.lastdate ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.lastdate}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="description">DESCRIPTION</label>
                                <input className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" type="text" id="description" name="description" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.description} />
                            </div>
                            {dnupdaterform.errors.description ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.description}</div> : null}
                        </div>
                        <div className="flex flex-col gap-2 w-2/3 items-center">
                            <div className="flex w-full gap-10 justify-end items-center">
                                <label htmlFor="longdetails">LONG DESC.</label>
                                <textarea className="border-2 border-slate-800/40 text-black w-[75%] px-2 py-1 rounded-md" id="longdetails" name="longdetails" onChange={dnupdaterform.handleChange} value={dnupdaterform.values.longdetails} />
                            </div>
                            {dnupdaterform.errors.longdetails ? <div className="bg-orange-300 text-red-900 px-2 w-full text-center font-semibold">{dnupdaterform.errors.longdetails}</div> : null}
                        </div>
                        <button className="bg-green-600 px-4 py-2 text-black rounded-lg hover:bg-orange-300 transition-all" type="submit">UPDATE CAMPAIGN</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        );
    }else{
        return (<div>Loading...</div>);
    }
}

export default UpdateDonation;