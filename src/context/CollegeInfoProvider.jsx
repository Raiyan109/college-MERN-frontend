import { createContext, useEffect, useState } from "react";
import { auth, provider, facebookProvider } from '../firebase.config'
import { signInWithPopup, signOut } from 'firebase/auth';

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


    // AUTH
    // const [value, setValue] = useState('')
    const [user, setUser] = useState('')

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider)
            .then((data) => {
                const user = data.user
                setUser(user)
            })
            .catch((err) => {
                console.error('Firebase Google Login Error:', err);
            });
    };

    const handleFacebookLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth, facebookProvider)
            .then((data) => {
                const user = data.user
                setUser(user)
            })
            .catch((err) => {
                console.error('Firebase Facebook Login Error:', err);
            });
    };

    // SIGN OUT
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((err) => {
                console.error('Firebase Logout Error:', err);
            });
    }
    const value = {
        admission,
        handleGoogleLogin,
        handleFacebookLogin,
        user,
        handleSignOut
    }
    return (
        <COLLEGE_CONTEXT.Provider value={value}>
            {children}
        </COLLEGE_CONTEXT.Provider>
    )
}

export default CollegeInfoProvider