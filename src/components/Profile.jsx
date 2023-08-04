import { useContext } from "react";
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";

const Profile = () => {
    const { user, handleSignOut } = useContext(COLLEGE_CONTEXT)
    return (
        <div className="container mx-auto my-60">
            <div>

                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={user.photoURL} />
                    </div>

                    <div className="mt-16 py-4">
                        <h1 className="font-bold text-center text-3xl text-gray-900">{user.displayName}</h1>

                        <p>
                            <span>

                            </span>
                        </p>
                        <div className="my-5 px-6">
                            <div className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connected with <span className="font-bold">{user.email}</span></div>
                        </div>


                        <div className="w-full">
                            <h3 className="font-medium text-gray-900 text-left px-6">Other Informations</h3>
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 bg-slate-600">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Address
                                    <span className="text-gray-500 text-xs"></span>
                                </a>

                                <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 bg-slate-600 block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    University
                                    <span className="text-gray-500 text-xs"></span>
                                </a>

                                {/* <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Posted new article in <span className="font-bold">#Web Dev</span>
                                    <span className="text-gray-500 text-xs">49 min ago</span>
                                </a>

                                <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Edited website settings
                                    <span className="text-gray-500 text-xs">1 day ago</span>
                                </a>

                                <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Added new rank
                                    <span className="text-gray-500 text-xs">5 days ago</span>
                                </a> */}

                            </div>
                        </div>

                        <div className="flex justify-between items-center my-5 px-6 gap-3">
                            <button className="text-gray-500 bg-gray-900 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-2/4 py-3">Edit Profile </button>
                            {user ?
                                <button onClick={handleSignOut} className="text-gray-500 bg-gray-900 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-2/4 py-3">Sign Out </button>
                                : ""
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;