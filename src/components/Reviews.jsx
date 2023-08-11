import { StudentsReviews } from "../constants";
import Review from "./Review";


const Reviews = () => {
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
                            <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-32">
                                {
                                    StudentsReviews.map((review, idx) =>
                                        <Review key={review.id} review={review} id={review.id} idx={idx} />
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;