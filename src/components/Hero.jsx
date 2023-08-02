import './Hero.css'
import bgHero from '../assets/top-view-books-arrangement.jpg'
const Hero = () => {
    return (
        <div>
            <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero})` }} >
                <div className="hero-text">
                    <h1 style={{ color: 'white', fontSize: '50px' }}>Meet Your Dream Colleges</h1>
                    <p>Choose one and get big!</p>
                    <button>ADMISSION NOW</button>
                </div>
                <div className="hero-exclusions">
                    <a href="#popup1">
                        <p className="exclusions">*click here for details</p>
                    </a>
                </div>

                <div id="popup1" className="overlay">
                    <div className="popup">
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            <h2>Promotional Information & Exclusions</h2>
                            This is a list of exclusions

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;