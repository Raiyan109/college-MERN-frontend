import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Admission from "../components/admission/Admission";
import Colleges from "../components/colleges/Colleges";
import MyCollege from "../components/myCollege/MyCollege";
import NotFound from "../pages/NotFound";
import CollegeDetail from "../components/CollegeDetail";
import Login from "../pages/Login";
import Profile from "../components/Profile";
import SignUp from "../pages/SignUp";
import UpdateProfile from '../components/UpdateProfile'
import PrivateRoute from '../pages/PrivateRoute'
import ForgotPassword from "../pages/ForgotPassword";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/admission',
        element: <Admission />
    },
    {
        path: '/colleges',
        element: <Colleges />
    },
    {
        path: '/colleges/:id',
        element: <CollegeDetail />
    },
    {
        path: '/myCollege',
        element:
            <PrivateRoute><MyCollege /></PrivateRoute>

    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/update-profile',
        element: <UpdateProfile />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes