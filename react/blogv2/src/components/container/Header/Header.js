import ColorSchemeCycler from "../ColorSchemeCycler/ColorSchemeCycler";
import Login from "../Login/Login";

import './Header.scss';

function Header(props) {
    return (
        <header className={`Header Header--${props.theme}`}>
            <div className="Header__Container">
                <ColorSchemeCycler />
                <h1 className="Header__Greeting">Tim's Blog</h1>
                <Login />
            </div>
        </header>
    )
}

export default Header