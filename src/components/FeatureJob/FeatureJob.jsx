import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="space-y-6 py-12 text-center">
                <h2 className="text-5xl font-bold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
      <div className="grid grid-cols-2 gap-5">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeatureJob;
