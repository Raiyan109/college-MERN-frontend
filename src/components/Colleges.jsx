import { CollegesListForHomePage } from "../constants";
import College from "./College";

const Colleges = () => {
    return (
        <div>
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 px-4">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h1 id='article' className="text-3xl font-bold text-blue">Your Dream Colleges</h1>
                            </div>
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