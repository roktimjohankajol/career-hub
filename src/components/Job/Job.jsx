import PropTypes from 'prop-types'
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className='border border-gray-200 p-8 space-y-4 rounded-md'>
            <img src={logo} alt="" />
            <h2 className='text-3xl'>{job_title}</h2>
            <p>{company_name}</p>
            <button className='btn hover:bg-white bg-white border border-[#7E90FE] text-[#7E90FE]'>{remote_or_onsite}</button>
            <button className='btn ml-5 hover:bg-white bg-white border border-[#7E90FE] text-[#7E90FE]'>{job_type}</button>
            <div className='flex gap-5'>
                <div className='flex gap-2 items-center'>
                    <span><HiOutlineLocationMarker></HiOutlineLocationMarker></span>
                    <p> {location}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <span><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span>
                    <p>{salary}</p>
                </div>
            </div>
            <div>
            <Link to={`/job/${id}`}><button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></Link>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired
}
export default Job;