// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnPiib70cGt0atpwUSEJgt2-hMZ7tj60A",
    authDomain: "college-mern.firebaseapp.com",
    projectId: "college-mern",
    storageBucket: "college-mern.appspot.com",
    messagingSenderId: "848899912321",
    appId: "1:848899912321:web:22c8bbf9a20cafd7a45380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }