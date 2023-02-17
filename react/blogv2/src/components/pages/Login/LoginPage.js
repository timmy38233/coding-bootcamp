import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Actions from '../../../state/Actions';
import { AppStateContext } from '../../../state/context';
import './LoginPage.scss';

function LoginPage() {
    const { appState, dispatchAppState } = useContext(AppStateContext);
    const navigate = useNavigate();

    // TODO: Outsource in custom hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const approvedUser = { username: 'tim', password: 'tim123' };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === approvedUser.username && password === approvedUser.password) {
            const newLoginState = { login: { isLoggedIn: true, username: username } };
            dispatchAppState({
                type: Actions.UserLogin,
                payload: newLoginState,
            });

            navigate('/');

        } else {
            return alert('Invalid authentication');
        }
    };
    return (
        <div className="LoginPage">
            {appState.login.isLoggedIn ? (
                <div className="LoginPage__Greeting">
                    Hi {appState.login.username}, you are already logged in!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
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

export default LoginPage;
