import { createContext, useEffect, useRef, useState } from "react";
import { auth, provider, facebookProvider } from '../firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail as updateEmailInAuth } from "firebase/auth";
import Loading from "../pages/Loading";


export const COLLEGE_CONTEXT = createContext()

const CollegeInfoProvider = ({ children }) => {

    const [admission, setAdmission] = useState([])
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fetchEmailLogin, setFetchEmailLogin] = useState([])
    // Email password Sign Up
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [currentUser, setCurrentUser] = useState(null)
    // Candidate states
    const [candidateName, setCandidateName] = useState('')
    const [candidateSubject, setCandidateSubject] = useState('')
    const [candidateEmail, setCandidateEmail] = useState('')
    const [candidatePhone, setCandidatePhone] = useState('')
    const [candidateAddress, setCandidateAddress] = useState('')
    const [candidateBirth, setCandidateBirth] = useState('')
    // Modal state
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // ADMISSION
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
    // Sign Up
    const signUp = async (email, password) => {
        try {
            setError('');
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
            setLoading(false)
        });
        return unSubscribe;
    }, []);


    // Email password Login
    const handleLogin = async (email, password) => {

        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError('Failed to create an account');
        }
        setLoading(false);

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()
        console.log(data);
    }

    useEffect(() => {
        const fetchEmailLogin = async () => {
            const response = await fetch('http://localhost:5000/api/login')

            const json = await response.json()

            if (response.ok) {
                setFetchEmailLogin(json)
            }

        }
        fetchEmailLogin()
    }, [])




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

    // RESET PASSWORD
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // UPDATE PROFILE
    const updateEmailInAuth = (email) => {
        return updateEmail(currentUser, email)
    }

    const updatePasswordInAuth = async (email) => {
        return await updatePassword(currentUser, email)
    }

    // Candidate
    const handleCandidateForm = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/candidate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                candidateName,
                candidateSubject,
                candidateEmail,
                candidatePhone,
                candidateAddress,
                candidateBirth
            })
        })

        const candidateData = await response.json()
        console.log(candidateData);
    }

    // Initial Values
    const value = {
        admission,
        handleGoogleLogin,
        handleFacebookLogin,
        user,
        handleSignOut,
        email, setEmail,
        password, setPassword,
        handleLogin,
        fetchEmailLogin,
        showModal,
        setShowModal,
        handleCandidateForm,
        candidateName,
        candidateSubject,
        candidateEmail,
        candidatePhone,
        candidateAddress,
        candidateBirth,
        setCandidateName,
        setCandidateSubject,
        setCandidateEmail,
        setCandidatePhone,
        setCandidateAddress,
        setCandidateBirth,
        emailRef,
        passwordRef,
        passwordConfirmRef,
        currentUser,
        signUp,
        error, loading, setError, setLoading,
        resetPassword, message, setMessage,
        updateEmailInAuth, updatePasswordInAuth

    }
    return (
        <COLLEGE_CONTEXT.Provider value={value}>
            {loading ? <Loading /> : children}
            {/* {children} */}
        </COLLEGE_CONTEXT.Provider>
    )
}

export default CollegeInfoProvider