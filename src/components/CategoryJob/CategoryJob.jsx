
import PropTypes from 'prop-types';

const CategoryJob = ({categoryJob}) => {
    const {logo, category_name, availability} = categoryJob;
    return (
        <div className='bg-[#FAF8FF] p-10 rounded-md space-y-3'>
            <img className='p-5 bg-[#EFECFF] rounded-md' src={logo} alt="" />
            <h2 className='text-2xl'>{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

CategoryJob.propTypes = {
    categoryJob: PropTypes.object.isRequired
};

export default CategoryJob;