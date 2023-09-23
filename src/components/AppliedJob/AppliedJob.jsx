import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";

const AppliedJob = () => {
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
        
    }, []);
    return (
        <div>
            <h2>Applied Job : {appliedJobs.length}</h2>

        </div>
    );
};

export default AppliedJob;