import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from "react-icons/hi";
const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState();
    useEffect( () => {
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter( job => storedJobsIds.includes(job.idInt));
            const jobsApplied = [];
            for (const id of storedJobsIds){
                const job = jobs.find( job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
        }
    }, [jobs]);
    return (
        <div>
            <h2>Applied Job : {}</h2>
            <div className="grid grid-cols-2 gap-5">
                {
                    appliedJobs.map( job => <div className="border border-gray-200 p-8 space-y-4 rounded-md'" key={job.id}>
                        <img src={job.logo} alt="" />
                        <h2 className='text-3xl'>{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <button className='btn hover:bg-white bg-white border border-[#7E90FE] text-[#7E90FE]'>{job.remote_or_onsite}</button>
                    <button className='btn ml-5 hover:bg-white bg-white border border-[#7E90FE] text-[#7E90FE]'>{job.job_type}</button>
                    <div className='flex gap-5'>
                        <div className='flex gap-2 items-center'>
                            <span><HiOutlineLocationMarker></HiOutlineLocationMarker></span>
                            <p> {job.location}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span>
                            <p>{job.salary}</p>
                        </div>
                    </div>
                    <div><button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;