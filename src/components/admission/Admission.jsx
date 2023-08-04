import Navbar from "../Navbar";
import { CollegesList } from "../../constants";
import { useContext } from "react";
import { COLLEGE_CONTEXT } from "../../context/CollegeInfoProvider";
import CandidateModal from "./CandidateModal";

const Admission = () => {
    const { showModal, setShowModal } = useContext(COLLEGE_CONTEXT)
    return (
        <div>
            <Navbar />
            <div className="w-full p-32">
                <h3 className="font-medium text-gray-900 text-left px-6 text-2xl">Select Your Desired College</h3>
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    {
                        CollegesList.map((item) => (
                            <div
                                onClick={() => setShowModal(true)}
                                key={item.id} className="w-full border-t border-gray-100 text-gray-100 hover:text-black py-4 pl-6 pr-3 block hover:bg-gray-400 transition duration-150 bg-slate-600 cursor-pointer">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                {item.name}
                                <span className="text-gray-500 text-xs"></span>
                            </div>
                        ))
                    }

                    {showModal ? (
                        <>
                            <CandidateModal />
                        </>
                    ) : null}
                </div>
            </div>

        </div>
    );
};

export default Admission;