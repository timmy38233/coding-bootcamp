import Login from '../Login/Login';

import './Header.scss';

function Header(props) {

    const colorSchemeBtnTxt = {'light': '☼', 'dark': '☽', 'colorful': '🪄', 'random': '🔥'}

    return (
        <header className={`Header Header--${props.colorScheme}`}>
            <div className="Header__Container">
                <button onClick={props.cycleColorScheme}>{colorSchemeBtnTxt[props.colorScheme]}</button>
                <h1 className="Header__Greeting">{props.mainAuthor}'s Blog</h1>
                <Login loginState={props.loginState} setLoginState={props.setLoginState} />
            </div>
        </header>
    );
}

export default Header;