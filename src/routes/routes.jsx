import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Admission from "../components/admission/Admission";
import Colleges from "../components/colleges/Colleges";
import MyCollege from "../components/myCollege/MyCollege";
import NotFound from "../pages/NotFound";
import CollegeDetail from "../components/CollegeDetail";
import Login from "../pages/Login";
import Profile from "../components/Profile";

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
        element: <MyCollege />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes