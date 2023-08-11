import { CollegesListForHomePage } from "../constants";
import College from "./College";

const Colleges = () => {
    return (
        <div>
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Your <br />Dream Colleges</h1>
                        {/* <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3> */}
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-pink-200 h-full">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-32">
                                {
                                    CollegesListForHomePage.map((college, idx) =>
                                        <College key={college.id} college={college} id={college.id} idx={idx} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Colleges;