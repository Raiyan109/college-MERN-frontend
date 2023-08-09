import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";

const PrivateRoute = ({ children }) => {
    const { user, currentUser } = useContext(COLLEGE_CONTEXT)
    const location = useLocation()
    if (!currentUser) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;