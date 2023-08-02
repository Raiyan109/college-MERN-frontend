import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Admission from "../components/admission/Admission";
import Colleges from "../components/colleges/Colleges";
import MyCollege from "../components/myCollege/MyCollege";
import NotFound from "../pages/NotFound";

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
        path: '/myCollege',
        element: <MyCollege />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes