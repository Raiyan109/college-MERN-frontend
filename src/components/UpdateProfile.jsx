import { BsFillPersonFill } from 'react-icons/bs';
import ModalImg from '../assets/pexels-stanley-morales-1454360.jpg'

const ProfileModal = () => {
    return (
        <div>
            <div>
                <form >
                    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${ModalImg})` }} id="modal-id">
                        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                            <div className="">
                                <div className="text-center p-5 flex-auto justify-center">

                                    <div className="mt-16 grid space-y-4">
                                        {/* <div className="relative">
                                            <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 -top-1 -mt-24 flex items-center justify-center text-indigo-500 text-3xl">
                                                <BsFillPersonFill />
                                            </div>
                                        </div> */}
                                        <label className="font-semibold text-xs" >Name</label>
                                        <input
                                            // value={candidateName}
                                            // onChange={(e) => setCandidateName(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                        <label className="font-semibold text-xs mt-3" >Email</label>
                                        <input
                                            // value={candidateSubject}
                                            // onChange={(e) => setCandidateSubject(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                        <label className="font-semibold text-xs mt-3" >Address</label>
                                        <input
                                            // value={candidateEmail}
                                            // onChange={(e) => setCandidateEmail(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                        <label className="font-semibold text-xs mt-3" >University</label>
                                        <input
                                            // value={candidatePhone}
                                            // onChange={(e) => setCandidatePhone(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                        {/* <label className="font-semibold text-xs mt-3" >Address</label>
                                    <input
                                        value={candidateAddress}
                                        onChange={(e) => setCandidateAddress(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Date of birth</label>
                                    <input
                                        value={candidateBirth}
                                        onChange={(e) => setCandidateBirth(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="number" />

                                    <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-white text-black font-semibold hover:bg-gray-800 cursor-pointer' type="submit" value="Submit" /> */}


                                    </div>
                                </div>
                                <div className="p-3  mt-2 text-center space-x-4 md:block">
                                    <button className="text-white bg-gray-800  hover:bg-gray-900 rounded transition duration-150 ease-in font-medium text-sm text-center w-2/4 py-3">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileModal;