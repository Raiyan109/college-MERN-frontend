import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { COLLEGE_CONTEXT } from "../context/CollegeInfoProvider";

const PrivateRoute = ({ children }) => {
    const { user, currentUser } = useContext(COLLEGE_CONTEXT)

    return currentUser ? children : <Navigate to='/login' />
};

export default PrivateRoute;