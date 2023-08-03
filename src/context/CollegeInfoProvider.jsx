import { createContext, useEffect, useState } from "react";


export const COLLEGE_CONTEXT = createContext()

const CollegeInfoProvider = ({ children }) => {

    const [admission, setAdmission] = useState([])

    useEffect(() => {
        const fetchAdmission = async () => {
            const response = await fetch('https://college-mern-backend-raiyan109.vercel.app/api/admission')

            const json = await response.json()

            if (response.ok) {
                setAdmission(json)
            }

        }
        fetchAdmission()
    }, [])

    const value = {
        admission
    }
    return (
        <COLLEGE_CONTEXT.Provider value={value}>
            {children}
        </COLLEGE_CONTEXT.Provider>
    )
}

export default CollegeInfoProvider