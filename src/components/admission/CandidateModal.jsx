import ModalImg from '../../assets/line.png'
import { BsFillPersonFill } from 'react-icons/bs'

const CandidateModal = () => {
    return (
        <div>
            <form >
                <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${ModalImg})` }} id="modal-id">
                    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div className="">
                            <div className="text-center p-5 flex-auto justify-center">

                                <div className="mt-16 grid space-y-4">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 -top-1 -mt-24 flex items-center justify-center text-indigo-500 text-3xl">
                                            <BsFillPersonFill />
                                        </div>
                                    </div>
                                    <label className="font-semibold text-xs" >Candidate Name</label>
                                    <input
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Subject</label>
                                    <input
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Candidate Email</label>
                                    <input
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <label className="font-semibold text-xs mt-3" >Candidate Phone number</label>
                                    <input
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <label className="font-semibold text-xs mt-3" >Address</label>
                                    <input

                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <label className="font-semibold text-xs mt-3" >Date of birth</label>
                                    <input

                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-white text-black font-semibold hover:bg-gray-800 cursor-pointer' type="submit" value="Submit" />


                                </div>
                            </div>
                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                    Cancel
                                </button>
                                <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CandidateModal;