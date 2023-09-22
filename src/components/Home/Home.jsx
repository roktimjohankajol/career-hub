import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJob from "../FeatureJob/FeatureJob";

const Home = () => {
    return (
        <div className="py-20">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;