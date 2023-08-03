import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { CollegesListForHomePage } from '../constants';
import researcher from '../assets/2.jpeg'

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

    const { image, name, admissionDates, events, researchHistory, sports } = colleges
    return (
        <div>
            <Navbar />
            <div className='bg-gradient-to-b from-[#abb6f0] via-[#879af5] to-lightBlue'>
                <div className='py-20'>
                    <div className='container mx-auto py-10'>
                        <div className='flex'>
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
            <div className='flex justify-center items-center p-9'>
                <h1 className='text-5xl font-semibold text-green'>Life skills. Study skills. All online.</h1>
            </div>
            <h3 className='max-w-[700px] text-center mx-auto'>Here at our college, we've been finding ways to help students bounce back from home-schooling mode, hours of watching #BoredInTheHouse videos, and days of complete isolation. We get it - going back to 'normal' can feel a little daunting, especially when you have big life choices on the horizon.

                If you are currently a student in Years 10-13, the college would love you to join our online community of young people who are impatient for change and working towards a better future.

                Depending on your age, we have courses to choose from that are optional but extremely useful (and fun). What's more, they're completely free of charge. There's no pressure, no tests – just tons of interactive activities, videos, blogs and tips to help you on your educational journey.</h3>

            <div className='flex justify-center items-center p-9 mt-24'>
                <h1 className='text-5xl font-semibold text-green'>Our Admissions</h1>
            </div>
            <h2 className='mx-auto text-center font-bold text-xl'>{admissionDates}</h2>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row mt-32">
                <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Events</span>
                    <h3 className="text-3xl font-bold">{events.name}</h3>
                    <p className="my-6 dark:text-gray-400 font-bold">Place :{events.place}</p>
                    <p className="my-2 dark:text-gray-400 font-bold">Time : {events.time}</p>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row mt-32">
                <img src={researcher} alt="" className="w-32 h-32 object-cover mx-auto" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Our Research History</span>
                    <h3 className="text-3xl font-bold">{researchHistory.name}</h3>
                    <p className="my-6 dark:text-gray-400 font-bold">Researcher :{researchHistory.researcher}</p>

                </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row mt-32">
                <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Sports</span>
                    <h3 className="text-3xl font-bold">{sports.name}</h3>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default CollegeDetail;