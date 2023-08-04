import { useContext } from 'react';
import { COLLEGE_CONTEXT } from '../context/CollegeInfoProvider';
import logo from '../assets/line.png'


const Login = () => {
    const { handleGoogleLogin, handleFacebookLogin, email, setEmail,
        password, setPassword, handleLogin } = useContext(COLLEGE_CONTEXT)


    return (
        <div>
            {/* {value ? <Home /> : */}
            <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4">
                                    <img src={logo} loading="lazy" className="w-10" alt="tailus logo" />
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of Dream Colleges.</h2>
                                </div>
                                <form onSubmit={handleLogin}>
                                    <div className="mt-16 grid space-y-4">
                                        <label className="font-semibold text-xs" >Username or Email</label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                        <label className="font-semibold text-xs mt-3" >Password</label>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="password" />

                                        <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-white text-black font-semibold hover:bg-gray-800 cursor-pointer' type="submit" value="Login" />

                                        <p>Or use any of these...</p>

                                        <button
                                            onClick={handleGoogleLogin}
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">

                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                            </div>
                                        </button>

                                        <button
                                            onClick={handleFacebookLogin}
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>

                                {/* <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                    <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                                    <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* } */}
        </div>
    );
};

export default Login;