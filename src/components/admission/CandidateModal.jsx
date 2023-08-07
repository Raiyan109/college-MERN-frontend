import { useContext } from 'react';
import ModalImg from '../../assets/pexels-stanley-morales-1454360.jpg'
import { BsFillPersonFill } from 'react-icons/bs'
import { COLLEGE_CONTEXT } from '../../context/CollegeInfoProvider';

const CandidateModal = () => {
    const { handleCandidateForm,
        candidateNameRef,
        candidateSubjectRef,
        candidateEmailRef,
        candidatePhoneRef,
        candidateAddressRef,
        candidateBirthRef,
        setShowModal, setError, setLoading, } = useContext(COLLEGE_CONTEXT)

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            await handleCandidateForm(candidateNameRef.current.value, candidateSubjectRef.current.value, candidateEmailRef.current.value, candidatePhoneRef.current.value, candidateAddressRef.current.value, candidateBirthRef.current.value)
            // navigate('/')
        } catch (error) {
            setError('Failed to update data')
        }
        setLoading(false)
    }
    return (
        <div>

            <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${ModalImg})` }} id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <div className="">
                        <div className="text-center p-5 flex-auto justify-center">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-16 grid space-y-4">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 -top-1 -mt-24 flex items-center justify-center text-indigo-500 text-3xl">
                                            <BsFillPersonFill />
                                        </div>
                                    </div>
                                    <label className="font-semibold text-xs" >Candidate Name</label>
                                    <input
                                        ref={candidateNameRef}
                                        // value={candidateName}
                                        // onChange={(e) => setCandidateName(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Subject</label>
                                    <input
                                        ref={candidateSubjectRef}
                                        // value={candidateSubject}
                                        // onChange={(e) => setCandidateSubject(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Candidate Email</label>
                                    <input
                                        ref={candidateEmailRef}
                                        // value={candidateEmail}
                                        // onChange={(e) => setCandidateEmail(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <label className="font-semibold text-xs mt-3" >Candidate Phone number</label>
                                    <input
                                        ref={candidatePhoneRef}
                                        // value={candidatePhone}
                                        // onChange={(e) => setCandidatePhone(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="number" />

                                    <label className="font-semibold text-xs mt-3" >Address</label>
                                    <input
                                        ref={candidateAddressRef}
                                        // value={candidateAddress}
                                        // onChange={(e) => setCandidateAddress(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="text" />

                                    <label className="font-semibold text-xs mt-3" >Date of birth</label>
                                    <input
                                        ref={candidateBirthRef}
                                        // value={candidateBirth}
                                        // onChange={(e) => setCandidateBirth(e.target.value)}
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="number" />

                                    <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer' type="submit" value="Submit" />


                                </div>
                            </form>
                        </div>
                        <div className="p-3  mt-2 text-center space-x-4 md:block">
                            <button
                                onClick={() => setShowModal(false)}
                                className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CandidateModal;