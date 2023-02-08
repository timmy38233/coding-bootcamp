import { useEffect, useState } from 'react';

import './Login.css';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logout = (e) => props.setLoginState({ isLoggedIn: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        const approvedUser = { username: 'tim', password: 'tim123' };

        if (username === approvedUser.username && password === approvedUser.password) {
            props.setLoginState({ isLoggedIn: true, username: username });
        }
         else {
            return alert('Invalid authentication');
         }
    }

    useEffect(() => {
        localStorage.setItem('loginState', JSON.stringify(props.loginState));
    }, [props.loginState]);
    
    return (
        <div className="Login">
            {props.loginState.isLoggedIn ?
                <div className="Login__Welcome">Hi {props.loginState.username} <button onClick={logout}>Logout</button></div>
                :
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
            }
        </div>
    );
}

export default Login;