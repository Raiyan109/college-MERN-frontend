import Navbar from '../../components/Navbar'
import { useContext } from "react";
import { COLLEGE_CONTEXT } from '../../context/CollegeInfoProvider'
import moment from 'moment/moment';
import { AiFillStar } from 'react-icons/ai'

const MyCollege = () => {
    const { candidate, rating, setRating, hover, setHover, reviewRef, handleReviewForm, setError, setLoading } = useContext(COLLEGE_CONTEXT)
    console.log(candidate[0]);
    const myTime = moment(candidate[0]?.birthDate).format("MMM Do YY")

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            await handleReviewForm(reviewRef.current.value, rating)
            // navigate('/')
        } catch (error) {
            setError('Failed to update data')
        }
        setLoading(false)
    }

    return (
        <div>
            <Navbar />
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">
                    {/* <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">22</p>
                                <p className="text-gray-400">Friends</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">10</p>
                                <p className="text-gray-400">Photos</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">89</p>
                                <p className="text-gray-400">Comments</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
                            </div>
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Connect</button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Message</button>
                        </div>
                    </div> */}
                    <h1 className="text-4xl font-medium text-gray-700 text-center border-b">Candidate Details</h1>
                    <div className="mt-20 text-center pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">{candidate[0]?.name}</h1>
                        <p className="font-light text-gray-600 mt-3">Address: {candidate[0]?.address}</p>
                        <p className="mt-8 text-gray-500">Phone : {candidate[0]?.phone}</p>
                        <p className="mt-2 text-gray-500">Subject: {candidate[0]?.subject}</p>
                        <p className="mt-2 text-gray-500">Email : {candidate[0]?.email}</p>
                        <p className="mt-2 text-gray-500">Date Of Birth: {myTime}</p>
                    </div>
                    {/* <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        <button className="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>
                    </div> */}
                </div>

                <div className="p-8 bg-white shadow mt-10">

                    <h1 className="text-4xl font-medium text-gray-700 text-center border-b">Add a review</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col items-center">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-lg text-gray-800">Please give a five star rating </span>
                                <div className="flex space-x-3">
                                    {[...Array(5)].map((_, index) => {
                                        const starValue = index + 1;
                                        return (
                                            <button
                                                type="button"
                                                key={starValue}
                                                className={starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-500"}
                                                onClick={() => handleRatingClick(starValue)}
                                                onMouseEnter={() => setHover(starValue)}
                                                onMouseLeave={() => setHover(rating)}
                                            >
                                                <span className="cursor-pointer outline-none bg-transparent text-3xl">
                                                    <AiFillStar />
                                                </span>
                                            </button>
                                        );
                                    })}
                                    {/* {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <button
                                                type="button"
                                                key={index}
                                                className={index <= (hover || rating) ? " text-yellow-500" : " text-gray-500"}
                                                onClick={() => setRating(index)}
                                                onMouseEnter={() => setHover(index)}
                                                onMouseLeave={() => setHover(rating)}
                                            >
                                                <span className=" cursor-pointer outline-none bg-transparent text-3xl"><AiFillStar /></span>
                                            </button>
                                        );
                                    })} */}

                                </div>
                            </div>
                            <div className="w-3/4 flex flex-col">
                                <textarea
                                    ref={reviewRef}
                                    rows="5" placeholder='Leave a review' className="flex items-center group  px-6 border-2 border-gray-300 rounded-xl transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 resize-none text-gray-600"></textarea>
                                <button className="flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer my-6">Submit</button>
                            </div>
                        </div>
                    </form>
                    {/* <div className="text-center p-5 flex-auto justify-center">
                        <div className="mt-16 grid space-y-4">
                            <label className="font-semibold text-xs mt-3" >Candidate Phone number</label>
                            <input
                                // ref={candidatePhoneRef}
                                // value={candidatePhone}
                                // onChange={(e) => setCandidatePhone(e.target.value)}
                                className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="number" />
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default MyCollege;