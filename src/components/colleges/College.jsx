import { Link } from "react-router-dom";

const College = ({ college, id, idx }) => {
    return (
        <div>
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                    <div>
                        <div className="w-4 h-1/5 bg-red-50	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50"></div>
                        <img src={college.image} alt="https://www.pngegg.com/en/png-epwii/download" />
                    </div>
                    <div className="px-7 mt-5">
                        <h1 className="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">{idx + 1}</h1>
                        <h2 className="text-1xl mt-4 font-bold">{college.name}</h2>
                        <p className="mt-2 opacity-60 group-hover:opacity-70 ">Best selection of scandinavia couch for your home</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;