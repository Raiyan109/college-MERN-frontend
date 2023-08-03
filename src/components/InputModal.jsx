import { useState } from 'react';
import { CollegesList } from '../constants/index'
import { Link } from 'react-router-dom';
import InputModalDetail from './InputModalDetail';

const InputModal = () => {
    const [search, setSearch] = useState([])

    const handleSearch = (query) => {
        const filteredColleges = CollegesList.filter((college) =>
            college.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearch(filteredColleges);
    };

    const { id, image, name, admissionDates, events, researchHistory, sports } = CollegesList
    return (
        <div>
            <div className="bg-slate-700 px-10 py-20 w-full mt-8">
                <form onChange={(e) => handleSearch(e.target.value)}>
                    <div className="max-w-xl">
                        <div className="flex space-x-1 items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-white text-lg font-semibold">Search Colleges</p>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex rounded-md overflow-hidden w-full">
                                <input type="text" className="w-full rounded-md rounded-r-none py-3" />
                            </div>
                        </div>

                        {search.length > 0 ? (
                            // Display the search results
                            search.map((college) => (
                                <InputModalDetail key={college.id} id={college.id} college={college} />
                            ))
                        ) : (
                            // Display a message when no results are found
                            <p>No colleges found for the given search query.</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputModal;