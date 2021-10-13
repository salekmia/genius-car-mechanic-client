import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth()
    return (
        <div>
            <button onClick={googleSignIn} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;