import { useContext } from "react";
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";
import { Link } from "react-router-dom";
import logo from '../assets/line.png'

const ForgotPassword = () => {
    const { error, setError, setLoading, emailRef, resetPassword, message, setMessage } = useContext(COLLEGE_CONTEXT)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch (error) {
            setError('Failed to reset password')
        }
        setLoading(false)

    }
    return (
        <div>
            <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4">
                                    <img src={logo} loading="lazy" className="w-10" alt="tailus logo" />
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Password Reset</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-16 grid space-y-4">
                                        {error &&
                                            <p className="py-3 px-4 bg-red-100 text-black">{error}</p>
                                        }
                                        {message &&
                                            <p className="py-3 px-4 bg-gray-500 text-black">{message}</p>
                                        }
                                        <label className="font-semibold text-xs" >Email</label>
                                        <input
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            ref={emailRef}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />



                                        <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer' type="submit" value="Reset Password" />


                                    </div>
                                </form>

                                {/* <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                    <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                                    <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                                </div> */}
                                <p className='text-blue-500 ml-3 text-center font-semibold mt-7'> <Link to={'/login'}>Login</Link></p>
                                <p className='mt-6 font-semibold'>Need and account?
                                    <Link className='text-blue-500 ml-3' to={'/signUp'}>Sign up</Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;