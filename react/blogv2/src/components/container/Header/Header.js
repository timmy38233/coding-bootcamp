import ColorSchemeCycler from "../ColorSchemeCycler/ColorSchemeCycler";
import LoginForm from "../LoginForm/LoginForm";

import './Header.scss';

function Header(props) {
    return (
        <header className={`Header Header--${props.theme}`}>
            <div className="Header__Container">
                <ColorSchemeCycler />
                <h1 className="Header__Greeting">Tim's Blog</h1>
                <LoginForm />
            </div>
        </header>
    )
}

export default Header