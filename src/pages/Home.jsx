import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Colleges from '../components/Colleges'

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Colleges />
            <Footer />
        </div>
    );
};

export default Home;