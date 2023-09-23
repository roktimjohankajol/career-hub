import { useLoaderData, useParams } from "react-router-dom";
import { HiDocumentReport, HiOutlineCurrencyDollar, HiPhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(id, jobs)
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_type, contact_information} = job;
    const notify = () => {
        saveJobApplication(idInt);
        toast(" Your Application is Submitted. Thank you !!!", {icon: "🚀"})
    };
    return (
        <>
            <div className="grid grid-cols-3 gap-6 py-20">
                <div className="col-span-2 space-y-5 text-xl">
                    <p><span className="font-bold">Job Description : </span> {job_description} </p>
                    <p><span className="font-bold">Job Responsibility : </span> {job_responsibility} </p>
                    <p className="font-bold">Education Requirements:</p>
                    <p>{educational_requirements}</p>
                    <p className="font-bold">Experiences:</p>
                    <p>{experiences}</p>
                </div>
                <div className="col-span-1 text-xl">
                    <div className="bg-[#EFECFF] rounded-md p-6 space-y-4">
                        <h3 className="font-bold">Job Details</h3>
                        <div className="border-[#9873FF] border opacity-10"></div>
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9873FF]"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span>
                            <p className="font-bold">Salary: </p>
                            <p>{salary}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9873FF]"><HiDocumentReport></HiDocumentReport></span>
                            <p className="font-bold">Job Title: </p>
                            <p>{job_type}</p>
                        </div>
                        <h3 className="font-bold pt-5">Contact Information</h3>
                        <div className="border-[#9873FF] border opacity-10"></div>
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9873FF]"><HiPhone></HiPhone></span>
                            <p className="font-bold">Phone: </p>
                            <p>{contact_information.phone}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9873FF]"><HiOutlineMail></HiOutlineMail></span>
                            <p className="font-bold">Email: </p>
                            <p>{contact_information.email}</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            
                            <p> <span className="text-[#9873FF] float-left mr-3 mt-1"><HiOutlineLocationMarker></HiOutlineLocationMarker></span>
                            <span className="font-bold">Address: </span>{contact_information.address}</p>
                        </div>
                    </div>
                    <div className="py-8">
                        <button onClick={notify} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full'>Apply Now</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;