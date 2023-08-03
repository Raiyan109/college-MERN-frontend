import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Colleges from '../components/Colleges'
import Gallary from "../components/Gallary";
import ResearchPapers from "../components/ResearchPapers";
import Reviews from "../components/Reviews";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Colleges />
            <ResearchPapers />
            <Reviews />
            <Gallary />
            <Footer />
        </div>
    );
};

export default Home;