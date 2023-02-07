import Login from '../Login/Login';

import './Header.css';

function Header(props) {
    return (
        <header className="Header">
            <div className="Header__Container">
                <h1 className="Header__Greeting">{props.mainAuthor}'s Blog</h1>
                <Login loginState={props.loginState} setLoginState={props.setLoginState} />
            </div>
        </header>
    );
}

export default Header;