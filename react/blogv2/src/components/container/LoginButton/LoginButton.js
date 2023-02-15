import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Actions from '../../../state/Actions';
import { AppStateContext } from '../../../state/context';

import './LoginButton.scss';

function LoginButton() {
    const { appState, dispatchAppState } = useContext(AppStateContext);
    const navigate = useNavigate();

    const logout = (e) =>
        dispatchAppState({ type: Actions.UserLogin, payload: { login: { isLoggedIn: false } } });


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
    }, [dispatchAppState]);

    useEffect(() => {
        localStorage.setItem('loginState', JSON.stringify(appState.login));
    }, [appState.login]);
    
    return (
        <div className="LoginButton">
            {appState.login.isLoggedIn ? (
                <div className="LoginForm__Greeting">
                    Hi {appState.login.username} <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={() => navigate('/login')}>Login</button>
            )}
        </div>
    );
}

export default LoginButton;
