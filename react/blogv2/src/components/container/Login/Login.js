import { useContext, useEffect, useState } from 'react';
import Actions from '../../../state/Actions';
import { AppStateContext } from '../../../state/context';

function Login() {
    const { appState, dispatchAppState } = useContext(AppStateContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const approvedUser = { username: 'tim', password: 'tim123' };

    useEffect(() => {
        let loginState;
        try {
            loginState = JSON.parse(localStorage.getItem('loginState'));
        }
        catch (e) {
            console.log(e);
        }
        if (!loginState || !loginState.isLoggedIn) {
            loginState = { isLoggedIn: false };
        }
        dispatchAppState({ type: Actions.UserLogin, payload: { login: loginState } });
    }, []);

    useEffect(() => {
        localStorage.setItem('loginState', JSON.stringify(appState.login));
    }, [appState.login]);

    const logout = (e) =>
        dispatchAppState({ type: Actions.UserLogin, payload: { login: { isLoggedIn: false } } });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === approvedUser.username && password === approvedUser.password) {
            dispatchAppState({
                type: Actions.UserLogin,
                payload: { login: { isLoggedIn: true, username: username } },
            });
        } else {
            return alert('Invalid authentication');
        }
    };
    return (
        <div className="Login">
            {appState.login.isLoggedIn ? (
                <div className="Login__Greeting">
                    Hi {appState.login.username} <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="User..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Login" />
                </form>
            )}
        </div>
    );
}

export default Login;
