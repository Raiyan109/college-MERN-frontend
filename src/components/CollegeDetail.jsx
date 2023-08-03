import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { CollegesListForHomePage } from '../constants';

const CollegeDetail = () => {
    const { id } = useParams()

    const colleges = CollegesListForHomePage.find((item) => {
        return item.id === parseInt(id)
    })
    console.log(colleges);

    if (!colleges) {
        return (
            <section className='h-screen flex justify-center items-center'>
                Loading...
            </section>
        )
    }

    const { image, name, } = colleges
    return (
        <div>
            <Navbar />
            <div className='bg-gradient-to-b from-[#abb6f0] via-[#879af5] to-lightBlue'>
                <div className='py-20'>
                    <div className='container mx-auto py-10'>
                        <div className='flex flex-col'>
                            <div className='p-9'>
                                <img src={image} alt="" />
                            </div>

                            <div className='flex justify-center items-center p-9'>
                                <h1 className='text-5xl font-semibold text-green'>{name}</h1>
                            </div>
                            {/* <h4 className='text-sm text-center text-green'>Published on {date}</h4>
                            <div className='p-6 text-2xl leading-10'>
                                <p>{body}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default CollegeDetail;