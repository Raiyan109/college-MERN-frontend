import { useContext } from "react";
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";
import { AiFillStar } from 'react-icons/ai'
const AddReviewHome = () => {
    const { rating, setRating, hover, setHover } = useContext(COLLEGE_CONTEXT)
    return (
        <div>
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg p-10">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Your opinion<br />matters to us!</h1>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-lg text-gray-800">Please give a five star rating </span>
                                <div className="flex space-x-3">
                                    {[...Array(5)].map((star, index) => {
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
                                    })}

                                </div>
                            </div>
                            <div className="w-3/4 flex flex-col">
                                <textarea rows="5" placeholder='Leave a review' className="flex items-center group  px-6 border-2 border-gray-300 rounded-xl transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 resize-none text-gray-600"></textarea>
                                <button className="flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer my-6">Submit</button>
                            </div>
                        </div>
                        {/* <div className="h-20 flex items-center justify-center">
                            <a href="#" className="text-gray-600">Maybe later</a>
                        </div> */}
                    </div>

                    {/* <div className="mt-8 text-gray-700">
                        Crédits <a className="font-bold" href="https://dribbble.com/shots/12052834-Rating-popup">Goga</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AddReviewHome;