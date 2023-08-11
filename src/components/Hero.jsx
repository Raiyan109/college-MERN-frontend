import './Hero.css'
import bgHero from '../assets/pexels-max-fischer-5211478.jpg'
import InputModal from './InputModal';
const Hero = () => {
    return (
        <div>
            <div className='h-screen flex justify-center items-center md:bg-cover bg-auto bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero})` }} >
                <div className="hero-text">
                    <h1 style={{ color: 'white', fontSize: '50px' }}>Meet Your Dream Colleges</h1>
                    <p>Choose one and get big!</p>
                    <button>ADMISSION NOW</button>
                </div>
                <div className="hero-exclusions">
                    <a href="#popup1">
                        <button className="border-0 inline-block py-4 px-5 text-white bg-black text-center cursor-pointer border-5 border-black border-solid -ml-1 mt-5 text-md tracking-widest font-bold">Search For Colleges</button>
                    </a>
                </div>

                <div id="popup1" className="overlay">
                    <div className="popup">
                        <a className="close bg-red-600 rounded-full py-1 px-4 text-center" href="#">&times;</a>
                        <div className="content">

                            <InputModal />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;