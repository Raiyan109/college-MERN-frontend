import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'
import logo from '../assets/line.png'
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [color, setColor] = useState(false)
    const { user, email, currentUser } = useContext(COLLEGE_CONTEXT)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    return (
        <div className={color ? 'bg-gray-600 transition-all fixed w-full h-[100px] z-10 p-10' : 'fixed w-full h-[90px] z-10 p-10'}>


            <nav className="px-2 sm:px-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link className="flex items-center" to='/'>
                        <img src={logo} alt='header-logo' style={{ width: "38px", height: "40px" }}></img>
                    </Link>

                    <button
                        onClick={() => setMenu(!menu)}
                        className="items-center md:hidden text-yellow-300 text-2xl"
                    >
                        {menu ? <FaTimes /> : <FaBars />}
                        <span className="sr-only">Open main menu</span>
                    </button>


                    <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block bg-gray-600 w-[900px] h-[600px] flex items-center justify-center transition-all" : "hidden"}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className='block py-2 pr-4 pl-4 '><Link className='text-[15px] font-bold ' to='/'>Home</Link></li>
                            <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/admission'>Admission</Link></li>
                            <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/colleges'>Colleges</Link></li>
                            <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/myCollege'>My College </Link></li>

                            {/* <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/signUp'>
                                
                                Sign Up
                            </Link></li> */}
                            {
                                currentUser ?
                                    <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/profile'>
                                        {currentUser.displayName ? currentUser.displayName : currentUser.email}
                                        {/* {currentUser?.email} */}
                                    </Link></li>
                                    :
                                    <li className='block py-2 pr-4 pl-3 '><Link className='text-[15px] font-bold ' to='/login'>
                                        {/* <BiLogIn /> */}
                                        Login
                                    </Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;