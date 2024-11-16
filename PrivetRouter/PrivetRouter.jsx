
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        // You can return a loading spinner here if you have one, or any loading indication
        return <div>Loading...</div>;
    }

    // If user is authenticated, render the children component
    if (user) {
        return children;
    }

    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
