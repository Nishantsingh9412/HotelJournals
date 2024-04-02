import React, { useEffect, useState } from 'react'
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { setCurrentUser } from './redux/actions/CurrentUser';
import LoginSuperAdmin from './components/superAdmin/auth/LoginSuperAdmin';
import PuffLoader from 'react-spinners/PuffLoader';

const ProtectedRoute = ({ component: Component }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    var User = useSelector((state) => (state.currentuserReducer));  // Profile Data of the user
    console.log(17, User);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login/superadmin')
        dispatch(setCurrentUser(null));
    }

    var token;
    useEffect(() => {
        token = User?.token;
        console.log(24, token);
        if (token) {
            const decodeToken = decode(token);
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [token])


    useEffect(() => {
        if (!User) {
            setIsAuthenticated(false);
            setIsLoaded(true);
        } else {
            setIsAuthenticated(true);
            setIsLoaded(false);
        }
    }, [User])

    useEffect(() => {
        let timeoutId;
        if (!isAuthenticated) {
            timeoutId = setTimeout(() => {
                navigate('/login/superadmin');
            }, 5000);
        }

        // Cleanup function
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isAuthenticated]);


    if (isLoaded) {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>
            </>)
    }

    return isAuthenticated ? <Component /> : null;
}

export default ProtectedRoute