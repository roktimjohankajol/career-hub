import { useEffect, useState } from "react";
import CategoryJob from "../CategoryJob/CategoryJob";

const CategoryList = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[]);
    return (
        <div>
            <div className="space-y-6 py-12 text-center">
                <h2 className="text-5xl font-bold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {
                    jobs.map( categoryJob => <CategoryJob key={categoryJob.id} categoryJob={categoryJob}></CategoryJob>)
                }
            </div>

        </div>
    );
};

export default CategoryList;