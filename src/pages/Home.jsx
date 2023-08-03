import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Colleges from '../components/Colleges'
import Gallary from "../components/Gallary";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Colleges />
            <Gallary />
            <Footer />
        </div>
    );
};

export default Home;