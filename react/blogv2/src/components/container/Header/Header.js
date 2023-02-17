import { Link } from "react-router-dom";
import ColorSchemeCycler from "../ColorSchemeCycler/ColorSchemeCycler";
import LoginButton from "../LoginButton/LoginButton";

import './Header.scss';

function Header(props) {
    return (
        <header className={`Header Header--${props.theme}`}>
            <div className="Header__Container">
                <ColorSchemeCycler />
                <h1 className="Header__Greeting"><Link to='/'>Tim's Blog</Link></h1>
                <LoginButton />
            </div>
        </header>
    )
}

export default Header