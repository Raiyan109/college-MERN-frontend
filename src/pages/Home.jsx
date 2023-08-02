import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;