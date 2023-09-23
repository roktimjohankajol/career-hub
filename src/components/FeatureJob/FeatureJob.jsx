import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllData, setShowAllData] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="space-y-6 py-12 text-center">
        <h2 className="text-5xl font-bold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {jobs.slice(0, showAllData).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={showAllData === jobs.length && 'hidden'}>
        <div className="flex justify-center">
        <button onClick={ ()=> setShowAllData(jobs.length)} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] my-5 text-center block text-white'>See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;
